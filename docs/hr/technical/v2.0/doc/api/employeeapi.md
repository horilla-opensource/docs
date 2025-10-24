## **Employee API Documentation**

### **Authentication**

**Required:** API Key or Bearer Token  
**Header:**

```
Authorization: Bearer {token}
```

**Description:** All endpoints require authentication. To access the endpoints, include the Authorization header with a valid API key or bearer token.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```

### **Model: Employee**

### **Endpoints**

#### **1\. Create Employee**

**Endpoint:** `POST /employees/`  
**Description:** Creates a new employee record.  
**Required Fields (form-data):**

* employee_first_name `string`: The first name of the employee.  
* email `string`: The employee's email address.  
* phone `string`: The phone number of the employee.

**Optional Fields (form-data):**

* badge_id `string`: Employee badge ID.  
* employee_user_id `integer`: Foreign key to the user record.  
* employee_last_name `string`: The last name of the employee.  
* employee_profile `file`: Upload the employee profile image.  
* address `string`: The address of the employee.  
* country `string`: The country of the employee.  
* state `string`: The state of the employee.  
* city `string`: The city of the employee.  
* zip `string`: The postal code of the employee.  
* dob `string`: The date of birth of the employee in YYYY-MM-DD format.  
* gender `string`: The gender of the employee.  
* qualification `string`: The qualification of the employee.  
* experience `integer`: The years of experience the employee has.  
* marital_status `string`: The marital status of the employee.  
* children `integer`: The number of children the employee has.  
* emergency_contact `string`: Emergency contact phone number.  
* emergency_contact_name `string`: Name of the emergency contact.  
* emergency_contact_relation `string`: Relationship to the emergency contact.  
* is_active `boolean`: The active status of the employee.  
* additional_info `string`: Additional information about the employee.

**Request Body:**  
Send the data as `form data` to support file uploads, such as the employee profile image.

Example:

```Form-Data:
employee_first_name: "John"
email: "john.doe@example.com"
phone: "123-456-7890"
employee_profile: (file)
...
```

**Response:**  
**Success (201 Created):**

```json
{
  "id": 123,
  "badge_id": "EMP001",
  "employee_user_id": 1,
  "employee_first_name": "John",
  "employee_last_name": "Doe",
  "employee_profile": "http://example.com/path/to/profile/image.jpg",
  "email": "john.doe@example.com",
  "phone": "123-456-7890",
  "address": "123 Elm Street",
  "country": "USA",
  "state": "NY",
  "city": "New York",
  "zip": "10001",
  "dob": "1985-06-15",
  "gender": "male",
  "qualification": "BSc Computer Science",
  "experience": 5,
  "marital_status": "single",
  "children": 0,
  "emergency_contact": "987-654-3210",
  "emergency_contact_name": "Jane Doe",
  "emergency_contact_relation": "Sister",
  "is_active": true,
  "additional_info": {"notes": "N/A"}
}
```

#### **2\. Retrieve Employee**

**Endpoint:** `GET /employees/{id}/`  
**Description:** Retrieves the details of a specific employee by ID.  
**Parameters:**

* `id` (path parameter): The unique identifier of the employee.

**Response:**  
**Success (200 OK):**

```json
{
  "id": 123,
  "badge_id": "EMP001",
  "employee_user_id": 1,
  "employee_first_name": "John",
  "employee_last_name": "Doe",
  "employee_profile": "http://example.com/path/to/profile/image.jpg",
  "email": "john.doe@example.com",
  "phone": "123-456-7890",
  "address": "123 Elm Street",
  "country": "USA",
  "state": "NY",
  "city": "New York",
  "zip": "10001",
  "dob": "1985-06-15",
  "gender": "male",
  "qualification": "BSc Computer Science",
  "experience": 5,
  "marital_status": "single",
  "children": 0,
  "emergency_contact": "987-654-3210",
  "emergency_contact_name": "Jane Doe",
  "emergency_contact_relation": "Sister",
  "is_active": true,
  "additional_info": {"notes": "N/A"}
}
```

#### **3\. Update Employee**

**Endpoint:** `PUT /employees/{id}/`  
**Description:** Updates the details of a specific employee.  
**Required Fields (form-data):**  
At least one field must be provided to update (e.g., email, phone, or address).

**Optional Fields (form-data):**

* email `string`: The new email address of the employee.  
* phone `string`: The new phone number of the employee.  
* address `string`: The new address of the employee.  
* employee_profile `file`: Upload the new employee profile image.

**Request Body:**  
Send the data as `form-data` to support file uploads, such as the employee profile image.

```Form-Data:
email: "john.newemail@example.com"
phone: "555-1234"
address: "456 Oak Avenue"
employee_profile: (file)
...
```

**Response:**  
**Success (200 OK):**

```json
{
  "id": 123,
  "badge_id": "EMP001",
  "employee_user_id": 1,
  "employee_first_name": "John",
  "employee_last_name": "Doe",
  "employee_profile": "http://example.com/path/to/profile/image.jpg",
  "email": "john.newemail@example.com",
  "phone": "555-1234",
  "address": "456 Oak Avenue",
  "country": "USA",
  "state": "NY",
  "city": "New York",
  "zip": "10001",
  "dob": "1985-06-15",
  "gender": "male",
  "qualification": "BSc Computer Science",
  "experience": 5,
  "marital_status": "single",
  "children": 0,
  "emergency_contact": "987-654-3210",
  "emergency_contact_name": "Jane Doe",
  "emergency_contact_relation": "Sister",
  "is_active": true,
  "additional_info": {"notes": "N/A"}
}
```

#### **4\. Delete Employee**

**Endpoint:** `DELETE /employees/{id}/`  
**Description:** Delete a specific employee record.  
**Parameters:**

* `id` (path parameter): The unique identifier of the employee.

**Response:**  
**Success (204 No Content):**

```json
No content
```

#### **5\. List Employees**

* **Endpoint:** `GET /employees/`  
* **Description:** Retrieves a list of all employees, with optional filters. This API can be used to filter the queryset based on various fields, allowing you to narrow down the list of employees according to specific criteria.  
* **Query Parameters:**  
  * gender `optional`: Filter employees by gender (e.g., `male`, `female`).  
  * marital_status `optional`: Filter employees by marital status (e.g., `single`, `married`).  
  * is_active `optional`: Filter employees by their active status (`true` or `false`).  
  * city `optional`: Filter employees by their city (e.g., `New York`).  
  * state `optional`: Filter employees by their state (e.g., `NY`).  
  * country `optional`: Filter employees by their country (e.g., `USA`).  
  * dob `optional`: Filter employees by date of birth, in YYYY-MM-DD format.  
  * experience `optional`: Filter employees by years of experience (e.g., `5`).

**Usage Example:**

```
GET /employees/?gender=male&is_active=true
```

To retrieve all married employees:

```
GET /employees/?marital_status=married
```

To retrieve all employees in a specific city:

```
GET /employees/?city=New%20York
```

To retrieve employees with more than 5 years of experience:

```
GET /employees/?experience__gte=5
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
      "id": 123,
      "badge_id": "EMP001",
      "employee_user_id": 1,
      "employee_first_name": "John",
      "employee_last_name": "Doe",
      "employee_profile": "http://example.com/path/to/profile/image.jpg",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "address": "123 Elm Street",
      "country": "USA",
      "state": "NY",
      "city": "New York",
      "zip": "10001",
      "dob": "1985-06-15",
      "gender": "male",
      "qualification": "BSc Computer Science",
      "experience": 5,
      "marital_status": "single",
      "children": 0,
      "emergency_contact": "987-654-3210",
      "emergency_contact_name": "Jane Doe",
      "emergency_contact_relation": "Sister",
      "is_active": true,
      "additional_info": {"notes": "N/A"}
    }
  ]
}
```

**Error Codes:**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Employee Work Information API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

* **Description:** All endpoints require authentication. To access the endpoints, include the `Authorization` header with a valid API key or bearer token.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```

