
# Horilla Deployment using a Single Service File on Linux

## Step 1: Set Up the Horilla Application

1. **Pull the Horilla Source Code**  
   Clone or pull the Horilla source code to `/opt/Horilla_Main`:

   ```bash
   sudo git pull https://github.com/horilla-opensource/horilla.git master
   ```

2. **Set Directory Ownership**  
   Change the ownership of the `/opt/Horilla_Main` directory to `ec2-user`:

   ```bash
   sudo chown -R ec2-user:ec2-user /opt/Horilla_Main
   ```

3. **Create a Virtual Environment**  
   Navigate to the project directory and create a virtual environment for Horilla:

   ```bash
   cd /opt/Horilla_Main
   python3 -m venv horillavenv
   ```

4. **Activate the Virtual Environment and Install Dependencies**  
   Activate the virtual environment and install the necessary dependencies from `requirements.txt`:

   ```bash
   source horillavenv/bin/activate
   pip install -r requirements.txt
   ```

After completing these steps, continue with setting up the systemd service.

---

## Step 2: Create a Service File for Horilla

1. **Create the Service File**  
   Create a systemd service file to manage the Horilla application:

   ```bash
   sudo nano /etc/systemd/system/horilla.service
   ```

2. **Add Configuration**  
   Add the following configuration to the service file, specifying the port (default here is `8000`):

   ```ini
   [Unit]
   Description=Horilla Development Server
   After=network.target

   [Service]
   User=ec2-user
   Group=ec2-user
   WorkingDirectory=/opt/Horilla_Main
   Environment="DJANGO_SETTINGS_MODULE=horilla.settings"

   ExecStart=/opt/Horilla_Main/horillavenv/bin/python3 manage.py runserver 0.0.0.0:8000
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

## Step 3: Reload Systemd and Start the Horilla Service

Reload systemd to recognize the new service file, enable the service to start on boot, and start the Horilla service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable horilla.service
sudo systemctl start horilla.service
```

To check if Horilla is running correctly:

```bash
sudo systemctl status horilla.service
```

---

## Step 4: Activate the Virtual Environment and Collect Static Files

If Horilla is running successfully, activate the virtual environment and collect static files.

```bash
cd /opt/Horilla_Main
. horillavenv/bin/activate
python3 manage.py collectstatic
```

---

## Step 5: Configure for Production

1. **Update Settings for Production**  
   Open `settings.py` and set `DEBUG` to `False`:

   ```bash
   sudo nano horilla/settings.py
   ```

   Inside `settings.py`:

   ```python
   DEBUG = False
   ```

2. **Set ALLOWED_HOSTS**  
   Update the `ALLOWED_HOSTS` list in `settings.py` with your domain or IP address:

   ```python
   ALLOWED_HOSTS = ['your-domain.com', 'your-ip-address']
   ```

---

## Step 6: Configure Media File Serving

If media files are not loading, add a route in `urls.py` to serve them.

1. **Edit URLs for Media Files**  
   Open `urls.py`:

   ```bash
   sudo nano horilla/urls.py
   ```

2. **Add Media Route**  
   Import the `serve` function and configure the URL pattern for media files:

   ```python
   from django.conf import settings
   from django.views.static import serve

   urlpatterns = [
       # Other paths
   ]

   if not settings.DEBUG:
       urlpatterns += [
           path('media/<path:path>', serve, {'document_root': settings.MEDIA_ROOT}),
       ]
   ```

---

## Step 7: Restart the Horilla Service

After making all changes, restart the Horilla service to apply updates:

```bash
sudo systemctl restart horilla.service
```

---

## Summary

This guide should set up Horilla as a systemd service with static and media file serving in a production-like environment. You should now have Horilla running on your specified port, ready to handle requests.
