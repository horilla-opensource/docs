# Base module API documentation

## **Authentication API Documentation**

**Base URL**

```
https://YOUR_DOMAIN/api/auth
```


**1\.  Login** 

* **Endpoint:** `POST /login/`  
* **Description:** Log in to create an authentication token.  
* **Request Method:** POST

**Request Body:**

```json
{
 "username": "admin",
 "password": "admin"
}
```

**Response:**  
**Success (201 Created):**

```json
{
    "employee": {
        "id": 1,
        "full_name": "Adam Luis",
        "employee_profile": null
    },
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzNDc1MzM1LCJpYXQiOjE3MzA4ODMzMzUsImp0aSI6ImM1ODQwM2FiOWY2ZDQzZmQ4MGJlNmRmNDBkNzY1MGYxIiwidXNlcl9pZCI6MX0.hD8LC0CoSXIsrzI5bwIrwrxPA4ynuoDtdnXmxdAAgz0"
}
```

* Use the access token for authentication

## **Job Position API Documentation**

#### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```


* **Description:** All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

#### **Base URL**
```
https://YOUR_DOMAIN/api/base
```


#### **Endpoints:**

**1\. Create a Job Position**

* **Endpoint:** `POST /job-positions/`  
* **Description:** Create a new job position.  
* **Request Method:** POST

**Request Body:**

```json
{
  "job_position": "Quality Assurance",
  "department_id": 2
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 3,
  "job_position": "Quality Assurance",
  "department_id": 2
}
```

**2.Retrieve a Job Position**

* **Endpoint:** `GET /job-positions/{id}/`  
* **Description:** Retrieve details of a specific job position by ID.  
* **Parameters:**  
  * `id` (path parameter): The ID of the job position to retrieve.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "job_position": "Software Engineer",
  "department_id": 3
}
```

**3.Update a Job Position**

* **Endpoint:** `PUT /job-positions/{id}/`  
* **Description:** Update an existing job position.  
* **Parameters:**  
  * `id` (path parameter): The ID of the job position to update.

**Request Body:**

```json
{
  "job_position": "Senior Software Engineer",
  "department_id": 3
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "job_position": "Senior Software Engineer",
  "department_id": 3
}
```

**4.Delete a Job Position**

* **Endpoint:** `DELETE /job-positions/{id}/`  
* **Description:** Delete a specific job position by ID.  
* **Parameters:**  
  * `id` (path parameter): The ID of the job position to delete.

**Response:**

**Success (204 No Content):**

```json
{
  "message": "Job position deleted successfully."
}
```

**5.List Job Positions**

* **Endpoint:** `GET /job-positions/`  
* **Description:** Retrieve a list of all job positions.  
* **Parameters:**  
  * **Query Parameters:**  
    * page `integer`: The page number for pagination.  
    * page_size `integer`: The number of records per page.  
    * search `string`: A search term to filter the records by job position name or department.

**Response:**

**Success (200 OK):**

```json
{
  "count": 50,
  "next": "https://YOUR_DOMAIN/api/base/job-positions/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "job_position": "Software Engineer",
      "department_id": 3
    },
    {
      "id": 2,
      "job_position": "Project Manager",
      "department_id": 1
    },
    {
      "id": 3,
      "job_position": "Business Analyst",
      "department_id": 2
    },
    {
      "id": 4,
      "job_position": "UX Designer",
      "department_id": 4
    },
    {
      "id": 5,
      "job_position": "Data Scientist",
      "department_id": 3
    }
  ]
}
```

#### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Job Role API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

### **Endpoints**

**1\. Retrieve a Job Role**

* **Endpoint:** `GET /job-roles/<int:id>/`  
* **Description:** Retrieve details of a specific job role by ID.  
* **Request Method:** `GET`  
* **URL Parameters:**  
  * id `integer`: The ID of the job role to retrieve.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "job_position_id": 3,
  "job_role": "Developer"
}
```

#### **2\. Create a Job Role**

* **Endpoint:** `POST /job-roles/`  
* **Description:** Create a new job role.  
* **Request Method:** `POST`

**Request Body:**

```json
{
  "job_position_id": 3,
  "job_role": "Quality Assurance"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 3,
  "job_position_id": 3,
  "job_role": "Quality Assurance"
}
```

#### **3.Update a Job Role**

* **Endpoint:** `PUT /job-roles/<int:id>/`  
* **Description:** Update an existing job role.  
* **Request Method:** `PUT`  
* **URL Parameters:**  
  * id `integer`: The ID of the job role to update.

**Request Body:**

```json
{
  "job_position_id": 3,
  "job_role": "Senior Developer"
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "job_position_id": 3,
  "job_role": "Senior Developer"
}
```

#### **4\. Delete a Job Role**

* **Endpoint:** `DELETE /job-roles/<int:id>/`  
* **Description:** Delete a specific job role by ID.  
* **Request Method:** `DELETE`  
* **URL Parameters:**  
  * id `integer`: The ID of the job role to delete.

**Response:**

**Success (204 No Content):**

```json
No content
```

**5.List Job Roles**

* **Endpoint:** `GET /job-roles/`  
* **Description:** Retrieve a list of all job roles.  
* **Request Method:** `GET`

**Response:**

**Success (200 OK):**

```json
[
  {
    "id": 1,
    "job_position_id": 3,
    "job_role": "Developer"
  },
  {
    "id": 2,
    "job_position_id": 1,
    "job_role": "Manager"
  }
]
```

#### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Work Type API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

### **Endpoints**

#### **1.Retrieve a Work Type**