### **Model :** 

* ### **EmployeeWorkInformation**

### **Endpoints**

#### **1\. Create Employee Work Information**

* **Endpoint:** `POST /employee-work-information/`  
* **Description:** Creates a new employee work information record.  
* **Required Fields:**  
  * employee_id `integer`: The ID of the employee.  
* **Optional Fields:**  
  * job_position_id `integer`: The ID of the job position.  
  * department_id `integer`: The ID of the department.  
  * work_type_id `integer`: The ID of the work type.  
  * employee_type_id `integer`: The ID of the employee type.  
  * job_role_id `integer`: The ID of the job role.  
  * reporting_manager_id `integer`: The ID of the reporting manager.  
  * company_id `integer`: The ID of the company.  
  * tags `array of integers`: The IDs of the employee tags.  
  * location `string`: The work location.  
  * email `string`: The work email of the employee.  
  * mobile `string`: The work mobile number of the employee.  
  * shift_id `integer`: The ID of the shift.  
  * date_joining `string`: The joining date of the employee in YYYY-MM-DD format.  
  * contract_end_date `string`: The contract end date of the employee in YYYY-MM-DD format.  
  * basic_salary `integer`: The basic salary of the employee.  
  * salary_hour `integer`: The salary per hour of the employee.  
  * additional_info `object`: Additional information about the employee.  
  * experience `float`: The work experience of the employee in years.

**Request Body:**

```json
{
  "employee_id": 1,
  "job_position_id": 2,
  "department_id": 3,
  "work_type_id": 4,
  "employee_type_id": 5,
  "job_role_id": 6,
  "reporting_manager_id": 7,
  "company_id": 8,
  "tags": [1, 2, 3],
  "location": "New York Office",
  "email": "work.email@example.com",
  "mobile": "123-456-7890",
  "shift_id": 9,
  "date_joining": "2023-01-15",
  "contract_end_date": "2024-01-15",
  "basic_salary": 60000,
  "salary_hour": 30,
  "additional_info": {"notes": "N/A"},
  "experience": 5.0
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 123,
  "employee_id": 1,
  "job_position_id": 2,
  "department_id": 3,
  "work_type_id": 4,
  "employee_type_id": 5,
  "job_role_id": 6,
  "reporting_manager_id": 7,
  "company_id": 8,
  "tags": [1, 2, 3],
  "location": "New York Office",
  "email": "work.email@example.com",
  "mobile": "123-456-7890",
  "shift_id": 9,
  "date_joining": "2023-01-15",
  "contract_end_date": "2024-01-15",
  "basic_salary": 60000,
  "salary_hour": 30,
  "additional_info": {"notes": "N/A"},
  "experience": 5.0
}
```

#### **2\. Retrieve Employee Work Information**

