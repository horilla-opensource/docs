
# Methods Documentation

This document provides detailed descriptions and usage guidelines for the methods implemented in `horilla_views/methods.py` within the Horilla project. These methods serve various purposes, including managing user permissions, handling CSRF tokens, rendering templates, and processing querysets. Each method is accompanied by its signature, a brief overview of its functionality, and examples of how to utilize it effectively in your application.



---

## get_all_context_variables

**Description**: Retrieves a dictionary of all context variables available from context processors.

**Parameters**:
- `request`: The HTTP request object.

**Returns**:
- `dict`: All context variables, including the CSRF token.

---

## render_template

**Description**: Renders HTML content along with rendered through any template filters or model method mapping.

**Parameters**:
- `path (str)`: Path to the HTML template.
- `context (dict)`: Context dictionary for rendering.
- `decoding (str)`: Encoding type, default is "utf-8".
- `status (int)`: HTTP status code.
- `_using`: Optional parameter for template usage.

**Returns**:
- `str`: Rendered HTML content.

```python

from horilla_views.cbv_methods import render_template

class Employee(models.Model):
    """
    EmployeeModel
    """
    ...
    def employee_list_actions(self):
        """
        This method for get custom column .
        """

        return render_template(
            path="cbv/employee/employee_list_actions.html",
            context={"instance": self},
        )

```

## paginator_qry

**Description**: Paginates a queryset based on a page number and records per page.

**Parameters**:
- `qryset`: The queryset to paginate.
- `page_number`: The page number to retrieve.
- `records_per_page`: Number of records per page, default is 50.

**Returns**:
- `Page`: Paginated page object.

---

## get_short_uuid

**Description**: Generates a shortened UUID with an optional prefix.

**Parameters**:
- `length (int)`: Length of the UUID.
- `prefix (str)`: Prefix for the UUID, default is "hlv".

**Returns**:
- `str`: Generated short UUID.


## update_initial_cache

**Description**: Updates the initial cache with the view and session key.

**Parameters**:
- `request`: The HTTP request object.
- `cache (dict)`: The cache dictionary.
- `view`: The view to cache.


## getmodelattribute

**Description**: Retrieves a model attribute dynamically, handling related fields/attributes.

**Parameters**:
- `value`: The model instance.
- `attr (str)`: Attribute name, supports nested attributes.

**Returns**:
- The requested attribute or `None` if not found.


## sortby

**Description**: Sorts a queryset or list based on a specified key, with support for null values.

**Parameters**:
- `query_dict`: Dictionary with query parameters.
- `queryset`: The queryset to sort.
- `key (str)`: Key to sort by.
- `page (str)`: Page context name, default is "page".
- `is_first_sort (bool)`: Indicates if it’s the first sort.

**Returns**:
- `queryset`: Sorted queryset.


## update_saved_filter_cache

**Description**: Saves filter state in cache for a view.

**Parameters**:
- `request`: The HTTP request object.
- `cache`: The cache dictionary.


## get_nested_field

**Description**: Recursively retrieves a nested field attribute.

**Parameters**:
- `model_class (models.Model)`: The model class.
- `field_name (str)`: Field name, supports nested fields.

**Returns**:
- The nested field attribute.


## get_field_class_map

**Description**: Returns a dictionary mapping field names to field classes for a model.

**Parameters**:
- `model_class (models.Model)`: The model class.
- `bulk_update_fields (list)`: List of field names.

**Returns**:
- `dict`: Mapping of field names to field classes.


## structured

**Description**: Renders form fields as HTML table rows with styling and structuring.

**Parameters**:
- `self`: Form instance.

**Returns**:
- `str`: HTML table with form fields.


## value_to_field

**Description**: Formats values based on the field type, supporting ManyToMany, Date, Time, and Text fields.

**Parameters**:
- `field (object)`: The field instance.
- `value (list)`: List of values.

**Returns**:
- `Any`: Formatted field value.

