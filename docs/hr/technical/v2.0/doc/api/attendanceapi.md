# **Attendance module api documentation**

## Clock-In API Documentation

#### **Overview**

The Clock-In API allows employees to register their attendance by clocking in for their shift. It handles different shift types, including night shifts, and ensures the correct shift is recorded based on the time of clock-in.

#### **Authentication**

**Required:** API Key or Bearer Token  
**Header:**

```
Authorization: Bearer {token}
```
#### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```
#### **Endpoint**

**1\. Clock-In**

* **Endpoint:** `POST /clock-in/`  
* **Description:** Registers an employee's clock-in time for their scheduled shift.

**Request Example**

```
POST https://YOUR_DOMAIN/api/attendance/clock-in/
```
**Success (200 OK):**

```json
{
  "message": "Clocked-In"
}
```

#### **Functionality Details**

* The API checks if the employee has valid work information.  
* If the employee clocks in during a night shift, the system automatically adjusts the recorded shift day if clocking in before noon (12:00 PM).  
* The system calculates the relevant shift schedule based on the day and shift assigned to the employee.  
* The employee’s attendance is recorded along with the exact clock-in time and shift details.

#### **Error Codes**

* **400 Bad Request:** Invalid or missing work information or employee details.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **500 Internal Server Error:** An unexpected error occurred on the server.


## **Clock-Out API Documentation**

#### **Overview**

The Clock-Out API allows employees to register their clock-out time, marking the end of their work shift. It ensures accurate recording of attendance, including handling cases of early departures.

#### **Authentication**

**Required:** API Key or Bearer Token  
**Header:**

```
Authorization: Bearer {token}
```

#### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```
#### **Endpoint**

**1\. Clock-Out**

* **Endpoint:** `POST /clock-out/`  
* **Description:** Registers an employee's clock-out time for their shift.

**Request Example:**

```
POST https://YOUR_DOMAIN/api/attendance/clock-out/ 
```

**Response:**

**Success (200 OK):**

```json
{
  "message": "Clocked-Out"
}
```

**Error (400 Bad Request):**

```json
{
  "error": "Attendance record not found or invalid request."
}
```


#### **Functionality Details**

* The API checks if the employee has valid work information.  
* The system retrieves the employee's last attendance record to ensure the clock-out is linked to the correct shift.  
* The clock-out time is compared to the shift schedule to determine if the employee left early.  
* If the employee clocked out early, this is recorded as an early out in their attendance record.  
* The API records the clock-out time and updates the attendance details accordingly.

#### **Error Codes**

* **400 Bad Request:** Invalid or missing attendance records.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Attendance API Documentation**

#### **Overview**

This API provides endpoints to manage attendance records. It supports creating, retrieving, updating, deleting records, filtering, grouping, and permission-based access.

### **Base URL**

```
https://YOUR_DOMAIN/api/attendance 
```

### **Authentication**

**Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.


#### **Endpoints**

### **1\. Create an Attendance Record**

**Endpoint:** `POST attendance/`

**Description:** Create a new attendance record.

**Request Body:**

```json
{
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_day": 1,
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "09:00:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "17:00:00",
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "attendance_overtime": "00:30",
    "attendance_overtime_approve": false,
    "attendance_validated": false,
    "at_work_second": 28800,
    "overtime_second": 1800,
    "approved_overtime_second": 0,
    "is_validate_request": false,
    "is_validate_request_approved": false,
    "request_description": "",
    "request_type": "update_request",
    "requested_data": {}
}
```

**Response:**

**Success (201 Created):**

```json
{
    "id": 1,
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_day": 1,
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "09:00:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "17:00:00",
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "attendance_overtime": "00:30",
    "attendance_overtime_approve": false,
    "attendance_validated": false,
    "at_work_second": 28800,
    "overtime_second": 1800,
    "approved_overtime_second": 0,
    "is_validate_request": false,
    "is_validate_request_approved": false,
    "request_description": "",
    "request_type": "update_request",
    "requested_data": {}
}
```

### **2\. Retrieve an Attendance Record**

**Endpoint:** `GET attendance/<int:pk>/`

**Description:** Retrieve details of a specific attendance record by its ID.