* **Endpoint:** `GET /employee-work-information/{id}/`  
* **Description:** Retrieves the details of a specific employee work information record by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee work information record.

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "job_position_id": 2,
  "department_id": 3,
  "work_type_id": 4,
  "employee_type_id": 5,
  "job_role_id": 6,
  "reporting_manager_id": 7,
  "company_id": 8,
  "tags": [1, 2, 3],
  "location": "New York Office",
  "email": "work.email@example.com",
  "mobile": "123-456-7890",
  "shift_id": 9,
  "date_joining": "2023-01-15",
  "contract_end_date": "2024-01-15",
  "basic_salary": 60000,
  "salary_hour": 30,
  "additional_info": {"notes": "N/A"},
  "experience": 5.0
}
```

**3\. Update Employee Work Information**

* **Endpoint:** `PUT /employee-work-info/{id}/`  
* **Description:** Updates the details of a specific employee work information record.  
* **Required Fields:**  
  * At least one field must be provided to update (e.g., `job_position_id`, `department_id`, `work_type_id`, `employee_type_id`, `job_role_id`, `reporting_manager_id`, `company_id`, `tags`, `location`, `email`, `mobile`, `shift_id`, `date_joining`, `contract_end_date`, `basic_salary`, `salary_hour`, `additional_info`, or `experience`).  
* **Optional Fields:**  
  * job_position_id `integer`: The new job position ID.  
  * department_id `integer`: The new department ID.  
  * work_type_id `integer`: The new work type ID.  
  * employee_type_id `integer`: The new employee type ID.  
  * job_role_id `integer`: The new job role ID.  
  * reporting_manager_id `integer`: The new reporting manager ID.  
  * company_id `integer`: The new company ID.  
  * tags array of `integers`: The new employee tag IDs.  
  * location `string`: The new work location.  
  * email `string`: The new work email.  
  * mobile `string`: The new work mobile number.  
  * shift_id `integer`: The new shift ID.  
  * date_joining `string`: The new joining date in YYYY-MM-DD format.  
  * contract_end_date `string`: The new contract end date in YYYY-MM-DD format.  
  * basic_salary `integer`: The new basic salary.  
  * salary_hour `integer`: The new salary per hour.  
  * additional_info `object`: The new additional information.  
  * experience `float`: The new work experience in years.

**Request Body:**

```json
{
  "job_position_id": 2,
  "department_id": 3,
  "work_type_id": 4,
  "employee_type_id": 5,
  "job_role_id": 6,
  "reporting_manager_id": 7,
  "company_id": 8,
  "tags": [1, 2, 3],
  "location": "New York Office",
  "email": "work.email@example.com",
  "mobile": "123-456-7890",
  "shift_id": 9,
  "date_joining": "2023-01-15",
  "contract_end_date": "2024-01-15",
  "basic_salary": 60000,
  "salary_hour": 30,
  "additional_info": {"notes": "N/A"},
  "experience": 5.0
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "job_position_id": 2,
  "department_id": 3,
  "work_type_id": 4,
  "employee_type_id": 5,
  "job_role_id": 6,
  "reporting_manager_id": 7,
  "company_id": 8,
  "tags": [1, 2, 3],
  "location": "New York Office",
  "email": "work.email@example.com",
  "mobile": "123-456-7890",
  "shift_id": 9,
  "date_joining": "2023-01-15",
  "contract_end_date": "2024-01-15",
  "basic_salary": 60000,
  "salary_hour": 30,
  "additional_info": {"notes": "N/A"},
  "experience": 5.0
}
```

#### **4\. Delete Employee Work Information**

* **Endpoint:** `DELETE /employee-work-info/{id}/`  
* **Description:** Deletes a specific employee work information record by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee work information record.

**Response:**

**Success (204 No Content):**

```json
No content 
```
 

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Employee Bank Details API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```

### **Model :** 

* ### **EmployeeBankDetails**

### **Endpoints**

#### **1\. Create Employee Bank Details**

* **Endpoint:** `POST /employee-bank-details/`  
* **Description:** Creates a new employee bank details record.  
* **Required Fields:**  
  * employee_id `integer`: The ID of the employee.  
  * bank_name `string`: The name of the bank.  
  * account_number `string`: The bank account number.  
  * branch `string`: The branch of the bank.  
  * address `string`: The address of the bank.  
  * any_other_code1 `string`: Bank code \#1.  
* **Optional Fields:**  
  * country `string`: The country of the bank.  
  * state `string`: The state of the bank.  
  * city `string`: The city of the bank.  
  * any_other_code2 `string`: Bank code \#2.  
  * additional_info `object`: Additional information about the bank details.

**Request Body:**

```json
{
  "employee_id": 1,
  "bank_name": "ABC Bank",
  "account_number": "1234567890",
  "branch": "Main Branch",
  "address": "123 Main St, City, Country",
  "country": "Country",
  "state": "State",
  "city": "City",
  "any_other_code1": "ABC123",
  "any_other_code2": "XYZ456",
  "additional_info": {"notes": "N/A"}
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 123,
  "employee_id": 1,
  "bank_name": "ABC Bank",
  "account_number": "1234567890",
  "branch": "Main Branch",
  "address": "123 Main St, City, Country",
  "country": "Country",
  "state": "State",
  "city": "City",
  "any_other_code1": "ABC123",
  "any_other_code2": "XYZ456"
  "additional_info": {"notes": "N/A"}
}
```

