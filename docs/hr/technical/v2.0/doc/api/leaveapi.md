
# **Leave API Documentation**

### **Authentication**

* **Required:** API Key or Bearer Token

**Header:**

```
Authorization: Bearer {token}
```
 
* **Description:** All endpoints require authentication. To access the endpoints, include the `Authorization` header with a valid API key or bearer token.

### **Base URL**

```
https://YOUR_DOMAIN/api/leave
```


### **Endpoints**

## **Get Employee Availabile Leave**

* **Endpoint:** `GET /available-leave/`  
* **Description:** Get available leaves of an employee  
* **Model:** AvailableLeave

**Response:**

**Success (200 OK):**

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
      {
          "id": 1,
          "leave_type_id": {
              "id": 2,
              "name": "Casual Leave",
              "icon": null
          },
          "icon": null,
          "available_days": 1.0,
          "carryforward_days": 1.0,
          "total_leave_days": 2.0
      },
      {
          "id": 2,
          "leave_type_id": {
              "id": 4, 
              "name": "maternity leave",
              "icon": "/media/leave/leave_icon/Untitled.png"
          },
          "icon": "/media/leave/leave_icon/Untitled.png",
          "available_days": 90.0,
          "carryforward_days": 0.0,
          "total_leave_days": 90.0
      }
  ]
}
```

## **Get Employee Self Leave Requests**

* **Endpoint:** `GET /user-request/`  
* **Description:** Get all leave requests of an employee  
* **Model:** LeaveRequest

**Response:**

**Success (200 OK):**

```json
{
  "count": 2,
  "next": "http://example.com/api/leave/user-request/?page=2",
  "previous": null,
  "results": [
      {
          "id": 211,
          "leave_type_id": {
              "id": 2,
              "name": "Casual Leave",
              "icon": null
          },
          "is_active": true,
          "start_date": "2024-08-15",
          "start_date_breakdown": "full_day",
          "end_date": "2024-08-15",
          "end_date_breakdown": "full_day",
          "requested_days": 0.0,
          "leave_clashes_count": 0,
          "status": "requested"
      },
      {
          "id": 210,
          "leave_type_id": {
              "id": 2,
              "name": "Casual Leave",
              "icon": null
          },
          "is_active": true,
          "start_date": "2024-08-08",
          "start_date_breakdown": "full_day",
          "end_date": "2024-08-08",
          "end_date_breakdown": "full_day",
          "requested_days": 1.0,
          "leave_clashes_count": 0,
          "status": "approved"
      }
  ]
}
```

## **Create Employee Self Leave Request**

* **Endpoint:** `POST /user-request/`  
* **Description:** Create a new self-leave request for an employee  
* **Model:** LeaveRequest

**Required Fields:**

* leave_type_id `ForeignKey`: Reference to the leave type.  
* start_date `DateField`: The starting date of the leave period.  
* start_date_breakdown `CharField`: Specifies start as full day or part of the day.  
* description `TextField`: Description or reason for the leave request, max 255 characters.

**Non-Required Fields:**

* end_date `DateField`: The ending date of the leave period is optional.  
* end_date_breakdown `CharField`: Specifies end as full day or part of the day, optional.  
* attachment `FileField`: Optional file attachment related to the leave request.

**Request Body:**

```json
{
  "leave_type_id": 1,
  "start_date": "2024-08-10",
  "start_date_breakdown": "full_day",
  "end_date": "2024-08-10",
  "end_date_breakdown": "full_day",
  "description": "Family emergency leave request",
  "attachment": "leave/leave_attachment/sample_document.pdf"
}
```

**Response:**  
**Success (201 Created):**

```json
{
  "id": 220,
  "leave_type_id": {
      "id": 1,
      "name": "Casual Leave",
      "icon": null
  },
  "is_active": true,
  "start_date": "2024-08-10",
  "start_date_breakdown": "full_day",
  "end_date": "2024-08-10",
  "end_date_breakdown": "full_day",
  "requested_days": 1.0,
  "leave_clashes_count": 0,
  "status": "requested",
  "attachment": "leave/leave_attachment/sample_document.pdf"
}
```

## **Update Employee Self Leave Request**

* **Endpoint:** `PUT /user-request/{leave_request_id}`  
* **Description:** Upadet a self-leave request of an employee  
* **Model:** LeaveRequest

**Required Fields:**

* leave_type_id `ForeignKey`: Reference to the leave type.
* start_date `DateField`: The starting date of the leave period.
* start_date_breakdown `CharField`: Specifies start as full day or part of the day.
* description `TextField`: Description or reason for the leave request, max 255 characters.

**Non-Required Fields:**

* end_date `DateField`: The ending date of the leave period is optional.
* end_date_breakdown `CharField`: Specifies end as full day or part of the day, optional.
* attachment `FileField`: Optional file attachment related to the leave request.

**Request Body:**

```json
{
  "leave_type_id": 1,
  "start_date": "2024-08-10",
  "start_date_breakdown": "full_day",
  "end_date": "2024-08-10",
  "end_date_breakdown": "full_day",
  "description": "Family emergency leave request",
  "attachment": "leave/leave_attachment/sample_document.pdf"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 220,
  "leave_type_id": {
      "id": 1,
      "name": "Casual Leave",
      "icon": null
  },
  "is_active": true,
  "start_date": "2024-08-10",
  "start_date_breakdown": "full_day",
  "end_date": "2024-08-10",
  "end_date_breakdown": "full_day",
  "requested_days": 1.0,
  "leave_clashes_count": 0,
  "status": "requested",
  "attachment": "leave/leave_attachment/sample_document.pdf"
}
```

## **Delete Employee Self Leave Request**

* **Endpoint:** `DELETE  /user-request/{leave\_request\_id} ` 
* **Description:** Delete a self-leave request of an employee  
* **Model:** LeaveRequest

**Response:**

**Success (200 OK):**

```json
{"message": "Leave request deleted successfully.."}
``` 

## **Get All Leave Types**

* **Endpoint:** `GET  /leave-type/`  
* **Description:** Get all Leave Types  
* **Model:** LeaveType

**Response:**

**Success (200 OK):**

```json
{
  "count": 4,
  "next": null,
  "previous": null,
  "results": [
      {
          "id": 4,
          "name": "maternity leave",
          "icon": "/media/leave/leave_icon/Untitled.png"
      },
      {
          "id": 3,
          "name": "Sick Leave",
          "icon": "/media/leave/leave_icon/Untitled.jpeg"
      },
      {
          "id": 2,
          "name": "Casual Leave",
          "icon": null
      },
      {
          "id": 1,
          "name": "Compensatory Leave",
          "icon": "/media/leave/leave_icon/images.jpeg"
      }
  ]
}

