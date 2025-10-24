# Database Setup
By default an SQLite database will be set up for the project, in case you wish to change the database of your choice, please use the below reference to do the same.
<div class="responsive-iframe">
    <iframe width="840" height="500" src="https://www.youtube.com/embed/VA9S5bib4TU" title="How to load demo database in Horilla? | Horilla HR Software #opensource" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Supported Databases
As of the latest release, our HR software now exclusively supports the following databases:

1. PostgreSQL
    - Recommended for production environments.
    - Provides robust performance and scalability.
    - Supports advanced features such as JSONB, full-text search, and more.
2. SQLite3
    - Ideal for development and testing.
    - Lightweight and easy to set up.
    - Not recommended for production due to limitations in scalability and concurrency.
#### Deprecated Database Support
In previous versions, the software supported a wider range of databases. However, to streamline development and leverage the advanced features of PostgreSQL, we have deprecated support for all other databases.

## Configuration
For detailed instructions on configuring PostgreSQL or SQLite3 with our HR software, please refer to the below section.

### Postgresql
To set up a postgresql database for the project, first you have to install the PostgreSQL and its python package psycopg2 .

- Install the psycopg2 package using pip. This package is a PostgreSQL database adapter for Python.
```bash
pip install psycopg2
```
- In the project settings file (horilla/settings.py), add the following database settings:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '<database_name>',
        'USER': '<database_user>',
        'PASSWORD': '<database_password>',
        'HOST': ' <database_host',
        'PORT': ' <database_port>',
    }
}
```
Replace `<database_name>`, `<database_user>`, `<database_password>`, `<database_host>`, and `<database_port>` with your PostgreSQL database settings.

Run migrations to create the necessary database tables.
```bash
python manage.py makemigrations
python manage.py migrate
```
For more details: [Django PostgreSQL Database](https://docs.djangoproject.com/en/4.2/ref/databases/#postgresql-notes)

### SQLite
To configure a SQLite database with Django, you can follow these steps:

- In the project settings file (settings.py), add the following database settings:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```
*This will create a SQLite database in your project directory named db.sqlite3.*
- Run migrations to create the necessary database tables.

```python
python manage.py makemigrations
python manage.py migrate
```
::: info
Note that SQLite has some limitations compared to other databases, so you may need to consider these limitations if you have a large amount of data or a high level of concurrency in your application.
:::

For more details: [Django SQLite Database](https://docs.djangoproject.com/en/4.2/ref/databases/#sqlite-notes)