#### **2\. Retrieve Employee Bank Details**

* **Endpoint:** `GET /employee-bank-details/{id}/`  
* **Description:** Retrieves the details of a specific employee bank details record by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee bank details record.

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "bank_name": "ABC Bank",
  "account_number": "1234567890",
  "branch": "Main Branch",
  "address": "123 Main St, City, Country",
  "country": "Country",
  "state": "State",
  "city": "City",
  "any_other_code1": "ABC123",
  "any_other_code2": "XYZ456",
  "additional_info": {"notes": "N/A"}
}
```

#### **3\. Update Employee Bank Details**

* **Endpoint:** `PUT /employee-bank-details/{id}/`  
* **Description:** Updates the details of a specific employee bank details record.  
* **Required Fields:**  
  * At least one field must be provided to update (e.g., `bank_name`, `account_number`, `branch`, `address`, `country`, `state`, `city`, `any_other_code1`, `any_other_code2`, `additional_info`).  
* **Optional Fields:**  
  * bank_name `string`: The new name of the bank.  
  * account_number `string`: The new bank account number.  
  * branch `string`: The new branch of the bank.  
  * address `string`: The new address of the bank.  
  * country `string`: The new country of the bank.  
  * state `string`: The new state of the bank.  
  * city `string`: The new city of the bank.  
  * any_other_code1 `string`: The new bank code \#1.  
  * any_other_code2 `string`: The new bank code \#2.  
  * additional_info `object`: The new additional information.

**Request Body:**

```json
{
  "bank_name": "XYZ Bank",
  "account_number": "9876543210",
  "branch": "Branch 2",
  "address": "456 Another St, Another City, Another Country",
  "country": "Another Country",
  "state": "Another State",
  "city": "Another City",
  "any_other_code1": "XYZ123",
  "any_other_code2": "ABC456",
  "additional_info": {"notes": "Updated info"}
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": 1,
  "bank_name": "XYZ Bank",
  "account_number": "9876543210",
  "branch": "Branch 2",
  "address": "456 Another St, Another City, Another Country",
  "country": "Another Country",
  "state": "Another State",
  "city": "Another City",
  "any_other_code1": "XYZ123",
  "any_other_code2": "ABC456",
  "additional_info": {"notes": "Updated info"}
}
```

#### **4\. Delete Employee Bank Details**

* **Endpoint:** `DELETE /employee-bank-details/{id}/`  
* **Description:** Deletes a specific employee bank details record by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee bank details record.

**Response:**

**Success (204 No Content):**

```json
No content
``` 

#### **5\. List Employee Bank Details**

* **Endpoint:** `GET /employee-bank-details/`  
* **Description:** Retrieves a list of all employee bank details records.  
* **Parameters:**  
  * **Query Parameters:**  
    * page `integer`: The page number for pagination.  
    * page_size `integer`: The number of records per page.  
    * search `string`: A search term to filter the records by bank name, branch, city, etc.  

* **Response:**

**Success (200 OK):**

```json
{
  "count": 50,
  "next": "https://YOUR_DOMAIN/api/employee/employee-bank-details/?page=2",
  "previous": null,
  "results": [
    {
      "id": 123,
      "employee_id": 1,
      "bank_name": "ABC Bank",
      "account_number": "1234567890",
      "branch": "Main Branch",
      "address": "123 Main St, City, Country",
      "country": "Country",
      "state": "State",
      "city": "City",
      "any_other_code1": "ABC123",
      "any_other_code2": "XYZ456",
      "additional_info": {"notes": "N/A"}
    },
    {
      "id": 124,
      "employee_id": 2,
      "bank_name": "XYZ Bank",
      "account_number": "9876543210",
      "branch": "Branch 2",
      "address": "456 Another St, Another City, Another Country",
      "country": "Another Country",
      "state": "Another State",
      "city": "Another City",
      "any_other_code1": "XYZ123",
      "any_other_code2": "ABC456",
      "additional_info": {"notes": "Updated info"}
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.


## **Disciplinary Action API Documentation**

### **Authentication**

**Required:** API Key or Bearer Token  
**Header:**

```
Authorization: Bearer {token} 
```

**Description:** All endpoints require authentication. Include the Authorization header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```

### **Model: DisciplinaryAction**

### **Endpoints**

#### **1\. Create Disciplinary Action**

**Endpoint:** `POST /disciplinary-action/`  
**Description:** Creates a new disciplinary action record.  
**Required Fields (form-data):**

* employee_id `array of integers`: The IDs of the employees involved.  
* action `integer`: The ID of the action type.  
* description `string`: Description of the disciplinary action.

**Optional Fields (form-data):**

* unit_in `string`: Unit of time (days or hours). Default is "days".  
* days `integer`: Number of days. Default is 1\.  
* hours `string`: Number of hours in the format HH  
  . Default is "00:00".  
* start_date `date`: The start date of the disciplinary action.  
* attachment `file`: File attachment related to the disciplinary action.

**Request Body:**  
Send the data as `form-data` to support file uploads and multiple values.

Example:

```Form-Data:
employee_id: [1, 2]  (as separate values or a CSV string)
action: 1
description: "Violation of company policy"
unit_in: "days"
days: 3
hours: "00:00"
start_date: "2024-08-01"
attachment: (file)
```

**Response:**  
**Success (201 Created):**

```json
{
  "id": 123,
  "employee_id": [1, 2],
  "action": 1,
  "description": "Violation of company policy",
  "unit_in": "days",
  "days": 3,
  "hours": "00:00",
  "start_date": "2024-08-01",
  "attachment": "path/to/attachment"
}
```

#### **2\. Retrieve Disciplinary Action**

**Endpoint:** `GET /disciplinary-action/{id}/`  
**Description:** Retrieves the details of a specific disciplinary action record by ID.  
**Parameters:**

* `id` (path parameter): The unique identifier of the disciplinary action record.

**Response:**  
**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": [1, 2],
  "action": 1,
  "description": "Violation of company policy",
  "unit_in": "days",
  "days": 3,
  "hours": "00:00",
  "start_date": "2024-08-01",
  "attachment": "path/to/attachment"
}
```

#### **3\. Update Disciplinary Action**

**Endpoint:** `PUT /disciplinary-action/{id}/`  
**Description:** Updates the details of a specific disciplinary action record.  
**Required Fields (form-data):**  
At least one field must be provided to update (e.g., employee\_id, action, description, unit\_in, days, hours, start\_date, attachment).

**Optional Fields (form-data):**

* employee_id `array of integers`: The IDs of the employees involved.  
* action `integer`: The ID of the action type.  
* description `string`: Description of the disciplinary action.  
* unit_in `string`: Unit of time (days or hours). Default is "days".  
* days `integer`: Number of days. Default is 1\.  
* hours `string`: Number of hours in the format HH  
  . Default is "00:00".  
* start_date `date`: The start date of the disciplinary action.  
* attachment `file`: File attachment related to the disciplinary action.

**Request Body:**  
Send the data as `form-data` to support file uploads and multiple values.

Example:

```Form-Data:
description: "Updated violation of company policy"
unit_in: "hours"
days: 0
hours: "04:00"
start_date: "2024-08-02"
attachment: (file)
```

**Response:**  
**Success (200 OK):**

```json
{
  "id": 123,
  "employee_id": [1, 2],
  "action": 1,
  "description": "Updated violation of company policy",
  "unit_in": "hours",
  "days": 0,
  "hours": "04:00",
  "start_date": "2024-08-02",
  "attachment": "path/to/attachment"
}
```

#### **4\. Delete Disciplinary Action**

**Endpoint:** `DELETE /disciplinary-action/{id}/`  
**Description:** Deletes a specific disciplinary action record by ID.  
**Parameters:**

* `id` (path parameter): The unique identifier of the disciplinary action record.

**Response:**  

**Success (204 No Content):**

```json
No content 
```

#### **5\. List Disciplinary Actions**

* **Endpoint:** `GET /disciplinary-action/`  
* **Description:** Retrieves a list of all disciplinary action records.  
* **Parameters:**  
  * **Query Parameters:**  
    * page `integer`: The page number for pagination.  
    * page_size `integer`: The number of records per page.  
    * search `string`: A search term to filter the records by description, employee, etc.

**Response:**

**Success (200 OK):**

```json
{
  "count": 20,
  "next": "https://YOUR_DOMAIN/api/employee/disciplinary-action/?page=2",
  "previous": null,
  "results": [
    {
      "id": 123,
      "employee_id": [1, 2],
      "action": 1,
      "description": "Violation of company policy",
      "unit_in": "days",
      "days": 3,
      "hours": "00:00",
      "start_date": "2024-08-01",
      "attachment": "path/to/attachment"
    },
    {
      "id": 124,
      "employee_id": [3, 4],
      "action": 2,
      "description": "Another violation",
      "unit_in": "hours",
      "days": 0,
      "hours": "02:00",
      "start_date": "2024-08-03",
      "attachment": "path/to/another_attachment"
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.  
  


## **Policy API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```

*   
* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```

### **Model :** 

* ### **Policy**

### **Endpoints**

#### **1\. Create Policy**

* **Endpoint:** `POST /policies/`  
* **Description:** Creates a new policy.  
* **Required Fields:**  
  * title `string`: The title of the policy.  
  * body `string`: The content of the policy.  
* **Optional Fields:**  
  * is_visible_to_all `boolean`: Indicates if the policy is visible to all employees. Default is `true`.  
  * specific_employees `array of integers`: The IDs of specific employees the policy applies to. If `is_visible_to_all` is `true`, this field is ignored.  
  * attachments `array of integers`: The IDs of files attached to the policy.

**Request Body:**

```json
{
  "title": "Work From Home Policy",
  "body": "Detailed description of the work from home policy...",
  "is_visible_to_all": true,
  "specific_employees": [1, 2, 3],
  "attachments": [1, 2]
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 1,
  "title": "Work From Home Policy",
  "body": "Detailed description of the work from home policy...",
  "is_visible_to_all": true,
  "specific_employees": [],
  "attachments": [1, 2]
}
```

#### **2\. Retrieve Policy**

* **Endpoint:** `GET /policies/{id}/`  
* **Description:** Retrieves the details of a specific policy by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the policy.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "title": "Work From Home Policy",
  "body": "Detailed description of the work from home policy...",
  "is_visible_to_all": true,
  "specific_employees": [],
  "attachments": [1, 2]
}
```

#### **3\. Update Policy**

* **Endpoint:** `PUT /policies/{id}/`  
* **Description:** Updates the details of a specific policy.  
* **Required Fields:**  
  * At least one field must be provided to update (e.g., `title`, `body`, `is_visible_to_all`, `specific_employees`, `attachments`).  
* **Optional Fields:**  
  * title `string`: The title of the policy.  
  * body `string`: The content of the policy.  
  * is_visible_to_all `boolean`: Indicates if the policy is visible to all employees. Default is `true`.  
  * specific_employees `array of integers`: The IDs of specific employees the policy applies to. If `is_visible_to_all` is `true`, this field is ignored.  
  * attachments `array of integers`: The IDs of files attached to the policy.

**Request Body:**

```json
{
  "title": "Updated Work From Home Policy",
  "body": "Updated description of the work from home policy...",
  "is_visible_to_all": false,
  "specific_employees": [1, 2],
  "attachments": [1, 3]
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "title": "Updated Work From Home Policy",
  "body": "Updated description of the work from home policy...",
  "is_visible_to_all": false,
  "specific_employees": [1, 2],
  "attachments": [1, 3]
}
```

#### **4\. Delete Policy**

* **Endpoint:** `DELETE /policies/{id}/`  
* **Description:** Deletes a specific policy by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the policy.

**Response:**

**Success (204 No Content):**

```json
Not found 
```

#### **5\. List Policies**

* **Endpoint:** `GET /policies/`  
* **Description:** Retrieves a list of all policies.  
* **Parameters:**  
  * **Query Parameters:**  
    * page `integer`: The page number for pagination.  
    * page_size `integer`: The number of records per page.  
    * search `string`: A search term to filter the records by title, body, etc.

**Response:**

**Success (200 OK):**

```json
{
  "count": 10,
  "next": "https://YOUR_DOMAIN/api/employee/policies/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Work From Home Policy",
      "body": "Detailed description of the work from home policy...",
      "is_visible_to_all": true,
      "specific_employees": [],
      "attachments": [1, 2]
    },
    {
      "id": 2,
      "title": "Leave Policy",
      "body": "Detailed description of the leave policy...",
      "is_visible_to_all": true,
      "specific_employees": [],
      "attachments": [3, 4]
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Document API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```
 
* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```

### **Model :** 

* ### **Document**

### **Endpoints**

#### **1\. Create Document**

* **Endpoint:** `POST /documents/`  
* **Description:** Creates a new document.  
* **Required Fields:**  
  * title `string`: The title of the document.  
  * employee_id `integer`: The ID of the employee associated with the document.  
  * status `string`: The status of the document. Must be one of the predefined choices.  
* **Optional Fields:**  
  * document_request_id `integer`: The ID of the associated document request.  
  * document `file`: The file of the document.  
  * reject_reason `string`: The reason for rejecting the document.  
  * expiry_date `date`: The expiry date of the document.  
  * notify_before `integer`: Number of days before expiry to notify.  
  * is_digital_asset `boolean`: Indicates if the document is a digital asset.

**Request Body:**

```json
{
  "title": "Passport",
  "employee_id": 1,
  "document_request_id": 1,
  "document": "base64_encoded_file",
  "status": "requested",
  "reject_reason": "Document expired",
  "expiry_date": "2024-12-31",
  "notify_before": 7,
  "is_digital_asset": false
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 1,
  "title": "Passport",
  "employee_id": 1,
  "document_request_id": 1,
  "document": "https://YOUR_DOMAIN/media/employee/documents/passport.pdf",
  "status": "requested",
  "reject_reason": "Document expired",
  "expiry_date": "2024-12-31",
  "notify_before": 7,
  "is_digital_asset": false
}
```

#### **2\. Retrieve Document**

* **Endpoint:** `GET /documents/{id}/`  
* **Description:** Retrieves the details of a specific document by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the document.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "title": "Passport",
  "employee_id": 1,
  "document_request_id": 1,
  "document": "https://YOUR_DOMAIN/media/employee/documents/passport.pdf",
  "status": "requested",
  "reject_reason": "Document expired",
  "expiry_date": "2024-12-31",
  "notify_before": 7,
  "is_digital_asset": false
}
```

#### **3\. Update Document**

* **Endpoint:** `PUT /documents/{id}/`  
* **Description:** Updates the details of a specific document.  
* **Required Fields:**  
  * At least one field must be provided to update (e.g., `title`, `employee_id`, `document_request_id`, `document`, `status`, `reject_reason`, `expiry_date`, `notify_before`, `is_digital_asset`).

**Request Body:**

```json
{
  "title": "Updated Passport",
  "employee_id": 1,
  "document_request_id": 1,
  "document": "base64_encoded_file",
  "status": "approved",
  "reject_reason": "Document expired",
  "expiry_date": "2024-12-31",
  "notify_before": 7,
  "is_digital_asset": true
}
```

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "title": "Updated Passport",
  "employee_id": 1,
  "document_request_id": 1,
  "document": "https://YOUR_DOMAIN/media/employee/documents/updated_passport.pdf",
  "status": "approved",
  "reject_reason": "Document expired",
  "expiry_date": "2024-12-31",
  "notify_before": 7,
  "is_digital_asset": true
}
```

#### **4\. Delete Document**

* **Endpoint:** `DELETE /documents/{id}/`  
* **Description:** Deletes a specific document by ID.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the document.

**Response:**

**Success (204 No Content):**

```json
No content
```

#### **5\. List Documents**

* **Endpoint:** `GET /documents/`  
* **Description:** Retrieves a list of all documents.  
* **Parameters:**  
  * **Query Parameters:**  
    * page `integer`: The page number for pagination.  
    * page_size `integer`: The number of records per page.  
    * search `string`: A search term to filter the records by title, status, etc.

**Response:**

**Success (200 OK):**

```json
{
  "count": 10,
  "next": "https://YOUR_DOMAIN/api/employee/documents/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Passport",
      "employee_id": 1,
      "document_request_id": 1,
      "document": "https://YOUR_DOMAIN/media/employee/documents/passport.pdf",
      "status": "requested",
      "reject_reason": "Document expired",
      "expiry_date": "2024-12-31",
      "notify_before": 7,
      "is_digital_asset": false
    },
    {
      "id": 2,
      "title": "Work Permit",
      "employee_id": 2,
      "document_request_id": 2,
      "document": "https://YOUR_DOMAIN/media/employee/documents/work_permit.pdf",
      "status": "approved",
      "reject_reason": null,
      "expiry_date": "2025-06-30",
      "notify_before": 30,
      "is_digital_asset": true
    }
  ]
}
```

### **Error Codes**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.


## **Employee Work Information Export API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token} 
```
* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```

### **Endpoint**

#### **Export Employee Work Information**

* **Endpoint:** `GET /employee-work-info-export/`  
* **Description:** Exports the employee work information to a file format.  
* **Permission Required:** `employee.add_employeeworkinformation`  
* **Request Method:** `GET`

**Response:**

**Success (200 OK):**

Returns a file containing the exported employee work information.


## **Employee Work Information Import API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```
* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```
### **Endpoint**

#### **Import Employee Work Information**

* **Endpoint:** `POST /employee-work-info-import/`  
* **Description:** Imports employee work information from an XLS file.  
* **Permission Required:** `employee.add_employeeworkinformation`  
* **Request Method:** `POST`  
* **Request Headers:**  
  * **Content-Type:** `multipart/form-data`  
* **Request Body:**  
  * **Field:** `file`  
  * **Type:** `File`  
  * **Description:** The XLS file containing employee work information.  
  * **Format:** The file should be in XLS format and include the following columns:  
    * `Badge id`  
    * `First Name`  
    * `Last Name`  
    * `Phone`  
    * `Email`  
    * `Gender`  
    * `Department`  
    * `Job Position`  
    * `Job Role`  
    * `Work Type`  
    * `Shift`  
    * `Employee Type`  
    * `Reporting Manager`  
    * `Company`  
    * `Location`  
    * `Date joining`  
    * `Contract End Date`  
    * `Basic Salary`  
    * `Salary Hour`

**Response:**

**Success (200 OK):** 

Returns a message indicating the status of the import.



## **Document Request API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```
*   
* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```
### **Model :** 

* ### **DocumentRequest**

### **Endpoints**

#### **1\. Retrieve a Single Document Request**

* **Endpoint:** `GET /document-request/{id}/`  
* **Description:** Retrieve a single document request by its ID.  
* **Request Method:** `GET`  
* **URL Parameters:**  
  * `id` (int): ID of the document request.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "title": "Document Request Title",
  "employee_id": [1, 2, 3],
  "format": "PDF",
  "max_size": 10485760,
  "description": "Description of the document request"
}
```