* **Endpoint:** `GET /worktypes/<int:id>/`  
* **Description:** Retrieve details of a specific work type by ID.  
* **Request Method:** `GET`  
* **URL Parameters:**  
  * id `integer`: The ID of the work type to retrieve.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "work_type": "Full-time"
}
```

#### **2\. Create a Work Type**

* **Endpoint:** `POST /work types/`  
* **Description:** Create a new work type.  
* **Request Method:** `POST`

**Request Body:**

```json
{
  "work_type": "Contract"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 3,
  "work_type": "Contract"
}
```

#### **3.Update a Work Type**

* **Endpoint:** `PUT /worktypes/<int:id>/`  
* **Description:** Update an existing work type.  
* **Request Method:** `PUT`  
* **URL Parameters:**  
  * id `integer`: The ID of the work type to update.

**Request Body:**

```json
{
  "work_type": "Temporary"
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "work_type": "Temporary"
}
```

#### **4.Delete a Work Type**

* **Endpoint:** `DELETE /worktypes/<int:id>/`  
* **Description:** Delete a specific work type by ID.  
* **Request Method:** `DELETE`  
* **URL Parameters:**  
  * id `integer`: The ID of the work type to delete.

**Response:**

**Success (204 No Content):**

```json
{
  "message": "Work type deleted successfully."
}
```

#### **5.List Work Types**

* **Endpoint:** `GET /worktypes/`  
* **Description:** Retrieve a list of all work types.  
* **Request Method:** `GET`

**Response:**

**Success (200 OK):**

```json
[
  {
    "id": 1,
    "work_type": "Full-time"
  },
  {
    "id": 2,
    "work_type": "Part-time"
  }
]
```

#### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Rotating Work Type API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

* **Description:** All endpoints require authentication. To access the endpoints, include the `Authorization` header with a valid API key or bearer token.

### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

### **Endpoints**

#### **1\. Retrieve a Rotating Work Type**

* **Endpoint:** `GET /rotating-worktypes/<int:id>/`  
* **Description:** Retrieve details of a specific rotating work type by ID.  
* **Request Method:** `GET`  
* **URL Parameters:**  
  * id `integer`: The ID of the rotating work type to retrieve.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "name": "Rotating Type A",
  "work_type1": {
    "id": 1,
    "work_type": "Full-time"
  },
  "work_type2": {
    "id": 2,
    "work_type": "Part-time"
  }
}
```

#### **2.Create a Rotating Work Type**

* **Endpoint:** `POST /rotating-worktypes/`  
* **Description:** Create a new rotating work type.  
* **Request Method:** `POST`

**Request Body:**

```json
{
  "name": "Rotating Type C",
  "work_type1": 1,
  "work_type2": 3
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 3,
  "name": "Rotating Type C",
  "work_type1": {
    "id": 1,
    "work_type": "Full-time"
  },
  "work_type2": {
    "id": 3,
    "work_type": "Contract"
  }
}
```

#### **3.Update a Rotating Work Type**

* **Endpoint:** `PUT /rotating-worktypes/<int:id>/`  
* **Description:** Update an existing rotating work type.  
* **Request Method:** `PUT`  
* **URL Parameters:**  
  * id `integer`: The ID of the rotating work type to update.

**Request Body:**

```json
{
  "name": "Rotating Type D",
  "work_type1": 2,
  "work_type2": 3
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "name": "Rotating Type D",
  "work_type1": {
    "id": 2,
    "work_type": "Part-time"
  },
  "work_type2": {
    "id": 3,
    "work_type": "Contract"
  }
}
```

#### **4.Delete a Rotating Work Type**

* **Endpoint:** `DELETE /rotating-worktypes/<int:id>/`  
* **Description:** Delete a specific rotating work type by ID.  
* **Request Method:** `DELETE`  
* **URL Parameters:**  
  * id `integer`: The ID of the rotating work type to delete.

**Response:**

**Success (204 No Content):**

```json
{
  "message": "Rotating work type deleted successfully."
}
```

#### **5.List Rotating Work Types**

* **Endpoint:** `GET /rotating-worktypes/`  
* **Description:** Retrieve a list of all rotating work types.  
* **Request Method:** `GET`  
* **Response:**

**Success (200 OK):**

```json
[
  {
    "id": 1,
    "name": "Rotating Type A",
    "work_type1": {
      "id": 1,
      "work_type": "Full-time"
    },
    "work_type2": {
      "id": 2,
      "work_type": "Part-time"
    }
  },
  {
    "id": 2,
    "name": "Rotating Type B",
    "work_type1": {
      "id": 1,
      "work_type": "Full-time"
    },
    "work_type2": {
      "id": 3,
      "work_type": "Contract"
    }
  }
]
```

#### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Company API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

### **Endpoints**

#### **1\. Create Company**

* **Endpoint:** `POST /companies/`  
* **Description:** Creates a new company.  
* **Required Fields:**  
  * company `string`: The name of the company.  
  * address `string`: The address of the company.  
  * country `string`: The country where the company is located.  
  * state `string`: The state where the company is located.  
  * city `string`: The city where the company is located.  
  * zip `string`: The postal code or ZIP code of the company address.  
* **Optional Fields:**  
  * hq `boolean`: Indicates if the company is the headquarters. Default is `false`.  
  * icon `file`: An optional icon representing the company.  
  * date_format `string`: The date format used by the company.  
  * time_format `string`: The time format used by the company.

**Request Body:**

```json
{
  "company": "Tech Innovations Inc.",
  "hq": true,
  "address": "123 Innovation Drive",
  "country": "USA",
  "state": "CA",
  "city": "San Francisco",
  "zip": "94105",
  "icon": "path/to/icon.png",
  "date_format": "YYYY-MM-DD",
  "time_format": "24-hour"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 1,
  "company": "Tech Innovations Inc.",
  "hq": true,
  "address": "123 Innovation Drive",
  "country": "USA",
  "state": "CA",
  "city": "San Francisco",
  "zip": "94105",
  "icon": "path/to/icon.png",
  "date_format": "YYYY-MM-DD",
  "time_format": "24-hour"
}
```

#### **2\. Retrieve Company**

