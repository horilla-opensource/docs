
# Horilla Deployment Guide: Using Gunicorn and Nginx in Ubuntu

## Prerequisites
- A server running Ubuntu.
- A domain name pointed to your server.
- Root or sudo access to the server.

**Note:** In the installation steps, you can choose your preferred location and logged-in user instead of the ones used in this guide.

## Step 1: Update and Upgrade Packages
Updating and upgrading packages ensures you have the latest security patches and software updates.

```bash
sudo apt-get update
sudo apt-get upgrade
```

- `sudo apt-get update`: Fetches the list of available updates.
- `sudo apt-get upgrade`: Installs the updates.

## Step 2: Set Up Project Directory
Create a directory for your project where all files will be stored.

```bash
sudo mkdir /opt/Horilla_Main
cd /opt/Horilla_Main
```

- `sudo mkdir /opt/Horilla_Main`: Creates a new directory.
- `cd /opt/Horilla_Main`: Changes the current directory to the new directory.

## Step 3: Clone Your Repository
Initialize a Git repository and pull your project code:

```bash
sudo git init
sudo git remote add horilla https://horilla-opensource@github.com/horilla-opensource/horilla.git
sudo git pull horilla master
```

- `sudo git init`: Initializes an empty Git repository.
- `sudo git remote add horilla ...`: Adds a remote repository.
- `sudo git pull horilla master`: Pulls the code from the master branch of the remote repository.

## Step 4: Set Up Python Virtual Environment
Install `python3-venv` and create a virtual environment:

```bash
sudo apt-get install python3-venv
sudo python3 -m venv horillavenv
source horillavenv/bin/activate
```

- `sudo apt-get install python3-venv`: Installs the Python virtual environment package.
- `sudo python3 -m venv horillavenv`: Creates a virtual environment named `horillavenv`.
- `source horillavenv/bin/activate`: Activates the virtual environment.

## Step 5: Install Project Dependencies
Change ownership to avoid permission issues and install dependencies:

```bash
sudo chown -R ubuntu:ubuntu .
pip install -r requirements.txt
```

- `sudo chown -R ubuntu:ubuntu .`: Changes ownership of all files in the current directory to the `ubuntu` user.
- `pip install -r requirements.txt`: Installs all dependencies listed in the `requirements.txt` file.

## Step 6: Install and Configure PostgreSQL
Install PostgreSQL:

```bash
sudo apt-get install postgresql
```

- `sudo apt-get install postgresql`: Installs the PostgreSQL database server.

Switch to the `postgres` user and create a database and user:

```bash
sudo su postgres
psql
```

- `sudo su postgres`: Switches to the `postgres` user.
- `psql`: Opens the PostgreSQL command-line interface.

Create a new PostgreSQL role and database:

```sql
CREATE ROLE horilla LOGIN PASSWORD 'horilla';
CREATE DATABASE horilla_main OWNER horilla;
\q
```

- `CREATE ROLE horilla LOGIN PASSWORD 'horilla';`: Creates a new role with login privileges.
- `CREATE DATABASE horilla_main OWNER horilla;`: Creates a new database owned by the `horilla` role.
- `\q`: Quits the PostgreSQL prompt.

Exit the `postgres` user:

```bash
exit
```

## Step 7: Configure Environment Variables
Rename the environment file and set the necessary variables:

```bash
sudo mv .env.dist .env
```

- `sudo mv .env.dist .env`: Renames the environment file.

Edit the `.env` file and set the following values:

```env
DEBUG=True
SECRET_KEY=django-insecure-j8op9)1q8$1&0^s&p*_0%d#pr@w9qj@1o=3#@d=a(^@9@zd@%j
ALLOWED_HOSTS=www.example.com,example.com,*
DB_ENGINE=django.db.backends.postgresql
DB_NAME=horilla_main
DB_USER=horilla
DB_PASSWORD=horilla
DB_HOST=localhost
DB_PORT=5432
```

## Step 8: Run Django Migrations
Apply migrations and create a superuser:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createhorillauser
```

- `python manage.py makemigrations`: Creates new migration files based on changes in models.
- `python manage.py migrate`: Applies the migrations to the database.
- `python manage.py createhorillauser`: Creates a new admin user account.

## Step 9: Configure Gunicorn

### a. Create a Gunicorn socket file:

```bash
sudo nano /etc/systemd/system/gunicorn.socket
```

Add the following content:

```ini
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

### b. Create a Gunicorn service file:

```bash
sudo nano /etc/systemd/system/gunicorn.service
```

Add the following content:

```ini
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=ubuntu # change this to your logged-in user
Group=www-data
WorkingDirectory=/opt/Horilla_Main
ExecStart=/opt/Horilla_Main/horillavenv/bin/gunicorn \
--access-logfile - \
--workers 1 \
--bind unix:/run/gunicorn.sock \
horilla.wsgi:application

[Install]
WantedBy=multi-user.target
```

Start and enable the Gunicorn socket:

```bash
sudo systemctl start gunicorn.socket
sudo systemctl enable gunicorn.socket
```

Check the status of the Gunicorn service:

```bash
sudo systemctl start gunicorn.service
sudo systemctl status gunicorn.service
```

## Step 10: Install and Configure Nginx
Install Nginx:

```bash
sudo apt-get install nginx
```

Open your Django settings file and set the static files root:

```bash
sudo nano horilla/settings.py
```

Update the `STATIC_ROOT` location to:

```python
STATIC_ROOT = "/var/www/staticfiles"
```

Change ownership of the static files directory:

```bash
sudo chown -R ubuntu:ubuntu /var/www/
```

Configure Nginx to serve your application:

```bash
sudo nano /etc/nginx/sites-available/horilla
```

Add the following content:

```nginx
server {
    listen 80;
    server_name your_domain.com;

    location = /favicon.ico { access_log off; log_not_found off; }

    location /static/ {
        alias /var/www/staticfiles/;
    }

    location /media/ {
        alias /opt/Horilla_Main/media/;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

Enable the Nginx configuration and test it:

```bash
sudo ln -s /etc/nginx/sites-available/horilla /etc/nginx/sites-enabled
sudo nginx -t
```

## Step 11: Collect Static Files and Restart Nginx
Collect static files and restart Nginx:

```bash
python3 manage.py collectstatic
sudo systemctl restart nginx
```

## Step 12: Allow Nginx through the Firewall
Allow Nginx through the firewall:

```bash
sudo ufw allow 'Nginx Full'
sudo systemctl restart nginx
```

## Final Step: Verify Deployment
Visit your domain in a web browser to verify the deployment.

## Production-Level Settings
Once everything is in place and working fine, you can update the settings for production.

Edit the `.env` file:

```bash
sudo nano .env
```

Change the following values:

```env
DEBUG=False
SECRET_KEY=<add your new secret here>
ALLOWED_HOSTS=<your domain here>
```

### Note about SSL
If you haven't configured an SSL certificate or pointed the IP to a domain, you will need to comment out `SECURE_SSL_REDIRECT` in `horilla/settings.py`:

```python
# SECURE_SSL_REDIRECT = True
```

Add the following production settings:

```python
if not DEBUG:
    SECURE_BROWSER_XSS_FILTER = True
    # SECURE_SSL_REDIRECT = True
    SECURE_HSTS_SECONDS = 31536000
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
```

Finally, restart Gunicorn:

```bash
sudo systemctl restart gunicorn.service
```