#### **2\. Create a Document Request**

* **Endpoint:** `POST /document-request/`  
* **Description:** Create a new document request.  
* **Request Method:** `POST`  
* **Request Headers:**  
  * **Content-Type:** `application/json`  
* **Request Body:**  
  * **Field:** `title`  
  * **Type:** `String`  
  * **Required:** `Yes`  
  * **Description:** Title of the document request.  
  * **Field:** `employee_id`  
  * **Type:** `List[int]`  
  * **Required:** `Yes`  
  * **Description:** List of employee IDs associated with the document request.  
  * **Field:** `format`  
  * **Type:** `String`  
  * **Required:** `Yes`  
  * **Description:** Format of the document. Possible values: `PDF`, `DOC`, `XLS`.  
  * **Field:** `max_size`  
  * **Type:** `Integer`  
  * **Required:** `No`  
  * **Description:** Maximum size of the document in bytes.  
  * **Field:** `description`  
  * **Type:** `String`  
  * **Required:** `No`  
  * **Description:** Description of the document request.

**Response:**

**Success (201 Created):**

```json
{
  "id": 1,
  "title": "Document Request Title",
  "employee_id": [1, 2, 3],
  "format": "PDF",
  "max_size": 10485760,
  "description": "Description of the document request"
}
```

#### **3\. Update a Document Request**

