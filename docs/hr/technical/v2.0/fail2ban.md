# Fail2Ban with Horilla (Ubuntu OS)
This doc outlines how to configure Fail2Ban on Ubuntu to protect your Horilla HRMS instance from brute-force login attempts. Fail2Ban monitors failed login attempts, logs them, and bans malicious IPs temporarily.

## 1. Install Fail2Ban
Install Fail2Ban using the package manager:
```bash
sudo apt update
```
```bash
sudo apt install fail2ban -y
```

## 2. Ensure Compatible Horilla Version
Make sure you're using a Horilla version that supports Fail2Ban integration.

Required commit or latest:
`d9a4dbc7031cfea388cb3a4309e45f043fe8d5fd`

```bash
cd /opt/Horilla_Main #navigate to Horilla base dir
```
Confirm the presence of `log_login_failed` signal and `Fail2BanMiddleware` inside `base/signals.py`

```bash
nano base/signals.py
```

## 3. Configure Ban Time & Max Attempt

Set the retry and ban duration in `horilla/settings.py` to match Fail2Ban configuration:

```Python
FAIL2BAN_MAX_RETRY = 3       # Same as maxretry in jail.local
FAIL2BAN_BAN_TIME = 10       # Same as bantime in jail.local (in seconds)
```

## 4. Configure Logging

Add the following LOGGING configuration inside `horilla/settings.py` to write failed login attempts to a security log:

```Python
import os

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'security_file': {
            'level': 'WARNING',
            'class': 'logging.FileHandler',
            'filename': os.path.join(BASE_DIR, "security.log"),
        },
    },
    'loggers': {
        'django.security': {
            'handlers': ['security_file'],
            'level': 'WARNING',
            'propagate': False,
        },
    },
}
```
If you already configured another loggings for horilla then you can add the `security_file` block from `handlers` and `django.security` block from `loggers` block to your configured `LOGGING` accordingly.

## 5. Fail2Ban Filter Configuration

Create a custom filter that matches Horilla's security log pattern:
```bash
sudo nano /etc/fail2ban/filter.d/horilla-auth.conf
```
add the following regex block
```ini
[Definition]
failregex = ^Invalid login attempt for user '.*' from <HOST>$
```

## 6. Fail2Ban Jail Configuration

Edit or create a jail file:
```bash
sudo nano /etc/fail2ban/jail.local
```
Add the following block
```ini
[horilla-auth]
enabled = true
filter = horilla-auth
# path to installed horilla Base dir's security log
logpath = /opt/Horilla_Main/security.log 
maxretry = 3
findtime = 600
bantime = 600
```

## 7. Start Fail2Ban Service

Start the Fail2Ban service:

```bash
sudo systemctl start fail2ban
```
Check the status
```bash
sudo systemctl status fail2ban
```
Check jail status:
```bash
sudo fail2ban-client status horilla-auth
```

## 8. Make Log File Writable by Ubuntu User & Readable by Fail2Ban
This section is for giving the permission to the files while use in production area.
Ensure `security.log` exists inside Horilla base directory and has correct permissions after navigating to the dir:
```
sudo touch security.log
sudo chown www-data:www-data security.log
sudo chmod 644 security.log

```

## 9. Check Fail2Ban Jail Status
After configuring and starting Fail2Ban, it's important to verify that your Django jail (in this case, horilla-auth) is working as expected.

Use the following command to check the status of the horilla-auth jail:

```bash
sudo fail2ban-client status horilla-auth
```
This will output information similar to:

```yaml
Status for the jail: horilla-auth
|- Filter
|  |- Currently failed: 2
|  |- Total failed: 5
|  `- File list:    /opt/Horilla_Main/security.log
`- Actions
   |- Currently banned: 1
   |- Total banned: 2
   `- Banned IP list: 192.168.1.50
```