* **Endpoint:** `GET /companies/{id}/`  
* **Description:** Retrieves the details of a specific company by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the company.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "company": "Tech Innovations Inc.",
  "hq": true,
  "address": "123 Innovation Drive",
  "country": "USA",
  "state": "CA",
  "city": "San Francisco",
  "zip": "94105",
  "icon": "path/to/icon.png",
  "date_format": "YYYY-MM-DD",
  "time_format": "24-hour"
}
```

#### **3\. Update Company**

* **Endpoint:** `PUT /companies/{id}/`  
* **Description:** Updates the details of a specific company.  
* **Required Fields:**  
  * At least one field must be provided to update (e.g., company, address, country, etc.).  
* **Optional Fields:**  
  * company `string`: The name of the company.  
  * hq `boolean`: Indicates if the company is the headquarters.  
  * address `string`: The address of the company.  
  * country `string`: The country where the company is located.  
  * state `string`: The state where the company is located.  
  * city `string`: The city where the company is located.  
  * zip `string`: The company address's postal code or ZIP code.  
  * icon `file`: An optional icon representing the company.  
  * date_format `string`: The date format used by the company.  
  * time_format `string`: The time format used by the company.

**Request Body:**

```json
{
  "company": "Updated Tech Innovations Inc.",
  "hq": false,
  "address": "456 New Innovation Drive",
  "country": "USA",
  "state": "CA",
  "city": "San Francisco",
  "zip": "94107",
  "icon": "path/to/new_icon.png",
  "date_format": "DD/MM/YYYY",
  "time_format": "12-hour"
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "company": "Updated Tech Innovations Inc.",
  "hq": false,
  "address": "456 New Innovation Drive",
  "country": "USA",
  "state": "CA",
  "city": "San Francisco",
  "zip": "94107",
  "icon": "path/to/new_icon.png",
  "date_format": "DD/MM/YYYY",
  "time_format": "12-hour"
}
```

#### **4\. Delete Company**

* **Endpoint:** `DELETE /companies/{id}/`  
* **Description:** Deletes a specific company by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the company.  
* **Response:**  
  * **Success (204 No Content):**


#### **5\. List Companies**

* **Endpoint:** `GET /companies/`  
* **Description:** Retrieves a list of all companies.  
* **Parameters:**  
  * Query Parameters:  
    * page `integer`: The page number for pagination.  
    * page_size `integer`: The number of records per page.  
    * search `string`: A search term to filter the records by company name or address.

**Response:**

**Success (200 OK):**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "company": "Tech Innovations Inc.",
      "hq": true,
      "address": "123 Innovation Drive",
      "country": "USA",
      "state": "CA",
      "city": "San Francisco",
      "zip": "94105",
      "icon": "path/to/icon.png",
      "date_format": "YYYY-MM-DD",
      "time_format": "24-hour"
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Department API Documentation**

### **Authenticationd**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```


* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/base
```


### **Endpoints**

#### **1\. Create Department**

* **Endpoint:** `POST /departments/`  
* **Description:** Creates a new department.  
* **Required Fields:**  
  * department `string`: The name of the department.

**Request Body:**

```json
{
  "department": "Human Resources"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 1,
  "department": "Human Resources"
}
```

#### **2\. Retrieve Department**

* **Endpoint:** `GET /departments/{id}/`  
* **Description:** Retrieves the details of a specific department by ID.  
* **Parameters:**  
  * id `path parameter`: The unique identifier of the department.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "department": "Human Resources"
}
```

#### **3\. Update Department**

* **Endpoint:** `PUT /departments/{id}/`  
* **Description:** Updates the details of a specific department.  
* **Required Fields:**  
  * At least one field must be provided to update (e.g., department).  
* **Optional Fields:**  
  * department `string`: The name of the department.

**Request Body:**

```json
{
  "department": "Updated Human Resources"
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "department": "Updated Human Resources"
}
```

#### **4\. Delete Department**

* **Endpoint:** `DELETE /departments/{id}/`  
* **Description:** Deletes a specific department by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the department.  
* **Response:**  
  * **Success (204 No Content):**

#### **5\. List Departments**

* **Endpoint:** `GET /departments/`  
* **Description:** Retrieves a list of all departments.  
* **Parameters:**  
  * Query Parameters:  
    * page `integer`: The page number for pagination.  
    * page_size `integer`: The number of records per page.  
    * search `string`: A search term to filter the records by department name.

**Response:**

**Success (200 OK):**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "department": "Human Resources"
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **EmployeeShift API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

### **Endpoints**

#### **1\. Create EmployeeShift**

* **Endpoint:** `POST /employee-shift/`  
* **Description:** Creates a new employee shift.  
* **Required Fields:**  
  * employee_shift `string`: The name or description of the employee shift.  
  * full_time `string`: The total hours for a full-time shift (e.g., "200:00").  
* **Optional Fields:**  
  * weekly_full_time `string`: The total hours for a weekly full-time shift (e.g., "40:00"). Default is "40:00".  
  * company_id `array of integers`: The IDs of companies associated with the shift.  
  * grace_time_id `integer`: The ID of the grace time associated with the shift.

**Request Body:**

```json
{
  "employee_shift": "Morning Shift",
  "full_time": "200:00",
  "weekly_full_time": "40:00",
  "company_id": [1, 2],
  "grace_time_id": 1
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 1,
  "employee_shift": "Morning Shift",
  "full_time": "200:00",
  "weekly_full_time": "40:00",
  "company_id": [1, 2],
  "grace_time_id": 1
}
```

#### **2\. Retrieve EmployeeShift**