**Path Parameters:**

* pk `integer`: The ID of the attendance record.

**Response:**

```json
{
    "id": 1,
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_day": 1,
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "09:00:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "17:00:00",
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "attendance_overtime": "00:30",
    "attendance_overtime_approve": false,
    "attendance_validated": false,
    "at_work_second": 28800,
    "overtime_second": 1800,
    "approved_overtime_second": 0,
    "is_validate_request": false,
    "is_validate_request_approved": false,
    "request_description": "",
    "request_type": "update_request",
    "requested_data": {}
}
```

### **3\. Update an Attendance Record**

**Endpoint:** `PUT attendance/<int:pk>/`

**Description:** Update an existing attendance record.

**Path Parameters:**

* pk `integer`: The ID of the attendance record to update.

**Request Body:**

```json
{
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_day": 1,
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "09:30:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "17:30:00",
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "attendance_overtime": "01:00",
    "attendance_overtime_approve": true,
    "attendance_validated": true,
    "at_work_second": 30600,
    "overtime_second": 3600,
    "approved_overtime_second": 3600,
    "is_validate_request": false,
    "is_validate_request_approved": false,
    "request_description": "",
    "request_type": "update_request",
    "requested_data": {}
}
```

**Response:**

**Success (200 OK):**

```json
{
    "id": 1,
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_day": 1,
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "09:30:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "17:30:00",
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "attendance_overtime": "01:00",
    "attendance_overtime_approve": true,
    "attendance_validated": true,
    "at_work_second": 30600,
    "overtime_second": 3600,
    "approved_overtime_second": 3600,
    "is_validate_request": false,
    "is_validate_request_approved": false,
    "request_description": "",
    "request_type": "update_request",
    "requested_data": {}
}
```

### **4\. Delete an Attendance Record**

**Endpoint:** `DELETE attendance/<int:pk>/`

**Description:** Delete an attendance record.

**Path Parameters:**

* pk `integer`: The ID of the attendance record to delete.

**Response:**

**Success (200 OK):**

```json
{
    "status": "deleted"
}
```


### **5\. List Attendance Records**

**Endpoint:** `GET attendance/list/<str:type>/`

**Description:** Retrieve a list of attendance records filtered by type.

**Path Parameters:**

* **type `string`:** The type of attendance records to retrieve. Valid values are:  
  * `ot`: Attendance records with overtime greater than the minimum required for approval.  
  * `validated`: Attendance records that are validated.  
  * `non-validated`: Attendance records that are not validated.  
  * `all`: All attendance records.

**Query Parameters:**

* page `integer`: The page number for pagination.  
* page_size `integer`: The number of records per page.  
* search `string`: A search term to filter the records by fields like employee name or attendance date.  
* groupby_field `string`: A field to group the records by.

**Response:**

**Success (200 OK):**

```json
{
    "count": 50,
    "next": "https://YOUR_DOMAIN/api/attendance/list/{type}/?page=2",
    "previous": null,
    "results": [
        {
            "id": 1,
            "employee_id": 1,
            "attendance_date": "2024-08-14",
            "shift_id": 2,
            "work_type_id": 1,
            "attendance_day": 1,
            "attendance_clock_in_date": "2024-08-14",
            "attendance_clock_in": "09:00:00",
            "attendance_clock_out_date": "2024-08-14",
            "attendance_clock_out": "17:00:00",
            "attendance_worked_hour": "08:00",
            "minimum_hour": "07:30",
            "attendance_overtime": "00:30",
            "attendance_overtime_approve": false,
            "attendance_validated": false,
            "at_work_second": 28800,
            "overtime_second": 1800,
            "approved_overtime_second": 0,
            "is_validate_request": false,
            "is_validate_request_approved": false,
            "request_description": "",
            "request_type": "update_request",
            "requested_data": {}
        },
        ...
    ]
}
```

#### **Error Handling**

* **400 Bad Request**: Invalid input or parameters.  
* **401 Unauthorized**: Authentication failure or invalid token.  
* **403 Forbidden**: Insufficient permissions to access the resource.  
* **404 Not Found**: Resource not found.



## **Validate Attendance API Documentation**

### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```
### **Authentication**

**Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```
All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

**Validate an Attendance Record**

**Endpoint:** `PUT /attendance-validate/<int:pk>/`

**Description:** Validate an attendance record by its ID. This endpoint updates the `attendance_validated` field to `True` for the specified record and sends a notification to the employee.

**Parameters:**

* `pk` (path parameter): The ID of the attendance record to validate.

**Request Example:** No request body is required.

**Response:**

**Success (200 OK):**

```json
{
    "status": "validated"
}
```

**Error Handling:**

* **500 Internal Server Error:** In case of any issues during the notification sending process.

## **Attendance Request API Documentation**

#### **Base URL**

```
https://YOUR\_DOMAIN/api/attendance
```

### **Authentication**

**Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.


#### **Endpoints**

### **1\. Retrieve an Attendance Request**

**Endpoint:** `GET /attendance-request/<int:pk>/`

**Description:** Retrieve the details of a specific attendance request by its ID.

**Parameters:**

* `pk` (path parameter): The ID of the attendance request to retrieve.

**Response:**

**Success (200 OK):**

```json
{
    "id": 1,
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "09:00:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "17:00:00",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "request_description": "Need to update attendance record."
    "employee_first_name": "John",
    "employee_last_name": "Doe",
    "shift_name": "Morning Shift",
    "badge_id": "12345",
    "employee_profile_url": "https://example.com/profile.jpg"
}
```

### **2\. Create an Attendance Request**

**Endpoint:** `POST /attendance-request/`

**Description:** Create a new attendance request.

**Request Body:**

```json
{
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "09:00:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "17:00:00",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "request_description": "Need to update attendance record."
}
```

**Response:**

**Success (200 OK):**

```json
{
    "id": 1,
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "09:00:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "17:00:00",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "request_description": "Need to update attendance record."
}
```

### **3\. Update an Attendance Request**

**Endpoint:** `PUT /attendance-request/<int:pk>/`

**Description:** Update an existing attendance request by its ID.

**Parameters:**

* `pk` (path parameter): The ID of the attendance request to update.

**Request Body:**

```json
{
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "08:30:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "16:30:00",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "request_description": "Updated request description."
}
```

**Response:**

**Success (200 OK):**

```json
{
    "id": 1,
    "employee_id": 1,
    "attendance_date": "2024-08-14",
    "attendance_clock_in_date": "2024-08-14",
    "attendance_clock_in": "08:30:00",
    "attendance_clock_out_date": "2024-08-14",
    "attendance_clock_out": "16:30:00",
    "shift_id": 2,
    "work_type_id": 1,
    "attendance_worked_hour": "08:00",
    "minimum_hour": "07:30",
    "request_description": "Updated request description."
}
```

### **4\. List Attendance Requests**

**Endpoint:** `GET /attendance-request/`

**Description:** Retrieve a list of all attendance requests. Supports filtering and pagination.

**Query Parameters:**

* page `integer`: Page number for pagination.  
* page_size `integer`: Number of records per page.  
* search `string`: Search for the term to filter records by employee or date.  
* groupby_field `string`: Field name to group by.

**Response:**

**Success (200 OK):**

```json
{
    "count": 50,
    "next": "https://YOUR_DOMAIN/api/attendance/attendance-request/?page=2",
    "previous": null,
    "results": [
        {
            "id": 1,
            "employee_id": 1,
            "attendance_date": "2024-08-14",
            "attendance_clock_in_date": "2024-08-14",
            "attendance_clock_in": "09:00:00",
            "attendance_clock_out_date": "2024-08-14",
            "attendance_clock_out": "17:00:00",
            "shift_id": 2,
            "work_type_id": 1,
            "attendance_worked_hour": "08:00",
            "minimum_hour": "07:30",
            "request_description": "Need to update attendance record."
        },
        ...
    ]
}
```

#### **Error Handling**

* **400 Bad Request**: Invalid input or parameters.  
* **401 Unauthorized**: Authentication failure or invalid token.  
* **403 Forbidden**: Insufficient permissions to access the resource.  
* **404 Not Found**: Resource not found.

# **Attendance Request Approval API**

#### **Base URL**

```
https://YOUR\_DOMAIN/api/attendance
```

**Endpoint:** `PUT /attendance-request-approve/<int:pk>/`

### **Description**

This endpoint is used by managers to approve attendance requests. It updates the attendance record, validates the request, and logs the changes.

### **Request Parameters**

#### **Path Parameters**

* `pk` (integer): The primary key (ID) of the attendance record to approve.

### **Example Request**

#### **PUT Request**

```
PUT /attendance-request-approve/123/
``` 

```
Authorization: Bearer YOUR_ACCESS_TOKEN 
```

### **Example Response**

#### **Success**

```json
{
    "status": "approved"
}
```

#### **Error**

```json
{
    "error": "Attendance request not found."
}
```

### **Error Handling**

* **400 Bad Request**: An error occurred, such as the attendance record not existing or a failure during the update process.

# **Attendance Request Cancelation API** 

#### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```
Hour Account API Documentation
### **Authentication**

**Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

---

#### **Endpoints**

### **Cancel an Attendance Request**

**Endpoint:** `PUT /attendance-request-cancel/<int:pk>/`

**Description:** Cancels an attendance request by its ID. This endpoint is used to reset the request status and, if necessary, delete the request from the database.

**Parameters:**

* `pk` (path parameter): The ID of the attendance request to cancel.

**Request Body:** No body required.

**Example Request**

**PUT Request:**

```
PUT /attendance-request-cancel/1/ 
```

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response:**

**Success (200 OK):**

```json
{
    "status": "success"
}
```

**Error (400 Bad Request):**

```json
{
    "error": "Attendance request not found."
}
```

**Error Handling**

* **400 Bad Request:** Indicates an issue with the request, such as an invalid ID or lack of permissions.

# **Hour Account API Documentation**

#### **Overview**

This API provides endpoints to manage hour account records, also known as attendance overtime records. It supports creating, retrieving, updating, deleting records, filtering, grouping, and permission-based access.

#### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```

#### **Authentication**

**Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

#### **Endpoints**

### **1\. Create an Hour Account Record**

**Endpoint:** `POST attendance-hour-account/`

**Description:** Create a new hour account (attendance overtime) record.

**Request Body:**

```json
{
    "employee_id": 1,
    "month": "August",
    "year": "2024",
    "worked_hours": "40:00",
    "pending_hours": "05:00",
    "overtime": "10:00"
}
```

**Response:**

**Success (201 Created):**

```json
{
    "id": 1,
    "employee_id": 1,
    "month": "August",
    "year": "2024",
    "worked_hours": "40:00",
    "pending_hours": "05:00",
    "overtime": "10:00",
    "hour_account_second": 144000,
    "hour_pending_second": 18000,
    "overtime_second": 36000
}
```

**Error (400 Bad Request):**

```json
{
    "detail": "Invalid data provided."
}
```

### **2\. Retrieve an Hour Account Record**

**Endpoint:** `GET attendance-hour-account/<int:pk>/`

**Description:** Retrieve details of a specific hour account (attendance overtime) record by its ID.

**Path Parameters:**

* `pk` (integer): The ID of the hour account record.

**Response:**

**Success (200 OK):**

```json
{
    "id": 1,
    "employee_id": 1,
    "month": "August",
    "year": "2024",
    "worked_hours": "40:00",
    "pending_hours": "05:00",
    "overtime": "10:00",
    "hour_account_second": 144000,
    "hour_pending_second": 18000,
    "overtime_second": 36000
}
```

**Error (404 Not Found):**

```json
{
    "detail": "Not found."
}
```

**3\. Update an Hour Account Record**

**Endpoint:** `PUT attendance-hour-account/<int:pk>/`

**Description:** Update an existing hour account (attendance overtime) record.

**Path Parameters:**

* `pk` (integer): The ID of the hour account record to update.

**Request Body:**

```json
{
    "worked_hours": "42:00",
    "pending_hours": "03:00",
    "overtime": "12:00"
}
```

**Response:**

**Success (200 OK):**

