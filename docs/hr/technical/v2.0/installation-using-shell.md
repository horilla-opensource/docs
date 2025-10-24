# Installation using Shell

You can also run the Horilla application using a shell script.
<div class="responsive-iframe">
    <iframe width="840" height="500" src="https://www.youtube.com/embed/bJ6r6yyd4u8" title="How to Install Horilla in MacOS: Ubuntu using shell script? | Horilla HR Software #opensource" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Windows

For Windows: [Click Here To Download](https://www.horilla.com/wp-content/uploads/2023/06/horilla-install-windows.zip).

1. Download the `install.bat` file from the provided link.
2. Open a command prompt window and navigate to the directory where the `install.bat` file is located.
3. Run the `install.bat` file by typing the following command and pressing Enter:
   ```bash
   install.bat
   ```
4. The installation process will begin, and you may be prompted to enter information. Follow the prompts and provide the necessary details.
5. If everything runs correctly, the server will be started automatically, and you can access the Horilla app by going to:
   ```
   http://localhost:8000/
   ```
   
Alternatively, you can manually run the server by navigating to the Horilla directory and executing the following command:
```bash
python manage.py runserver
```

## Ubuntu & macOS

- For Ubuntu: [Click Here To Download](https://www.horilla.com/wp-content/uploads/2023/06/horilla_install_ubuntu.zip)
- For macOS: [Click Here To Download](https://www.horilla.com/wp-content/uploads/2023/06/horilla_install_macOS.zip)
### For Ubuntu:

1. Download the `horilla_install_ubuntu.sh` script.
2. Open the terminal in the directory where the file is located and run the following command to add the necessary permission:
   ```bash
   chmod +x horilla_install_ubuntu.sh
   ```
3. Run the `install.sh` script:
   ```bash
   ./horilla_install_ubuntu.sh
   ```

### For macOS:

1. Download the `horilla_install_macOS.sh` script.
2. Open the terminal in the directory where the file is located and run the following command to add the necessary permission:
   ```bash
   chmod +x horilla_install_macOS.sh
   ```
3. Run the `install.sh` script:
   ```bash
   ./horilla_install_macOS.sh
   ```

After running the script, if everything runs correctly, the server will be started automatically, and you can access the Horilla app by going to:
```
http://localhost:8000/
```

Alternatively, you can manually run the server by navigating to the Horilla directory and executing the following command:
```bash
python manage.py runserver
```

## Notes

- By default, the demo database will be loaded, which includes an admin user with the following credentials:
  - **Username**: `admin`
  - **Password**: `admin`
  
- If you want to start with a fresh database, you can modify the database settings in the `horilla/settings.py` file. Change the database name as per your requirement.

In the `DATABASES` section of the `settings.py` file, you will find:
```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "TestDB_Horilla.sqlite3",
    }
}
```
Change the `NAME` field to your desired SQLite database name (ensure the file format is `.sqlite3`).

- To run the server after making changes, use the following command:
  ```bash
  python manage.py runserver
  ```