* **Endpoint:** `GET /employee-shift/{id}/`  
* **Description:** Retrieves the details of a specific employee shift by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee shift.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "employee_shift": "Morning Shift",
  "full_time": "200:00",
  "weekly_full_time": "40:00",
  "company_id": [1, 2],
  "grace_time_id": 1
}
```

#### **3\. Update EmployeeShift**

* **Endpoint:** `PUT /employee-shift/{id}/`  
* **Description:** Updates the details of a specific employee shift.  
* **Required Fields:**  
  * At least one field must be provided to update (e.g., employee\_shift, full\_time).  
* **Optional Fields:**  
  * employee_shift `string`: The name or description of the employee shift.  
  * full_time `string`: The total hours for a full-time shift.  
  * weekly_full_time `string`: The total hours for a weekly full-time shift.  
  * company_id `array of integers`: The IDs of companies associated with the shift.  
  * grace_time_id `integer`: The ID of the grace time associated with the shift.

**Request Body:**

```json
{
  "employee_shift": "Evening Shift",
  "full_time": "180:00",
  "weekly_full_time": "35:00",
  "company_id": [2, 3],
  "grace_time_id": 2
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "employee_shift": "Evening Shift",
  "full_time": "180:00",
  "weekly_full_time": "35:00",
  "company_id": [2, 3],
  "grace_time_id": 2
}
```

#### **4\. Delete EmployeeShift**

* **Endpoint:** `DELETE /employee-shift/{id}/`  
* **Description:** Deletes a specific employee shift by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee shift.  
* **Response:**  
  * **Success (204 No Content):**


#### **5\. List EmployeeShifts**

* **Endpoint:** `GET /employee-shift/`  
* **Description:** Retrieves a list of all employee shifts.  
* **Parameters:**  
  * Query Parameters:  
    * page `integer`: The page number for pagination.  
    * page_size `integer`: The number of records per page.  
    * search `string`: A search term to filter the records by shift name.

**Response:**

**Success (200 OK):**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "employee_shift": "Morning Shift",
      "full_time": "200:00",
      "weekly_full_time": "40:00",
      "company_id": [1, 2],
      "grace_time_id": 1
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server

## **Rotating Work Type Assignment API Documentation**

#### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

* **Description:** All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

#### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

#### **Endpoints**

**1.Create a Rotating Work Type Assignment**

* **Endpoint:** `POST /rotating-worktype-assings/`  
* **Description:** Create a new rotating work type assignment.  
* **Request Method:** POST

**Request Body:**

```json
{
  "employee_id": 1,
  "rotating_work_type_id": 2,
  "start_date": "2024-08-01",
  "next_change_date": "2024-08-15",
  "current_work_type": 3,
  "next_work_type": 4,
  "based_on": "day",
  "rotate_after_day": 7,
  "rotate_every_weekend": "monday",
  "rotate_every": "1"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 123,
  "employee_id": 1,
  "rotating_work_type_id": 2,
  "start_date": "2024-08-01",
  "next_change_date": "2024-08-15",
  "current_work_type": 3,
  "next_work_type": 4,
  "based_on": "day",
  "rotate_after_day": 7,
  "rotate_every_weekend": "monday",
  "rotate_every": "1",
  "is_active": true
}
```

**2.Retrieve a Rotating Work Type Assignment**

* **Endpoint:** `GET /rotating-worktype-assings/{id}/`  
* **Description:** Retrieve details of a specific rotating work type assignment by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the rotating work type assignment.

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "rotating_work_type_id": 2,
  "start_date": "2024-08-01",
  "next_change_date": "2024-08-15",
  "current_work_type": 3,
  "next_work_type": 4,
  "based_on": "day",
  "rotate_after_day": 7,
  "rotate_every_weekend": "monday",
  "rotate_every": "1", 
  "is_active": true
}
```

**3.Update a Rotating Work Type Assignment**

* **Endpoint:** `PUT /rotating-worktype-assings/{id}/`  
* **Description:** Update an existing rotating work type assignment.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the rotating work type assignment.

**Request Body:**

```json
{
  "rotating_work_type_id": 2,
  "start_date": "2024-08-01",
  "next_change_date": "2024-08-22",
  "current_work_type": 3,
  "next_work_type": 5,
  "based_on": "week",
  "rotate_after_day": 10,
  "rotate_every_weekend": "sunday",
  "rotate_every": "2"
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "rotating_work_type_id": 2,
  "start_date": "2024-08-01",
  "next_change_date": "2024-08-22",
  "current_work_type": 3,
  "next_work_type": 5,
  "based_on": "week",
  "rotate_after_day": 10,
  "rotate_every_weekend": "sunday",
  "rotate_every": "2",
  "is_active": true
}
```

**4.Delete a Rotating Work Type Assignment**

* **Endpoint:** `DELETE /rotating-worktype-assings/{id}/`  
* **Description:** Delete a specific rotating work type assignment by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the rotating work type assignment.  
* **Response:**

**Success (204 No Content):**

```json
No content
```

**5.List Rotating Work Type Assignments**

* **Endpoint:** `GET /rotating-worktype-assings/`  
* **Description:** Retrieve a list of all rotating work type assignments, with optional filters.  
* **Query Parameters:**  
  * **search** (optional): Search term to filter by employee name or other relevant fields.  
  * **next\_change\_date** (optional): Filter by the next scheduled change date.  
  * **start\_date** (optional): Filter by the start date of the assignment.  
  * **employee\_id** (optional): Filter by employee ID.  
  * **rotating\_work\_type\_id** (optional): Filter by rotating work type ID.  
  * **is\_active** (optional): Filter by active status.

**Usage Example:**

To retrieve all active rotating work type assignments for a specific employee:

```
GET /rotating-worktype-assings/?employee_id=1&is_active=true
```

To filter by a specific start date:

```
GET /rotating-worktype-assings/?start_date=2024-08-01
```

**Response:**

**Success (200 OK):**

```json
{
  "count": 5,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 123,
      "employee_id": 1,
      "rotating_work_type_id": 2,
      "start_date": "2024-08-01",
      "next_change_date": "2024-08-15",
      "current_work_type": 3,
      "next_work_type": 4,
      "based_on": "day",
      "rotate_after_day": 7,
      "rotate_every_weekend": "monday",
      "rotate_every": "1",
      "is_active": true
    },
  ]
}
```

#### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Employee Shift Schedule API Documentation**

#### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```


* **Description:**All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

#### **Base URL**

```
https://YOUR_DOMAIN/api/base
```


#### **Endpoints**

**1.Create an Employee Shift Schedule**

* **Endpoint:** `POST /employee-shift-schedules/`  
* **Description:** Create a new employee shift schedule.  
* **Request Method:** POST

**Request Body:**

```json
{
  "day": 1,
  "shift_id": 2,
  "minimum_working_hour": "08:15",
  "start_time": "09:00",
  "end_time": "17:00",
  "is_night_shift": false
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 123,
  "day": 1,
  "shift_id": 2,
  "minimum_working_hour": "08:15",
  "start_time": "09:00",
  "end_time": "17:00",
  "is_night_shift": false
}
```

**2.Retrieve an Employee Shift Schedule**