```json
{
    "id": 1,
    "employee_id": 1,
    "month": "August",
    "year": "2024",
    "worked_hours": "42:00",
    "pending_hours": "03:00",
    "overtime": "12:00",
    "hour_account_second": 151200,
    "hour_pending_second": 10800,
    "overtime_second": 43200
}
```

**Error (400 Bad Request):**

```json
{
    "detail": "Invalid data provided."
}
```

### **4\. Delete an Hour Account Record**

**Endpoint:** `DELETE attendance-hour-account/<int:pk>/`

**Description:** Delete an hour account (attendance overtime) record.

**Path Parameters:**

* `pk` (integer): The ID of the hour account record to delete.

**Response:**

**Success (204 No Content):**

```json
{
    "message": "Overtime deleted successfully"
}
```

**Error (404 Not Found):**

```json
{
    "detail": "Not found."
}
```

### **5\. List Hour Account Records**

**Endpoint:** `GET attendance-hour-account/`

**Description:** Retrieve a list of hour account (attendance overtime) records with optional filtering and pagination.

**Query Parameters:**

* employee_id `integer`: Filter by employee ID.  
* month `string`: Filter by month (e.g., January, February).  
* year `string`: Filter by year (e.g., 2024).  
* worked_hours__gte `string`: Filter by worked hours greater than or equal to.  
* worked_hours__lte `string`: Filter by worked hours less than or equal to.  
* pending_hours__gte `string`: Filter by pending hours greater than or equal to.  
* pending_hours__lte `string`: Filter by pending hours less than or equal to.  
* overtime__gte `string`: Filter by overtime hours greater than or equal to.  
* overtime__lte `string`: Filter by overtime hours less than or equal to.  
* department_name `string`: Filter by department name.  
* page `integer`: The page number for pagination.  
* page_size `integer`: The number of records per page.  
* search `string`: A search term to filter the records by fields like employee name or department name.  
* groupby_field `string`: A field to group the records by.

**Response:**

**Success (200 OK):**

```json
{
    "count": 10,
    "next": "https://YOUR_DOMAIN/api/attendance/attendance-hour-account/?page=2",
    "previous": null,
    "results": [
        {
            "id": 1,
            "employee_id": 1,
            "month": "August",
            "year": "2024",
            "worked_hours": "40:00",
            "pending_hours": "05:00",
            "overtime": "10:00",
            "hour_account_second": 144000,
            "hour_pending_second": 18000,
            "overtime_second": 36000
        },
        {
            "id": 2,
            "employee_id": 2,
            "month": "July",
            "year": "2024",
            "worked_hours": "38:00",
            "pending_hours": "04:00",
            "overtime": "08:00",
            "hour_account_second": 136800,
            "hour_pending_second": 14400,
            "overtime_second": 28800
        }
        ...
    ]
}
```

**Error (400 Bad Request):**

```json
{
    "detail": "Invalid filter parameters."
}
```

#### **Error Handling**

* **400 Bad Request:** Invalid input or parameters.  
* **401 Unauthorized:** Authentication failure or invalid token.  
* **403 Forbidden:** Insufficient permissions to access the resource.  
* **404 Not Found:** Resource not found.


## **Late Come Early Out API Documentation**

### **Overview**

This API provides endpoints to manage late comers and early outs attendance records. It supports retrieving, deleting records, and filtering based on various criteria.

### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```

### **Authentication**

**Required**: API Key or Bearer Token

**Header**:

```
Authorization: Bearer {token}
```

All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

w
### **Endpoints**

#### **1\. Retrieve Late Come Early Out Records**

* **Endpoint**: `GET late-come-early-out-view/`  
* **Description**: Retrieve a list of latecomers and early-outs attendance records filtered by various criteria.  
* **Query Parameters**:  
  * employee_id `integer`: Filter by employee ID.  
  * type `string`: Filter by type (e.g., 'late', 'early').  
  * attendance_date__gte `date`: Filter records with an attendance date greater than or equal to the specified date.  
  * attendance_date__lte `date`: Filter records with an attendance date less than or equal to the specified date.  
  * attendance_clock_in__lte `time`: Filter records with attendance clock-in time less than or equal to the specified time.  
  * attendance_clock_in__gte `time`: Filter records with attendance clock-in time greater than or equal to the specified time.  
  * attendance_clock_out__gte `time`: Filter records with attendance clock-out time greater than or equal to the specified time.  
  * attendance_clock_out__lte `time`: Filter records with attendance clock-out time less than or equal to the specified time.  
  * attendance_clock_in `time`: Filter records with attendance clock-in time equal to the specified time.  
  * attendance_clock_out `time`: Filter records with attendance clock-out time equal to the specified time.  
  * attendance_date `date`: Filter records with attendance date equal to the specified date.  
  * department `string`: Filter records by department name.  
  * year `integer`: Filter records by year.  
  * month `integer`: Filter records by month.  
  * week `integer`: Filter records by week.