```

## **Create a New Leave Types**

* **Endpoint:** `POST /leave-type/  `
* **Description:** Create a new leave type   
* **Model:** LeaveType

**Required Fields**

* name: `CharField` - The name of the leave type.

**Non-Required Fields**

* payment: `CharField` - Specifies if the leave is paid or unpaid. Options are defined in the `PAYMENT` choices.  
* period_in: `CharField` - The time period for the leave, such as day, week, month. Options are defined in the `TIME_PERIOD` choices.  
* total_days: `IntegerField` - Total number of days available for this leave type.  
* carryforward_type: `CharField` - Indicates if the leave can be carried forward. Options are defined in the `CARRYFORWARD_TYPE` choices.  
* exclude_company_leave: `CharField` - Specifies if company-wide leaves are excluded. Options are defined in the `CHOICES`.  
* exclude_holiday: `CharField` - Specifies if holidays are excluded from the leave. Options are defined in the `CHOICES`.  
* company_id: `ForeignKey` - Reference to the associated company. It’s a foreign key to the `Company` model.  
* icon: `ImageField` - An optional icon representing the leave type. Images are uploaded to the "leave/leave\_icon" directory.  
* color: `CharField` - An optional color code for the leave type.  
* count: `IntegerField` - Number of leave counts. The default is 1\.  
* reset: `BooleanField` - Indicates if the leave resets after a period.  
* is_encashable: `BooleanField` - Specifies if the leave is encashable.  
* reset_based: `CharField` - Specifies the basis for leave reset. Options are defined in the `RESET_BASED` choices.  
* reset_month: `CharField` - Month of the year for the reset. Options are defined in the `MONTH's` choices.  
* reset_day: `CharField` - Day of the month for the reset. Options are defined in the `DAYS` choices.  
* reset_weekend: `CharField` - Day of the week for the reset. Options are defined in the `WEEK_DAYS` choices.  
* carryforward_max: `FloatField` - Maximum number of leave days that can be carried forward.  
* carryforward_expire_in: `IntegerField` - Period after which carried forward leaves expire.  
* carryforward_expire_period: `CharField` - Specifies the period unit for carryforward expiry. Options are defined in the `TIME_PERIOD` choices.  
* require_approval: `CharField` - Indicates if leave requires approval. Options are defined in the `CHOICES`.  
* require_attachment: `CharField` - Specifies if an attachment is required when applying for leave. Options are defined in the `CHOICES`.