* **Endpoint:** `GET /employee-shift-schedules/{id}/`  
* **Description:** Retrieve details of a specific employee shift schedule by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee shift schedule.

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "day": 1,
  "shift_id": 2,
  "minimum_working_hour": "08:15",
  "start_time": "09:00",
  "end_time": "17:00",
  "is_night_shift": false
}
```

**3.Update an Employee Shift Schedule**

* **Endpoint:** `PUT /employee-shift-schedules/{id}/`  
* **Description:** Update an existing employee shift schedule.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee shift schedule.

**Request Body:**

```json
{
  "day": 1,
  "shift_id": 2,
  "minimum_working_hour": "08:30",
  "start_time": "08:00",
  "end_time": "16:00",
  "is_night_shift": true
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "day": 1,
  "shift_id": 2,
  "minimum_working_hour": "08:30",
  "start_time": "08:00",
  "end_time": "16:00",
  "is_night_shift": true
}
```

**4.Delete an Employee Shift Schedule**

* **Endpoint:** `DELETE /employee-shift-schedules/{id}/`  
* **Description:** Delete a specific employee shift schedule by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee shift schedule.

**Response:**

**Success (204 No Content):**

```json
No content
```

**5.List Employee Shift Schedules**

* **Endpoint:** `GET /employee-shift-schedules/`  
* **Description:** Retrieve a list of all employee shift schedules.  
* **Query Parameters:**  
  * **day** (optional): Filter by specific day ID.  
  * **shift\_id** (optional): Filter by specific shift ID.  
  * **is\_night\_shift** (optional): Filter by whether the shift is a night shift.

**Response:**

**Success (200 OK):**

```json
{
  "count": 5,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 123,
      "day": 1,
      "shift_id": 2,
      "minimum_working_hour": "08:15",
      "start_time": "09:00",
      "end_time": "17:00",
      "is_night_shift": false
    },
  ]
}
```

#### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Rotating Shift API Documentation**

**Authentication**  
Required: API Key or Bearer Token  
**Header:**

```
Authorization: Bearer {token}
```

**Description**: All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

**Base URL**

```
https://YOUR_DOMAIN/api/base
```

### **Endpoints**

#### **1\. Create Rotating Shift**

**Endpoint:** `POST /rotating-shifts/`  
**Description:** Creates a new rotating shift.  
**Required Fields:**

* name `string`: The name of the rotating shift.  
* shift1 `integer`: The ID of the first shift.  
* shift2 `integer`: The ID of the second shift.

**Request Body:**

```json
{
  "name": "Night Shift Rotation",
  "shift1": 1,
  "shift2": 2
}
```

**Response:**  
**Success (201 Created):**

```json
{
  "id": 1,
  "name": "Night Shift Rotation",
  "shift1": 1,
  "shift2": 2
}
```

#### **2\. Retrieve Rotating Shift**

**Endpoint:** `GET /rotating-shifts/{id}/`  
**Description:** Retrieves the details of a specific rotating shift by ID.  
**Parameters:**

* `id` (path parameter): The unique identifier of the rotating shift.

**Response:**  
**Success (200 OK):**



#### **3\. Update Rotating Shift**

**Endpoint:** `PUT /rotating-shifts/{id}/`  
**Description:** Updates the details of a specific rotating shift by ID.  
**Required Fields:**

* At least one field to update (e.g., `name`, `shift1`, `shift2`).

**Request Body:**

```json
{
  "name": "Day Shift Rotation",
  "shift1": 2,
  "shift2": 3
}
```

**Response:**  
**Success (200 OK):**

```json
{
  "id": 1,
  "name": "Day Shift Rotation",
  "shift1": 2,
  "shift2": 3
}
```

#### **4\. Delete Rotating Shift**

**Endpoint:** `DELETE /rotating-shifts/{id}/`  
**Description:** Deletes a specific rotating shift by ID.  
**Parameters:**

* `id` (path parameter): The unique identifier of the rotating shift.

**Response:**  
**Success (204 No Content):**

```json
{
  "message": "Rotating shift deleted successfully."
}
```

#### **5\. List Rotating Shifts**

**Endpoint:** `GET /rotating-shifts/`  
**Description:** Retrieves a list of all rotating shifts.  
**Response:**  
**Success (200 OK):**

```json
{
  "count": 2,
  "next": "https://YOUR_DOMAIN/api/base/rotating-shifts/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Night Shift Rotation",
      "shift1": 1,
      "shift2": 2
    },
    {
      "id": 2,
      "name": "Day Shift Rotation",
      "shift1": 2,
      "shift2": 3
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

### **Rotating Shift Assign API Documentation**

**Authentication**  
Required: API Key or Bearer Token  
**Header**:

```
Authorization: Bearer {token}
```

Description: All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

**Base URL**

```
https://YOUR_DOMAIN/api/base
```

### **Endpoints**

#### **1\. Create Rotating Shift Assign**

**Endpoint:** `POST /rotating-shift-assings/`  
**Description:** Creates a new rotating shift assignment for an employee.  
**Required Fields:**

* employee_id `integer`: The ID of the employee.  
* rotating_shift_id `integer`: The ID of the rotating shift.  
* start_date `date`: The start date of the rotating shift assignment.  
* current_shift `integer`: The ID of the current shift.  
* next_shift `integer`: The ID of the next shift.  
* based_on `string`: Criteria for shift rotation.

**Optional Fields:**

* next_change_date `date`: The date of the next shift change.  
* rotate_after_day `integer`: The number of days after which the shift rotates.  
* rotate_every_weekend `string`: The day on which the shift rotates every weekend.  
* rotate_every `string`: The frequency of shift rotation every month.

**Request Body:**

```json
{
  "employee_id": 1,
  "rotating_shift_id": 2,
  "start_date": "2024-08-09",
  "next_change_date": "2024-08-16",
  "current_shift": 1,
  "next_shift": 2,
  "based_on": "date",
  "rotate_after_day": 7,
  "rotate_every_weekend": "monday",
  "rotate_every": "1"
}
```

**Response:**  
**Success (201 Created):**

```json
{
  "id": 1,
  "employee_id": 1,
  "rotating_shift_id": 2,
  "start_date": "2024-08-09",
  "next_change_date": "2024-08-16",
  "current_shift": 1,
  "next_shift": 2,
  "based_on": "date",
  "rotate_after_day": 7,
  "rotate_every_weekend": "monday",
  "rotate_every": "1"
}
```

#### **2\. Retrieve Rotating Shift Assign**

**Endpoint:** `GET /rotating-shift-assings/{id}/`  
**Description:** Retrieves the details of a specific rotating shift assignment by ID.  
**Parameters:**

* `id` (path parameter): The unique identifier of the rotating shift assignment.

**Response:**  
**Success (200 OK):**

```json
{
  "id": 1,
  "employee_id": 1,
  "rotating_shift_id": 2,
  "start_date": "2024-08-09",
  "next_change_date": "2024-08-16",
  "current_shift": 1,
  "next_shift": 2,
  "based_on": "date",
  "rotate_after_day": 7,
  "rotate_every_weekend": "monday",
  "rotate_every": "1"
}
```

#### **3\. Update Rotating Shift Assign**

**Endpoint:** `PUT /rotating-shift-assings/{id}/`  
**Description:** Updates the details of a specific rotating shift assignment by ID.  
**Required Fields:**

* At least one field to update (e.g., `employee_id`, `rotating_shift_id`, `start_date`, `current_shift`, `next_shift`, `based_on`, `rotate_after_day`, `rotate_every_weekend`, `rotate_every`).

**Request Body:**

```json
{
  "next_change_date": "2024-08-23",
  "current_shift": 2,
  "next_shift": 3
}
```

**Response:**  
**Success (200 OK):**

```json
{
  "id": 1,
  "employee_id": 1,
  "rotating_shift_id": 2,
  "start_date": "2024-08-09",
  "next_change_date": "2024-08-23",
  "current_shift": 2,
  "next_shift": 3,
  "based_on": "date",
  "rotate_after_day": 7,
  "rotate_every_weekend": "monday",
  "rotate_every": "1"
}
```

#### **4\. Delete Rotating Shift Assign**

**Endpoint:** `DELETE /rotating-shift-assings/{id}/`  
**Description:** Deletes a specific rotating shift assignment by ID.  
**Parameters:**

* `id` (path parameter): The unique identifier of the rotating shift assignment.

**Response:**  
**Success (204 No Content):**

```json
No content
```

### **5\. List Rotating Shift Assignments**

**Endpoint:** `GET /rotating-shift-assings/`  
**Description:** Retrieves a list of all rotating shift assignments. Supports filtering by various fields.

**Query Parameters (Filters):**

* employee_id `integer`: Filter by the employee's ID.  
* rotating_shift_id `integer`: Filter by the rotating shift ID.  
* start_date `date`: Filter by the start date of the assignment.  
* next_change_date `date`: Filter by the next change date.  
* current_shift `integer`: Filter by the current shift ID.  
* next_shift `integer`: Filter by the next shift ID.  
* is_active `boolean`: Filter by whether the assignment is active.

**Example Use Case:**  
To retrieve all active rotating shift assignments for a specific employee (e.g., `employee_id=1`) with a `current_shift` ID of `1`:

**Request:**

```
GET /rotating-shift-assings/?employee_id=1&current_shift=1&is_active=true
```
```
Authorization: Bearer {token}
```


**Response:**

**Success (200 OK):**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "employee_id": 1,
      "rotating_shift_id": 2,
      "start_date": "2024-08-09",
      "next_change_date": "2024-08-16",
      "current_shift": 1,
      "next_shift": 2
    }
  ]
}
```

**Error Codes:**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Work Type Request API Documentation**

**Authentication**  
Required: API Key or Bearer Token  
**Header**:

```
Authorization: Bearer {token}
```


**Description:** All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

**Base URL**

```
https://YOUR_DOMAIN/api/base
```

### **Endpoints**

#### **1\. Create Work Type Request**

**Endpoint:** `POST /worktype-requests/`  
**Description:** Creates a new work type request for an employee.

**Required Fields:**

* employee_id (integer): The ID of the employee making the request.  
* work_type_id (integer): The ID of the requested work type.  
* requested_date (date): The date when the request is made.

**Optional Fields:**

* previous_work_type_id `integer`: The ID of the previous work type.  
* requested_till `date`: The date until which the request is valid.  
* description `string`: A description of the request.  
* is_permanent_work_type `boolean`: Indicates if the request is for a permanent change.  
* approved `boolean`: Indicates if the request has been approved.  
* canceled `boolean`: Indicates if the request has been canceled.  
* work_type_changed `boolean`: Indicates if the work type has been changed.

**Request Body Example:**

```json
{
  "employee_id": 1,
  "work_type_id": 2,
  "previous_work_type_id": 1,
  "requested_date": "2024-08-09",
  "requested_till": "2024-09-09",
  "description": "Requesting a shift change.",
  "is_permanent_work_type": true,
  "approved": false,
  "canceled": false,
  "work_type_changed": false
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 123,
  "employee_id": 1,
  "work_type_id": 2,
  "previous_work_type_id": 1,
  "requested_date": "2024-08-09",
  "requested_till": "2024-09-09",
  "description": "Requesting a shift change.",
  "is_permanent_work_type": true,
  "approved": false,
  "canceled": false,
  "work_type_changed": false
}
```


#### **2\. Retrieve Work Type Request**

**Endpoint:** `GET /worktype-requests/{id}/`  
**Description:** Retrieves a specific work type request by its ID.

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "work_type_id": 2,
  "previous_work_type_id": 1,
  "requested_date": "2024-08-09",
  "requested_till": "2024-09-09",
  "description": "Requesting a shift change.",
  "is_permanent_work_type": true,
  "approved": false,
  "canceled": false,
  "work_type_changed": false
}
```