**Response**:

**Success (200 OK)**:

```json
{
"count": 20,
"next": "https://YOUR_DOMAIN/api/attendance/late-come-early-out-view/?page=2",
"previous": null,
"results": [
    {
        "id": 1,
        "employee_id": 1,
        "attendance_date": "2024-08-14",
        "attendance_clock_in": "09:30:00",
        "attendance_clock_out": "16:30:00",
        "type": "late",
        "department": "Sales",
        "at_work_second": 23400,
        "overtime_second": 0,
        "attendance_id": {
            "id": 1,
            "minimum_hour": "07:30",
            "attendance_worked_hour": "07:00",
            "attendance_overtime_approve": false,
            "attendance_validated": false,
            "shift_id": 2,
            "work_type_id": 1
        }
    },
    ...
]
}
```

#### **2\. Delete a Late Come Early Out Record**

* **Endpoint**: `DELETE late-come-early-out-view/<int:pk>/`  
* **Description**: Delete a specific late come early out attendance record by its ID.  
* **Path Parameters**:  
  * **Pk**  (integer): The ID of the late come early out attendance record to delete.

**Response**:

**Success (204 No Content)**:

```json
{
    "message": "Attendance deleted successfully"
}
```

**Not Found (404 Not Found)**:

```json
{
    "detail": "Not found."
}
```

 **Error Handling**

* **400 Bad Request**: Invalid input or parameters.  
* **401 Unauthorized**: Authentication failure or invalid token.  
* **403 Forbidden**: Insufficient permissions to access the resource.  
* **404 Not Found**: Resource not found.

## **Attendance Activity API Documentation**

### **Overview**

This API provides endpoints to manage attendance activity records for employees. It supports retrieving all records and provides detailed information about each attendance activity, including employee details, attendance date, and check-in/out times.

### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```

### **Authentication**

**Required**: API Key or Bearer Token

**Header**:

```
Authorization: Bearer {token}
```

All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.


### **Endpoints**

#### **1\. Retrieve Attendance Activity Records**

* **Endpoint**: `GET attendance-activity/`  
* **Description**: Retrieve a list of all attendance activity records.  
* **Query Parameters**: None

**Response**:

**Success (200 OK)**:

```json
[
    {
        "id": 1,
        "employee_id": 1,
        "employee_first_name": "John",
        "employee_last_name": "Doe",
        "attendance_date": "2024-08-14",
        "shift_day": {
            "id": 3,
            "name": "Monday Shift"
        },
        "in_datetime": "2024-08-14T09:00:00Z",
        "clock_in_date": "2024-08-14",
        "clock_in": "09:00:00",
        "out_datetime": "2024-08-14T17:00:00Z",
        "clock_out_date": "2024-08-14",
        "clock_out": "17:00:00"
    },
    {
        "id": 2,
        "employee_id": 2,
        "employee_first_name": "Jane",
        "employee_last_name": "Smith",
        "attendance_date": "2024-08-14",
        "shift_day": {
            "id": 4,
            "name": "Tuesday Shift"
        },
        "in_datetime": "2024-08-14T08:30:00Z",
        "clock_in_date": "2024-08-14",
        "clock_in": "08:30:00",
        "out_datetime": "2024-08-14T16:30:00Z",
        "clock_out_date": "2024-08-14",
        "clock_out": "16:30:00"
    },
    ...
]
```

## **Today Attendance API Documentation**

### **Overview**