**Request Body:**

```json
{
  "name": "leave"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 5,
  "created_at": "2024-08-07T11:19:32.114454+05:30",
  "is_active": false,
  "icon": null,
  "name": "leave",
  "color": null,
  "payment": "unpaid",
  "count": 1,
  "period_in": "day",
  "total_days": 1,
  "reset": false,
  "is_encashable": false,
  "reset_based": null,
  "reset_month": "",
  "reset_day": null,
  "reset_weekend": null,
  "carryforward_type": "no carryforward",
  "carryforward_max": null,
  "carryforward_expire_in": null,
  "carryforward_expire_period": null,
  "require_approval": "yes",
  "require_attachment": "no",
  "exclude_company_leave": "no",
  "exclude_holiday": "no",
  "is_compensatory_leave": false,
  "created_by": 1,
  "modified_by": 1,
  "company_id": null
}

```

## **Update an Existing Leave Types**

* **Endpoint:** `PUT /leave-type/{leave\_type\_id}  `
* **Description:** Update an existing leave type   
* **Model:** LeaveType

**Required Fields**

* name: `CharField` - The name of the leave type.

**Non-Required Fields**

* payment: `CharField` - Specifies if the leave is paid or unpaid. Options are defined in the `PAYMENT` choices.  
* period_in: `CharField` - The time period for the leave, such as day, week, month. Options are defined in the `TIME_PERIOD` choices.  
* total_days: `IntegerField` - Total number of days available for this leave type.  
* carryforward_type: `CharField` - Indicates if the leave can be carried forward. Options are defined in the `CARRYFORWARD_TYPE` choices.  
* exclude_company_leave: `CharField` - Specifies if company-wide leaves are excluded. Options are defined in the `CHOICES`.  
* exclude_holiday: `CharField`- Specifies if holidays are excluded from the leave. Options are defined in the `CHOICES`.  
* company_id: `ForeignKey` - Reference to the associated company. It’s a foreign key to the `Company` model.  
* icon: `ImageField` - An optional icon representing the leave type. Images are uploaded to the "leave/leave\_icon" directory.  
* color: `CharField` - An optional color code for the leave type.  
* count: `IntegerField` - Number of leave counts. The default is 1\.  
* reset: `BooleanField` - Indicates if the leave resets after a period.  
* is_encashable: `BooleanField` - Specifies if the leave is encashable.  
* reset_based: `CharField` - Specifies the basis for leave reset. Options are defined in the `RESET_BASED` choices.  
* reset_month: `CharField` - Month of the year for the reset. Options are defined in the `MONTH's` choices.  
* reset_day: `CharField` - Day of the month for the reset. Options are defined in the `DAYS` choices.  
* reset_weekend: `CharField` - Day of the week for the reset. Options are defined in the `WEEK_DAYS` choices.  
* carryforward_max: `FloatField` - Maximum number of leave days that can be carried forward.  
* carryforward_expire_in: `IntegerField` - Period after which carried forward leaves expire.  
* carryforward_expire_period: `CharField` - Specifies the period unit for carryforward expiry. Options are defined in the `TIME_PERIOD` choices.  
* require_approval: `CharField` - Indicates if leave requires approval. Options are defined in the `CHOICES`.  
* require_attachment: `CharField` - Specifies if an attachment is required when applying for leave. Options are defined in the `CHOICES`.