#### **3\. Update Work Type Request**

**Endpoint:** `PUT /worktype-requests/{id}/`  
**Description:** Updates the details of a specific work type request.

**Required Fields:**  
At least one field must be provided to update (e.g., `work_type_id`, `requested_date`, `description`).

**Request Body Example:**

```json
{
  "work_type_id": 3,
  "description": "Requesting a temporary shift change.",
  "is_permanent_work_type": false
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "work_type_id": 3,
  "previous_work_type_id": 1,
  "requested_date": "2024-08-09",
  "requested_till": "2024-09-09",
  "description": "Requesting a temporary shift change.",
  "is_permanent_work_type": false,
  "approved": false,
  "canceled": false,
  "work_type_changed": false
}
```

#### **4\. Delete Work Type Request**

**Endpoint:** `DELETE /worktype-requests/{id}/`  
**Description:** Deletes a specific work type request by its ID.

**Response:**

**Success (204 No Content):**

```json
No content
```

#### **5\. List Work Type Requests**

**Endpoint:** `GET /worktype-requests/`  
**Description:** Retrieves a list of all work type requests.

**Query Parameters:**

* page `integer`: The page number for pagination.  
* page_size `integer`: The number of records per page.  
* search `string`: A search term to filter the records by employee, work type, etc.