* **Endpoint:** `PUT /document-request/{id}/`  
* **Description:** Update an existing document request.  
* **Request Method:** `PUT`  
* **URL Parameters:**  
  * `id` (int): ID of the document request.  
* **Request Headers:**  
  * **Content-Type:** `application/json`  
* **Request Body:**  
  * **Field:** `title`  
  * **Type:** `String`  
  * **Required:** `Yes`  
  * **Description:** Title of the document request.  
  * **Field:** `employee_id`  
  * **Type:** `List[int]`  
  * **Required:** `Yes`  
  * **Description:** List of employee IDs associated with the document request.  
  * **Field:** `format`  
  * **Type:** `String`  
  * **Required:** `Yes`  
  * **Description:** Format of the document. Possible values: `PDF`, `DOC`, `XLS`.  
  * **Field:** `max_size`  
  * **Type:** `Integer`  
  * **Required:** `No`  
  * **Description:** Maximum size of the document in bytes.  
  * **Field:** `description`  
  * **Type:** `String`  
  * **Required:** `No`  
  * **Description:** Description of the document request.

**Response:**

**Success (200 OK):**

```json
{
  "id": 1,
  "title": "Updated Document Request Title",
  "employee_id": [1, 2, 3],
  "format": "PDF",
  "max_size": 10485760,
  "description": "Updated description of the document request"
}
```