**Request Body:**

```json
{
  "name": "leave"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 5,
  "created_at": "2024-08-07T11:19:32.114454+05:30",
  "is_active": false,
  "icon": null,
  "name": "leave",
  "color": null,
  "payment": "unpaid",
  "count": 1,
  "period_in": "day",
  "total_days": 1,
  "reset": false,
  "is_encashable": false,
  "reset_based": null,
  "reset_month": "",
  "reset_day": null,
  "reset_weekend": null,
  "carryforward_type": "no carryforward",
  "carryforward_max": null,
  "carryforward_expire_in": null,
  "carryforward_expire_period": null,
  "require_approval": "yes",
  "require_attachment": "no",
  "exclude_company_leave": "no",
  "exclude_holiday": "no",
  "is_compensatory_leave": false,
  "created_by": 1,
  "modified_by": 1,
  "company_id": null
}
```

## **Delete an Existing Leave Types**

* **Endpoint:** DELETE /leave-type/{leave\_type\_id}  
* **Description:** Delete an existing leave type   
* **Model:** LeaveType

**Response:**

**Success (201 Created):**

```json
{}
```

## **Get Employee allocation Leave Requests**

* **Endpoint:** `GET /allocation-request/`  
* **Description:** Get all employees allocation   
* **Model:** LeaveAllocationRequest

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
          "employee_id": {
              "id": 1,
              "full_name": "Adam Luis",
              "employee_profile": null,
              "badge_id": null
          },
          "leave_type_id": {
              "id": 1,
              "name": "Compensatory Leave Type",
              "icon": null
          },
          "created_by": {
              "id": 1,
              "full_name": "",
              "employee_profile": null,
              "badge_id": null
          },
          "is_active": true,
          "requested_days": 20.0,
          "description": "demo",
          "attachment": null,
          "status": "requested",
          "modified_by": 1
      }
  ]
}
```

## **Create  Employee Leave Allocation Requests**

* **Endpoint:** `POST /allocation-request/`  
* **Description:** Create all leave allocation requests of an employee  
* **Model:** LeaveAllocationRequest

**Required Fields**

* leave_type_id: `ForeignKey` to `LeaveType`,  Indicates the type of leave requested.  
* employee_id: `ForeignKey` to `Employee`, References the employee requesting the leave.  
* description: `TextField` \- Provides details about the leave request.

**Non-required Fields**

* requested_days: `FloatField` \- The number of leave days requested.  
* requested_date: `DateField`(default=timezone.now) \- The date when the allocation was requested.  
* attachment: `FileField` \- File attachment related to the leave request.

**RequestBody:**

```json
{
  "leave_type_id": 1,
  "employee_id": 1,
  "requested_days": 10,
  "description": "requesting for leave"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 2,
  "employee_id": {
      "id": 1,
      "full_name": "Adam Luis",
      "employee_profile": null,
      "badge_id": null
  },
  "leave_type_id": {
      "id": 1,
      "name": "Compensatory Leave Type",
      "icon": null
  },
  "created_by": {
      "id": 1,
      "full_name": "",
      "employee_profile": null,
      "badge_id": null
  },
  "is_active": true,
  "requested_days": 10.0,
  "description": "requesting for leave",
  "attachment": null,
  "status": "requested",
  "modified_by": 1
}
```

## **Update Employee Leave Allocation Requests**

* **Endpoint:** `PUT /allocation-request/{allocation_request_id}/`  
* **Description:** update a leave allocation request of an employee if the request is in requested state  
* **Model:** LeaveAllocationRequests 

**Required Fields**

* leave_type_id: `ForeignKey` to `LeaveType`,  Indicates the type of leave requested.  
* employee_id: `ForeignKey` to `Employee`, References the employee requesting the leave.  
* description: `TextField` \- Provides details about the leave request.

**Non-required Fields**

* requested_days: `FloatField` \- The number of leave days requested.  
* requested_date: `DateField`(default=timezone.now) \- The date when the allocation was requested.  
* attachment: `FileField` \- File attachment related to the leave request.

**RequestBody:**

```json
{
  "leave_type_id": 1,
  "employee_id": 1,
  "requested_days": 10,
  "description": "requesting for leave"
}
```
**Response:**

**Success (201 Created):**

```json
{
  "id": 2,
  "employee_id": {
      "id": 1,
      "full_name": "Adam Luis",
      "employee_profile": null,
      "badge_id": null
  },
  "leave_type_id": {
      "id": 1,
      "name": "Compensatory Leave Type",
      "icon": null
  },
  "created_by": {
      "id": 1,
      "full_name": "",
      "employee_profile": null,
      "badge_id": null
  },
  "is_active": true,
  "requested_days": 10.0,
  "description": "requesting for leave",
  "attachment": null,
  "status": "requested",
  "modified_by": 1
}
```

## **Delete Employee Leave Allocation Requests**

* **Endpoint:** `DELETE /allocation-request/{allocation_request_id}/`  
* **Description:** Delete a leave allocation request of an employee if the request is in the requested state  
* **Model:** LeaveAllocationRequests 

**Response:**

**Success (200 OK):**
```json
{}
```

## **Get all Employee Assigned Leaves**

* **Endpoint:** `GET /assign-leave/`  
* **Description:** Get all employees assigned leave types with their count  
* **Model:** LeaveAllocationRequests 

**Response:**

**Success (200 OK):**

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
      {
          "id": 152,
          "employee_id": {
              "id": 49,
              "full_name": "Zoey Watson",
              "employee_profile": null,
              "badge_id": "#PEP55"
          },
          "leave_type_id": {
              "id": 2,
              "name": "Casual Leave",
              "icon": null
          },
          "created_at": "2024-05-22T16:05:15.743941+05:30",
          "is_active": true,
          "available_days": 1.0,
          "carryforward_days": 0.0,
          "total_leave_days": 1.0,
          "assigned_date": "2024-05-22",
          "created_by": 1,
          "modified_by": 1
      },
      {
          "id": 151,
          "employee_id": {
              "id": 49,
              "full_name": "Zoey Watson",
              "employee_profile": null,
              "badge_id": "#PEP55"
          },
          "leave_type_id": {
              "id": 3,
              "name": "Sick Leave",
              "icon": null
          },
          "created_at": "2024-05-22T16:05:15.685968+05:30",
          "is_active": true,
          "available_days": 10.0,
          "carryforward_days": 0.0,
          "total_leave_days": 10.0,
          "assigned_date": "2024-05-22",
          "created_by": 1,
          "modified_by": 1
      }
  ]
}
```

