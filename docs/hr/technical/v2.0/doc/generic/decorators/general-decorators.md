
# General Decorators

This document provides detailed descriptions and usage guidelines for the class based decorators implemented in `horilla/decorators.py`  These decorators check 
permissions, validate user roles, and enforce access control based on the user's role 
and permissions.


## decorator_with_arguments

**Description**: A decorator that enables other decorators to accept arguments and keyword arguments.

**Parameters**:
- `decorator (function)`: The decorator function to be wrapped.

**Returns**:
- `function`: The wrapper function that applies the decorator with the specified arguments.



## login_required
- **Description**: Ensures that only authenticated users can access the view.
- **Example Usage**:
  ```python
  @login_required
  def authenticated_view(request):
      # Logic for authenticated users
  ```



## permission_required
- **Description**: Restricts access to users with the specified permission.
- **Arguments**: 
  - `perm`: Permission string (e.g., `app_label.permission_name`).
- **Example Usage**:
  ```python
  
  @permission_required("recuitment.view_candidate")
  def my_view(request):
      # View logic here
  ```


## delete_permission
- **Description**: Grants delete access to users with the delete permission for a model or if they are managers.
- **Arguments**:
  - `model`: Model to be checked for delete permission.
- **Example Usage**:
  ```python
  @delete_permission(model=MyModel)
  def delete_view(request, pk):
      # Delete logic here
  ```


## duplicate_permission
- **Description**: Allows access to duplicate an object if the user has add permission or is a manager.
- **Arguments**:
  - `model`: Model for which duplicate permission is required.
- **Example Usage**:
  ```python
  @duplicate_permission(model=MyModel)
  def duplicate_view(request, pk):
      # Duplicate logic here
  ```


## manager_can_enter
- **Description**: Allows entry to users with specific permissions or if they are managers.
- **Arguments**:
  - `perm`: Permission string required to access the function.
- **Example Usage**:
  ```python
  @manager_can_enter("app_label.view_model")
  def view_as_manager(request):
      # Manager view logic
  ```


## is_recruitment_manager
- **Description**: Restricts access to recruitment managers or users with a specific recruitment-related permission.
- **Arguments**:
  - `perm`: Recruitment permission string.
- **Example Usage**:
  ```python
  @is_recruitment_manager("recruitment.view_recruitment")
  def recruitment_view(request):
      # Recruitment view logic here
  ```


## hx_request_required
- **Description**: Restricts access to views to only AJAX (HTMX) requests.
- **Example Usage**:
  ```python
  @hx_request_required
  def ajax_only_view(request):
      # View logic here
  ```


## owner_can_enter
- **Description**: Restricts access to the owner, authorized users, or managers if `manager_access` is set to `True`.
- **Arguments**:
  - `perm`: Permission required to access the view.
  - `model`: The model instance being checked for ownership.
  - `manager_access` (optional): Grants access to managers if `True`.
- **Example Usage**:
  ```python
  @owner_can_enter("app_label.view_model", model=MyModel, manager_access=True)
  def restricted_view(request, pk):
      # View logic
  ```


## install_required
- **Description**: Ensures that a specific feature is installed/enabled in the system before allowing access to the view.
- **Example Usage**:
  ```python
  @install_required
  def feature_view(request):
      # View logic for installed feature
  ```


## meeting_manager_can_enter
- **Description**: Restricts access to users with a specific permission, or managers/answerable employees if `answerable` is `True`.
- **Arguments**:
  - `perm`: Permission required for the view.
  - `answerable` (optional): Grants access to answerable employees if `True`.
- **Example Usage**:
  ```python
  @meeting_manager_can_enter("app_label.view_meeting", answerable=True)
  def meeting_view(request):
      # View logic
  ```
