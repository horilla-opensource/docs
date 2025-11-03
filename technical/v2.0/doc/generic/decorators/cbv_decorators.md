
# CBV Decorators

This document provides detailed descriptions and usage guidelines for the class based decorators implemented in `horilla_views/methods.py` within the Horilla project. These methods serve various purposes, including managing user permissions,  and processing requests. Each decorator method is accompanied by its signature, a brief overview of its functionality.



## decorator_with_arguments

**Description**: A decorator that enables other decorators to accept arguments and keyword arguments.

**Parameters**:
- `decorator (function)`: The decorator function to be wrapped.

**Returns**:
- `function`: The wrapper function that applies the decorator with the specified arguments.


## login_required

**Description**: Decorator that checks user authentication before allowing access to a view. If unauthenticated, redirects to the login page.

**Parameters**:
- `view_func (function)`: The view function to be decorated.

**Example Usage:**
```python
from django.utils.decorators import method_decorator
from horilla_views.methods import login_required
from horilla_views.generic.cbv.views import HorillaListView

@method_decorator(login_required, name="dispatch")
class EmployeeList(HorillaListView):
    ...

```


## permission_required

**Description**: Decorator that checks if a user has a specific permission.

**Parameters**:
- `function (function)`: The view function to be decorated.
- `perm (str)`: The permission string to check for the user.


## check_feature_enabled

**Description**: Decorator that checks if a feature is enabled in a singleton model before accessing a view.

**Parameters**:
- `function (function)`: The view function to be decorated.
- `feature_name (str)`: The name of the feature to check.
- `model_class (models.Model)`: The singleton model class.


## hx_request_required

**Description**: Decorator that allows only HTMX requests to access a view.

**Parameters**:
- `function (function)`: The view function to be decorated.