## **Create an Employee Assigned Leaves**

* **Endpoint:** `POST /assign-leave/`  
* **Description:** Create or assign leave types to all employees   
* **Model:** AvailableLeave

**Required Fields**

* leave_type_id: `ForeignKey` to `LeaveType`,  Indicates the type of leave assigning.  
* employee_id: `ForeignKey` to `Employee`, References the employee to assign the leave type.

**Request Body:**

```json
{
  "leave_type_ids":[1,2,3,4],
  "employee_ids": [1,2,3,4]
}
```

**Response:**

**Success (201 Created):**
```json
{}
```

## **Update an Employee Available Leave**

* **Endpoint:** `PUT /assign-leave/{available_leave_id}/`  
* **Description:** Update available days of assigned leave type of an employee   
* **Model:** AvailableLeave

**Required Fields**

* availble_days: `FloatField` - Indicates the count of days.

**Request Body:**

```json
{
  "available_days": 10
}
```

**Response:**

**Success (201 Created):**

```json
{}
```

## **Delete an Employee Assigned Leave Type**

* **Endpoint:** `DELETE /assign-leave/{available_leave_id}/`  
* **Description:** Delete the assigned leave type of an employee  
* **Model:** AvailableLeave

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Get all Employee Leave Request**

* **Endpoint:** `GET /request/`  
* **Description:** Get all employee leave requests  
* **Model:** LeaveRequest