**Response:**

**Success (200 OK):**

```json
{
  "count": 50,
  "next": "https://YOUR_DOMAIN/api/worktype-requests/?page=2",
  "previous": null,
  "results": [
    {
      "id": 123,
      "employee_id": 1,
      "work_type_id": 2,
      "previous_work_type_id": 1,
      "requested_date": "2024-08-09",
      "requested_till": "2024-09-09",
      "description": "Requesting a shift change.",
      "is_permanent_work_type": true,
      "approved": false,
      "canceled": false,
      "work_type_changed": false
    },
    {
      "id": 124,
      "employee_id": 2,
      "work_type_id": 3,
      "previous_work_type_id": 2,
      "requested_date": "2024-08-10",
      "requested_till": "2024-09-10",
      "description": "Requesting a temporary shift change.",
      "is_permanent_work_type": false,
      "approved": true,
      "canceled": false,
      "work_type_changed": true
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Approve Work Type Request**

**Endpoint**

```
PUT https://YOUR_DOMAIN/api/base/worktype-requests-approve/{id}/
```


**Description**  
Approves an existing work type request if it hasn't already been approved and the user has the necessary permissions.

**Request Parameters**

* **Path Parameter**:  
  * id `integer` - The ID of the work type request to be approved.

**Response**

* **Success (200 OK):** The work type request was successfully approved.

**Example Request**

```
PUT https://YOUR_DOMAIN/api/base/worktype-requests-approve/1/
```

```
Authorization: Bearer {token}
```

```
Content-Type: application/json
```



## **Cancel Work Type Request**

**Endpoint**

```
PUT https://YOUR_DOMAIN/api/base/worktype-requests-cancel/{id}/
```

**Description**  
Cancels an existing work type request if it hasn't already been approved and the user has the necessary permissions.

**Request Parameters**

* **Path Parameter**:  
  * id `integer` - The ID of the work type request to be canceled.

**Response**

* **Success (200 OK):** The work type request was successfully canceled.

**Example Request**

```
PUT https://YOUR_DOMAIN/api/base/worktype-requests-cancel/1/
```

```
Authorization: Bearer {token}
```

```
Content-Type: application/json
```

## **Shift Request API Documentation**

**Authentication**  
Required: API Key or Bearer Token  
**Header:**

```
Authorization: Bearer {token}
```

**Description**  
All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

**Base URL**

```
https://YOUR_DOMAIN/api/base
```

**Endpoints**

#### **1\. Create Shift Request**

**Endpoint**  
`POST /shift-requests/`

**Description**  
Creates a new shift request for an employee.

**Required Fields:**

* employee_id `integer`: The ID of the employee making the request.  
* shift_id `integer`: The ID of the requested shift.  
* requested_date `date`: The date when the request is made.

**Optional Fields:**

* previous_shift_id `integer`: The ID of the previous shift.  
* requested_till `date`: The date until which the request is valid.  
* description `string`: A description of the request.  
* is_permanent_shift `boolean`: Indicates if the request is for a permanent change.  
* reallocate_to `integer`: The ID of the employee to whom the shift is reallocated.  
* reallocate_approved `boolean`: Indicates if the reallocation has been approved.  
* reallocate_canceled `boolean`: Indicates if the reallocation has been canceled.  
* approved `boolean`: Indicates if the request has been approved.  
* canceled `boolean`: Indicates if the request has been canceled.  
* shift_changed `boolean`: Indicates if the shift has been changed.

**Request Body Example:**

```json
{
  "employee_id": 1,
  "shift_id": 2,
  "previous_shift_id": 1,
  "requested_date": "2024-08-09",
  "requested_till": "2024-09-09",
  "description": "Requesting a shift change.",
  "is_permanent_shift": true,
  "approved": false,
  "canceled": false,
  "shift_changed": false,
  "reallocate_to": 3,
  "reallocate_approved": false,
  "reallocate_canceled": false
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 123,
  "employee_id": 1,
  "shift_id": 2,
  "previous_shift_id": 1,
  "requested_date": "2024-08-09",
  "requested_till": "2024-09-09",
  "description": "Requesting a shift change.",
  "is_permanent_shift": true,
  "approved": false,
  "canceled": false,
  "shift_changed": false,
  "reallocate_to": 3,
  "reallocate_approved": false,
  "reallocate_canceled": false
}
```

**2\. Retrieve Shift Request**

**Endpoint**  
`GET /shift-requests/{id}/`

**Description**  
Retrieves a specific shift request by its ID.

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "shift_id": 2,
  "previous_shift_id": 1,
  "requested_date": "2024-08-09",
  "requested_till": "2024-09-09",
  "description": "Requesting a shift change.",
  "is_permanent_shift": true,
  "approved": false,
  "canceled": false,
  "shift_changed": false,
  "reallocate_to": 3,
  "reallocate_approved": false,
  "reallocate_canceled": false
} 
```
 
**3\. Update Shift Request**

**Endpoint**  
`PUT /shift-requests/{id}/`

**Description**  
Updates the details of a specific shift request.

**Required Fields:**  
At least one field must be provided to update (e.g., `shift_id`, `requested_date`, `description`).

**Request Body Example:**

```json
{
  "shift_id": 3,
  "description": "Requesting a temporary shift change.",
  "is_permanent_shift": false
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "shift_id": 3,
  "previous_shift_id": 1,
  "requested_date": "2024-08-09",
  "requested_till": "2024-09-09",
  "description": "Requesting a temporary shift change.",
  "is_permanent_shift": false,
  "approved": false,
  "canceled": false,
  "shift_changed": false,
  "reallocate_to": 3,
  "reallocate_approved": false,
  "reallocate_canceled": false
}
```