This API endpoint provides real-time statistics on employee attendance for the current day, including the ratio of marked attendances (both on-time and late arrivals) to the expected attendances.

### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```
### **Authentication**

**Required**: API Key or Bearer Token

**Header**:

```
Authorization: Bearer {token}
```
All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.


### **Endpoints**

#### **1\. Retrieve Today's Attendance Statistics**

* **Endpoint**: `GET today-attendance/`  
* **Description**: Retrieves the ratio of marked attendances to the expected attendances for the current day.  
* **Query Parameters**: None

**Response**:

**Success (200 OK)**:

```json
{
    "marked_attendances_ratio": "75.00"
}
```

## **Offline Employees Count API Documentation**

### **Overview**

This API endpoint provides the total count of active employees who have not yet clocked in for the current day.

### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```

### **Authentication**

**Required**: API Key or Bearer Token

**Header**:

```
Authorization: Bearer {token}
```

All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.


### **Endpoints**

#### **1\. Retrieve Count of Offline Employees**

* **Endpoint**: `GET offline-employees/count/`  
* **Description**: Retrieves the count of active employees who have not yet clocked in for the current day.  
* **Query Parameters**: None  
* **Response**:

**Success (200 OK)**:  

```json
{
    "count": 25
}
```

## **Offline Employees List API Documentation**

### **Overview**

This API endpoint provides a paginated list of active employees who have not yet clocked in for the current day, along with their leave status.

### **Base URL**

```
https://YOUR_DOMAIN/api/attendance
```

### **Authentication**

**Required**: API Key or Bearer Token

**Header**:

```
Authorization: Bearer {token}
```

All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.


### **Endpoints**

#### **1\. Retrieve List of Offline Employees**

* **Endpoint**: `GET offline-employees/list/`  
* **Description**: Retrieves a paginated list of active employees who have not yet clocked in for the current day, along with their leave status.  
* **Query Parameters**:  
  * `page` (integer, optional): The page number for pagination.  
  * `page_size` (integer, optional): The number of records per page.

**Response**:

**Success (200 OK)**:

```json
{
    "count": 100,
    "next": "https://YOUR_DOMAIN/api/attendance/offline-employees/list/?page=2",
    "previous": null,
    "results": [
        {
            "employee_first_name": "John",
            "employee_last_name": "Doe",
            "leave_status": "On Leave",
            "employee_profile": "https://YOUR_DOMAIN/media/profile_images/john_doe.jpg"
        },
        {
            "employee_first_name": "Jane",
            "employee_last_name": "Smith",
            "leave_status": "Expected working",
            "employee_profile": "https://YOUR_DOMAIN/media/profile_images/jane_smith.jpg"
        },
        ...
    ]
}
```

## **Checking Status API Documentation**

### **Overview**

This API endpoint provides information about an employee's current check-in status, including their forecasted work duration, current clock-in time, and whether they are currently checked in.

### **Base URL**

```
https://YOUR_DOMAIN/api/attendance 
```
### **Authentication**

**Required**: API Key or Bearer Token

**Header**:

```
Authorization: Bearer {token}
```
All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

### **Endpoint**

#### **1\. Get Checking Status**

 mlk,m.,,* **Endpoint**: `GET /checking-in/`  
-* **Description**: Retrieves the current check-in status of the authenticated employee, including their forecasted work duration and clock-in time.  
* **Permissions**: Requires authentication (`IsAuthenticated` permission).  
* **Response**:

**Success (200 OK)**:

```json
{
  "status": true,
  "duration": "08:00:00",
  "clock_in": "09:00 AM"
}
```

* status `boolean`: Indicates if the employee is currently checked in.  
* duration `string`: The forecasted work duration in the format `HH:MM:SS`.  
* clock_in `string`: The time the employee clocked in, formatted as `HH:MM AM/PM`.

OR

```json
{
    "status": false,
    "duration": "08:00:00",
    "clock_in_time": null
}
```

* status `boolean`: Indicates if the employee is currently checked in.  
* duration `string`: The forecasted work duration in the format `HH:MM:SS`.  
* clock_in_time `string or null`: The time the employee clocked in, formatted as `HH:MM AM/PM`, or `null` if not clocked in.