**Response:**

**Success (200 OK ):**

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
      {
          "id": 13,
          "employee_id": {
              "id": 66,
              "full_name": "Jonathan Gray",
              "employee_profile": null,
              "badge_id": "#PEP72"
          },
          "leave_type_id": {
              "id": 2,
              "name": "Casual Leave",
              "icon": null
          },
          "multiple_approve": null,
          "is_active": true,
          "start_date": "2024-05-29",
          "start_date_breakdown": "full_day",
          "end_date": "2024-05-29",
          "end_date_breakdown": "full_day",
          "requested_days": 1.0,
          "leave_clashes_count": 0,
          "status": "requested",
          "modified_by": 1
      }
  ]
}
```

## **Create a Employee Leave Request**

* **Endpoint:** `POST /request/`  
* **Description:** Create a new employee leave request  
* **Model:** LeaveRequest

**Required Fields:**

* leave_type_id `ForeignKey`: Reference to the leave type.  
* employee_id `ForeignKey`: Reference to the employee  
* start_date `DateField`: The starting date of the leave period.  
* start_date_breakdown `CharField`: Specifies start as full day or part of the day.  
* description `TextField`: Description or reason for the leave request, max 255 characters.

**Non-Required Fields:**

* end_date `DateField`: The ending date of the leave period is optional.  
* end_date_breakdown `CharField`: Specifies end as full day or part of the day, optional.  
* attachment `FileField`: Optional file attachment related to the leave request.

**Request Body:**

```json
{
  "leave_type_id": 1,
  "employee_id":1,
  "start_date": "2024-08-10",
  "start_date_breakdown": "full_day",
  "end_date": "2024-08-10",
  "end_date_breakdown": "full_day",
  "description": "Family emergency leave request",
  "attachment": "leave/leave_attachment/sample_document.pdf"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 220,
  "leave_type_id": {
      "id": 1,
      "name": "Casual Leave",
      "icon": null
  },
  "employee_id": {
        "id": 66,
        "full_name": "Jonathan Gray",
        "employee_profile": null,
        "badge_id": "#PEP72"
  },

  "is_active": true,
  "start_date": "2024-08-10",
  "start_date_breakdown": "full_day",
  "end_date": "2024-08-10",
  "end_date_breakdown": "full_day",
  "requested_days": 1.0,
  "leave_clashes_count": 0,
  "status": "requested",
  "attachment": "leave/leave_attachment/sample_document.pdf"
}
```

## **Update an Employee Leave Request**

* **Endpoint:** `PUT /request/{leave_request_id}/`  
* **Description:** Update an existing employee leave request  
* **Model:** LeaveRequest

**Required Fields:**

* leave_type_id `ForeignKey`: Reference to the leave type.  
* employee_id `ForeignKey`: Reference to the employee  
* start_date `DateField`: The starting date of the leave period.  
* start_date_breakdown `CharField`: Specifies start as full day or part of the day.  
* description `TextField`: Description or reason for the leave request, max 255 characters.

**Non-Required Fields:**

* end_date `DateField`: The ending date of the leave period is optional.  
* end_date_breakdown `CharField`: Specifies end as full day or part of the day, optional.  
* attachment `FileField`: Optional file attachment related to the leave request.

**Request Body:**

```json
{
  "leave_type_id": 1,
  "employee_id":1,
  "start_date": "2024-08-10",
  "start_date_breakdown": "full_day",
  "end_date": "2024-08-10",
  "end_date_breakdown": "full_day",
  "description": "Family emergency leave request",
  "attachment": "leave/leave_attachment/sample_document.pdf"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 220,
  "leave_type_id": {
      "id": 1,
      "name": "Casual Leave",
      "icon": null
  },
  "employee_id": {
        "id": 66,
        "full_name": "Jonathan Gray",
        "employee_profile": null,
        "badge_id": "#PEP72"
  },

  "is_active": true,
  "start_date": "2024-08-10",
  "start_date_breakdown": "full_day",
  "end_date": "2024-08-10",
  "end_date_breakdown": "full_day",
  "requested_days": 1.0,
  "leave_clashes_count": 0,
  "status": "requested",
  "attachment": "leave/leave_attachment/sample_document.pdf"
}
```

## **Delete Employee Leave Request**

* **Endpoint:** `Delete /request/{leave_request_id}/`  
* **Description:** Delete an existing employee leave request if its in requested state  
* **Model:** LeaveRequest

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Get all Company Leaves**

* **Endpoint:** `GET /company-leave/`  
* **Description:** Get all company leaves  
* **Model:** CompanyLeave 

**Response:**

**Success (200 OK):**

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
      {
          "id": 3,
          "created_at": "2024-05-22T12:59:56.278414+05:30",
          "is_active": true,
          "based_on_week": "3",
          "based_on_week_day": "5",
          "created_by": 1,
          "modified_by": 1
      },
      {
          "id": 2,
          "created_at": "2024-05-22T12:59:48.133250+05:30",
          "is_active": true,
          "based_on_week": "1",
          "based_on_week_day": "5",
          "created_by": 1,
          "modified_by": 1
      },

  ]
}
```