#### **4\. Delete a Document Request**

* **Endpoint:** `DELETE /document-request/{id}/`  
* **Description:** Delete a document request.  
* **Request Method:** `DELETE`  
* **URL Parameters:**  
  * `id` (int): ID of the document request.

**Response:**

**Success (204 No Content):**

 No content in response.

#### **5\. List Document Requests**

* **Endpoint:** `GET /document-request/`  
* **Description:** Retrieves a list of document requests with optional filters. This API allows you to filter the queryset based on various fields to refine your search results.  
* **Query Parameters:**  
  * employee_id `optional`: Filter by employee ID (e.g., `1`, `2`).  
  * document_request_id `optional`: Filter by document request ID (e.g., `123`).  
  * status `optional`: Filter by the status of the document request (e.g., `pending`, `approved`).  
  * employee_first_name `optional`: Filter by employee's first name (e.g., `John`).  
  * employee_last_name `optional`: Filter by employee's last name (e.g., `Doe`).  
  * is_active `optional`: Filter by employee's active status (`true` or `false`).  
  * gender `optional`: Filter by employee's gender (e.g., `male`, `female`).  
  * job_position_id `optional`: Filter by employee's job position ID.  
  * department_id `optional`: Filter by employee's department ID.  
  * work_type_id `optional`: Filter by employee's work type ID.  
  * employee_type_id `optional`: Filter by employee's type ID.  
  * job_role_id `optional`: Filter by employee's job role ID.  
  * reporting_manager_id `optional`: Filter by employee's reporting manager ID.  
  * company_id `optional`: Filter by employee's company ID.  
  * shift_id `optional`: Filter by employee's shift ID.