**4\. Delete Shift Request**

**Endpoint**  
`DELETE /shift-requests/{id}/`

**Description**  
Deletes a specific shift request by its ID.

**Response:**

**Success (204 No Content):** 

```json
No content.
```


**5\. List Shift Requests**

**Endpoint**  
`GET /shift-requests/`

**Description**  
Retrieves a list of all shift requests.

**Query Parameters:**

* page `integer`: The page number for pagination.  
* page_size `integer`: The number of records per page.  
* search `string`: A search term to filter the records by employee, shift, etc.

**Response:**

**Success (200 OK):**

```json
{
  "count": 50,
  "next": "https://YOUR_DOMAIN/api/base/shift-requests/?page=2",
  "previous": null,
  "results": [
    {
      "id": 123,
      "employee_id": 1,
      "shift_id": 2,
      "previous_shift_id": 1,
      "requested_date": "2024-08-09",
      "requested_till": "2024-09-09",
      "description": "Requesting a shift change.",
      "is_permanent_shift": true,
      "approved": false,
      "canceled": false,
      "shift_changed": false,
      "reallocate_to": 3,
      "reallocate_approved": false,
      "reallocate_canceled": false
    },
    {
      "id": 124,
      "employee_id": 2,
      "shift_id": 3,
      "previous_shift_id": 2,
      "requested_date": "2024-08-10",
      "requested_till": "2024-09-10",
      "description": "Requesting a temporary shift change.",
      "is_permanent_shift": false,
      "approved": true,
      "canceled": false,
      "shift_changed": true,
      "reallocate_to": 4,
      "reallocate_approved": true,
      "reallocate_canceled": false
    }
  ]
}
```

**Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.


## **Shift Request Approve API Documentation**

#### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

#### **Description**

This endpoint approves a shift request for an employee. Only users with the necessary permissions or those who are the reporting manager can approve the request.

#### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

#### **Endpoint**

**PUT** `/shift-request-approve/{pk}/`

#### **Path Parameters**

* pk `integer`: The primary key (ID) of the shift request to be approved.

**Success (200 OK):**

```json
{
  "status": "success"
}
```

## **Shift Request Cancel API Documentation**

#### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

#### **Description**

This endpoint cancels a shift request for an employee. The cancellation can only be performed by the reporting manager, a user with the necessary permissions, or the employee themselves (if the request hasn't been approved yet).

#### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

#### **Endpoint**

**POST** `/shift-request-cancel/{pk}/`

#### **Path Parameters**

* pk `integer`: The primary key (ID) of the shift request to be canceled.

**Success (200 OK):**

```json
{
  "status": "success"
}
```


## **Shift Request Delete API Documentation**

#### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

#### **Description**

This endpoint allows for the deletion of a specific shift request by its ID. Only shift requests that have not been approved can be deleted.

#### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

#### **Endpoint**

**DELETE** `/shift-request-delete/{pk}/`

#### **Path Parameters**

* pk `integer`: The primary key (ID) of the shift request to be deleted.

**Success (200 OK):**

```json
{
  "status": "deleted"
}
```

## **Shift Request Allocation API Documentation**

#### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

#### **Description**

This endpoint is used to allocate a shift request to another employee. If there are no existing requests for the same date, the shift reallocation will be approved.

#### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

#### **Endpoint**

**POST** `/shift-request-allocation/{pk}`

#### **Request Body**

* pk `integer`: The primary key (ID) of the shift request to be allocated.

**Success (200 OK):**

```json
{
  "status": "success"
}
```

### **Disciplinary Action Type API Documentation**

#### **Overview**

The Disciplinary Action Type API allows administrators to manage various disciplinary actions, such as warnings, suspensions, and dismissals, that can be assigned to employees. Each action type can include an option to block the employee's login during periods of suspension or dismissal.

#### **Authentication**

**Required:** API Key or Bearer Token  
**Header:**

```
Authorization: Bearer {token}
```

#### **Base URL**

```
https://YOUR_DOMAIN/api/base
```

#### **Endpoint**

**1\. List Disciplinary Action Types**

* **Endpoint:** `GET /disciplinary-action-type/`  
* **Description:** Retrieves a list of all disciplinary action types.

**Response:**  
Success (200 OK):

```json
[
  {
    "id": 1,
    "title": "Suspension",
    "action_type": "suspension",
    "block_option": true
  },
  {
    "id": 2,
    "title": "Warning",
    "action_type": "warning",
    "block_option": false
  }
]
```

**2\. Retrieve Disciplinary Action Type**

* **Endpoint:** `GET /disciplinary-action-type/{id}/`  
* **Description:** Retrieves details of a specific disciplinary action type by its ID.

**Response:**  
Success (200 OK):

```json
{
  "id": 1,
  "title": "Suspension",
  "action_type": "suspension",
  "block_option": true
}
```

**3\. Create Disciplinary Action Type**

* **Endpoint:** `POST /disciplinary-action-type/`  
* **Description:** Creates a new disciplinary action type.

**Request Body Example:**

```json
{
  "title": "Dismissal",
  "action_type": "dismissal",
  "block_option": true
}
```

**Response:**  
Success (201 Created):

```json
{
  "id": 3,
  "title": "Dismissal",
  "action_type": "dismissal",
  "block_option": true
}
```

**4\. Update Disciplinary Action Type**

* **Endpoint:** `PUT /disciplinary-action-type/{id}/`  
* **Description:** Updates the details of a specific disciplinary action type.

**Request Body Example:**

```json
{
  "title": "Severe Warning",
  "action_type": "warning",
  "block_option": false
}
```

**Response:**  
Success (200 OK):

```json
{
  "id": 1,
  "title": "Severe Warning",
  "action_type": "warning",
  "block_option": false
}
```

**5\. Delete Disciplinary Action Type**

* **Endpoint:** `DELETE /disciplinary-action-type/{id}/`  
* **Description:** Deletes a specific disciplinary action type by its ID.

**Response:**  
Success (204 No Content):

```json
No content
```

#### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