## **Create a new  Company Leaves**

* **Endpoint:** `POST /company-leave/`  
* **Description:** Create a new company leave  
* **Model:** CompanyLeave 

**Required Fields:**

* based_on_week `CharField` - Options are defined in the `WEEK` choices.  
* Based_on_week_day `CharField` - Day of the week for the reset. Options are defined in the `WEEK_DAYS` choices.

**Request Body:**

```json
{
  "based_on_week": 1,
  "based_on_week_day": 2
}
```

**Response:**

**Success (200 OK ):**

```json
{
  "id": 4,
  "created_at": "2024-08-08T15:54:11.123719+05:30",
  "is_active": true,
  "based_on_week": "1",
  "based_on_week_day": "2",
  "created_by": 1,
  "modified_by": 1
}
```

## **Update an Existing Company Leaves**

* **Endpoint:** `PUT /company-leave/{company_leave_id}/`  
* **Description:** Create a new company leave  
* **Model:** CompanyLeave 

**Required Fields:**

* based_on_week `CharField` - Options are defined in the `WEEK` choices.  
* Based_on_week_day `CharField` - Day of the week for the reset. Options are defined in the `WEEK_DAYS` choices.

**Request Body:**

```json
{
  "based_on_week": 1,
  "based_on_week_day": 2
}
```

**Response:**

**Success (200 OK ):**

```json
{
  "id": 4,
  "created_at": "2024-08-08T15:54:11.123719+05:30",
  "is_active": true,
  "based_on_week": "1",
  "based_on_week_day": "2",
  "created_by": 1,
  "modified_by": 1
}
```

## **Delete Company Leaves**

* **Endpoint:** `Delete /company-leave/{company_leave_id}/`  
* **Description:** Delete an existing company leave  
* **Model:** CompanyLeave

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Get all Company Holidays**

* **Endpoint:** `GET /holiday/`  
* **Description:** Get all company holidays  
* **Model:** Holiday 

**Response:**

**Success (200 OK):**