**Usage Example:**  
To retrieve document requests for a specific employee:

```
GET /document-request/?employee_id=1
```

To retrieve document requests with a specific status:

```
GET /document-request/?status=pending
```
To retrieve document requests for employees with a specific first name:

```
GET /document-request/?employee_first_name=John
```
To retrieve document requests associated with employees in a specific department:

```
GET /document-request/?department_id=5
```
**Response:**

**Success (200 OK):**

```json
[
  {
    "id": 1,
    "title": "Document Request Title",
    "employee_id": [1, 2, 3],
    "format": "PDF",
    "max_size": 10485760,
    "description": "Description of the document request"
  },
  ...
]
```

**Error Codes:**

* **400 Bad Request:** Invalid input or request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Resource not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

## **Employee Selector API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```
* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```
### **Endpoints**

#### **1.Employee Selector**

* **Endpoint:** `GET /employee-selector/`  
* **Description:** Fetch a list of employees based on the role of the requesting user (employee, manager, admin).  
* **Request Method:** `GET`

**Response:**

**Success (200 OK):**

**2\. Response for an employee:**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "employee_first_name": "John",
      "employee_last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890",
      ...
    }
  ]
}
```

**3\. Response for a manager (including employees reporting to them):**

```json
{
  "count": 3,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "employee_first_name": "John",
      "employee_last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890",
      ...
    },
    {
      "id": 2,
      "employee_first_name": "Jane",
      "employee_last_name": "Smith",
      "email": "jane.smith@example.com",
      "phone": "0987654321",
      ...
    },
    {
      "id": 3,
      "employee_first_name": "Emily",
      "employee_last_name": "Johnson",
      "email": "emily.johnson@example.com",
      "phone": "5678901234",
      ...
    }
  ]
}
```

**4\. Response for an admin (all employees):**

```json
{
  "count": 10,
  "next": "https://YOUR_DOMAIN/api/employee-selector/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "employee_first_name": "John",
      "employee_last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890",
      ...
    },
    ...
  ]
}
```


## **Employee Archive API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```
* **Description:** All endpoints require authentication. Include the `Authorization` header with a valid API key or bearer token to access the endpoints.

### **Base URL**

```
https://YOUR_DOMAIN/api/employee
```
### **Endpoint**

#### **1\. Archive Employee**

* **Endpoint:** `POST /employee-archive/{id}/{is_active}/`  
* **Description:** Archives or unarchives an employee by updating their `is_active` status.  
* **Parameters:**  
  * `id` (path parameter): The unique identifier of the employee.  
  * `is_active` (path parameter): Boolean value indicating whether the employee should be archived (`false`) or unarchived (`true`).  
* **Request Body:** None

**Response:**

**Success (200 OK):**

If the employee can be archived or unarchived:

```json
No content 
```

If the employee cannot be archived (due to related models):



### **Error Codes**

* **400 Bad Request:** Invalid request format.  
* **401 Unauthorized:** Missing or invalid authentication credentials.  
* **404 Not Found:** Employee not found.  
* **500 Internal Server Error:** An unexpected error occurred on the server.

