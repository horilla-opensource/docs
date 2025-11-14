# **Settings Migration Guide: v1 to v2**

## **Overview**

In version 2, we've restructured our Django settings to follow a modular approach for better organization and maintainability. This guide will help you migrate your custom configurations from v1 to the new settings structure.

---

## **What's Changed?**

### **v1 Structure (Old)**
```
| project/
├── settings.py
├── horilla_apps.py
├── horilla_settings.py
├── horilla_context_processors.py
└── rest_conf.py
```

### **v2 Structure (New)**

```
| project/
└── settings/    
    ├── __init__.py
    ├── base.py
    ├── addons.py
    └── local_settings.py
```

## **Migration Steps**

### **Step 1: Identify Your Custom Settings**

Before upgrading, review the files where you made custom changes in v1:

* **`settings.py`** \- Core Django settings  
* **`horilla_apps.py`** \- Application configurations  
* **`horilla_settings.py`** \- Project-specific settings

Make note of all variables you modified or added.

---

### **Step 2: Understand the New Structure**

#### **`base.py`**

Contains all default Django and project settings. **Do not modify this file directly** \- your changes will be overwritten during updates.

#### **`addons.py`**

Manages addon-specific configurations. Generally, you won't need to modify this file.

#### **`local_settings.py`**

**This is where you make all your custom changes.** This file is designed to override settings from `base.py` and will not be affected by updates.

#### **`__init__.py`**

Imports and combines all settings modules. Do not modify this file.

---

### **Step 3: Migrate Your Settings**

#### **For settings previously in `settings.py`:**

Copy any custom variables you added or modified to `local_settings.py`.

**Example:**

 
```python
# Old: settings.py
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com']
SECRET_KEY = 'your-custom-secret-key'
``` 

```python
# New: settings/local_settings.py
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com']
SECRET_KEY = 'your-custom-secret-key'
```

---

#### **For settings previously in `horilla_apps.py`:**

Move any custom app configurations to `local_settings.py`.

**Example:**
```python
# Old: horilla_apps.py
INSTALLED_APPS += [
    'your_custom_app',
]
WHITE_LABELLING = True
TWO_FACTORS_AUTHENTICATION = True
```

```python
# New: settings/local_settings.py
INSTALLED_APPS += [
    'your_custom_app',
]
WHITE_LABELLING = True
TWO_FACTORS_AUTHENTICATION = True
```
---

#### **For settings previously in `horilla_settings.py`:**

Move all custom project-specific settings to `local_settings.py`.

**Example:**
```python
# Old: horilla_settings.py
CUSTOM_FEATURE_ENABLED = True
MAX_UPLOAD_SIZE = 10485760
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
```

```python
# New: settings/local_settings.py
CUSTOM_FEATURE_ENABLED = True
MAX_UPLOAD_SIZE = 10485760
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
```

---

### **Step 4: Static Settings**

If you customized static file settings, migrate them to `local_settings.py`:

```python
# settings/local_settings.py
STATIC_ROOT = '/path/to/your/static/files'
MEDIA_ROOT = '/path/to/your/media/files'
```
---

---

## **Complete Migration Example**

### **Before (v1)**

**settings.py:**

```python
DEBUG = False
ALLOWED_HOSTS = ['example.com']
SECRET_KEY = 'my-secret-key'
```
| :---- |

**horilla\_apps.py:**

```python
INSTALLED_APPS += ['custom_reports']

WHITE_LABELLING = True
TWO_FACTORS_AUTHENTICATION = True
```


**horilla\_settings.py:**

```python
CUSTOM_ATTRS= “your_custom_attrs”
MAX_REPORT_SIZE = 5242880
```

### **After (v2)**

**settings/local\_settings.py:**

```python

# Core Django settings
DEBUG = False
ALLOWED_HOSTS = ['example.com']
SECRET_KEY = 'my-secret-key'

# Custom apps
INSTALLED_APPS += ['custom_reports']


WHITE_LABELLING = True
TWO_FACTORS_AUTHENTICATION = True

# Project-specific settings
CUSTOM_ATTRS= “your_custom_attrs”
MAX_REPORT_SIZE = 5242880

```

---

## **Important Notes**

### **✅ Do's**

* **Always** make your customizations in `local_settings.py`  
* Keep a backup of your v1 settings files before upgrading  
* Test your configuration after migration  
* Use version control to track your `local_settings.py` changes

### **❌ Don'ts**

* **Never** modify `base.py` directly \- changes will be lost on updates  
* Don't modify `__init__.py` unless absolutely necessary  
* Don't hardcode sensitive data \- use environment variables instead

---

## **Troubleshooting**

### **Settings not being applied?**

1. Ensure `local_settings.py` exists in the `settings/` folder  
2. Verify the syntax is correct (no Python errors)  
3. Check that variables are using the correct names  
4. Restart your Django server after making changes

---

## **Need Help?**

If you encounter issues during migration:

1. Review your `local_settings.py` for syntax errors  
2. Compare with the migration examples above  
3. Contact support with your specific configuration

---

**Version:** 2.0  
 **Last Updated:** November 2025