```json
{
  "count": 11,
  "next": null,
  "previous": null,
  "results": [
      {
          "id": 11,
          "created_at": "2024-05-22T12:59:16.557257+05:30",
          "is_active": true,
          "name": "Christmas",
          "start_date": "2024-12-25",
          "end_date": "2024-12-25",
          "recurring": true,
          "created_by": 1,
          "modified_by": 1
      },
    ]
}
```

## **Create a New Company Holidays**

* **Endpoint:** `POST /holiday/`  
* **Description:** Create a new company holiday  
* **Model:** Holiday 

**Required Fields:**

* name `CharField` - Indicates the name of the holiday.  
* start_date `DateField`- The starting date of the leave period.

**Non-Required Fields:**

* end_date `DateField` - The ending date of the leave period is optional.  
* recurring `Boolean` - indicates whether the holiday has been repeated.

**Request Body:**

```json
{
  "name": "demo",
  "start_date": "2024-05-20"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 12,
  "created_at": "2024-08-09T10:08:42.759448+05:30",
  "is_active": true,
  "name": "demo",
  "start_date": "2024-05-20",
  "end_date": null,
  "recurring": false,
  "created_by": 1,
  "modified_by": 1
}
```

## **Update Company Holidays**

* **Endpoint:** `PUT /holiday/{holiday_id}/`  
* **Description:** Update an existing company holiday  
* **Model:** Holiday 

**Required Fields:**

* name `CharField` - Indicates the name of the holiday.  
* start_date `DateField` - The starting date of the leave period.

**Non-Required Fields:**

* end_date `DateField` - The ending date of the leave period is optional.  
* recurring `Boolean` - indicates whether the holiday has been repeated.

**Request Body:**

```json
{
  "name": "demo",
  "start_date": "2024-05-20"
}
```

**Response:**

**Success (201 Created):**

```json
{
  "id": 12,
  "created_at": "2024-08-09T10:08:42.759448+05:30",
  "is_active": true,
  "name": "demo",
  "start_date": "2024-05-20",
  "end_date": null,
  "recurring": false,
  "created_by": 1,
  "modified_by": 1
}
```

## **Delete Company Holidays**

* **Endpoint:** `Delete /holiday/{holiday_id}/`  
* **Description:** Delete an existing company holiday  
* **Model:** Holiday 

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Approve Leave Request**

* **Endpoint:** `PUT /approve/{leave_request_id}/`  
* **Description:** Approve a leave request if the request is in the requested state.  
* **Model:** LeaveRequest

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Reject Leave Request**

* **Endpoint:** `PUT /reject/{leave_request_id}/`  
* **Description:** Reject a leave request if the request is not rejected state.  
* **Model:** LeaveRequest

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Cancel Leave Request**

* **Endpoint:** `PUT /cancel/{leave_request_id}/`  
* **Description:** Employee can cancel a leave request that is in an approved state.  
* **Model:** LeaveRequest

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Approve Leave Allocation Request**

* **Endpoint:** `PUT /allocation-approve/{allocation_request_id}/`  
* **Description:** Approve employee leave allocation request if the request is in the requested state.  
* **Model:** LeaveAllocationRequest

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Reject Leave Allocation Request**

* **Endpoint:** `PUT /allocation-reject/{allocation_request_id}/`  
* **Description:** Reject employee leave allocation request if the request is not in a rejected state.  
* **Model:** LeaveAllocationRequest

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Leave Request Bulk Approve**

* **Endpoint:** `PUT /request-bulk-action/`  
* **Description:** Approve bulk leave request.  
* **Model:** LeaveAllocationRequest

**Required Fields:**

* leave_request_id `ManytoManyField` - Leave request IDs that need to be approved.

**Request Body:**

```json
{
  "leave_request_id": [1,3]
}
```

**Response:**

**Success (200 OK ):**

```json
{}
```

## **Leave Request Bulk Approve**

* **Endpoint:** `DELETE /request-bulk-action/`  
* **Description:** Delete bulk leave request.  
* **Model:** LeaveAllocationRequest

**Response:**

**Success (200 OK ):**

```json
{}
```

