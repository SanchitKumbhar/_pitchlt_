Sure! Here’s the API documentation for your **POST /review** endpoint based on your code:

---

# Create New Review API

### **Endpoint**

`POST /review`

---

### **Description**

Creates a new review with the specified number of likes and comments.

---

### **Request**

* **Headers:**

  ```
  Content-Type: application/json
  ```

* **Body (JSON):**

  | Field    | Type   | Required | Description                   |
  | -------- | ------ | -------- | ----------------------------- |
  | likes    | Number | Yes      | Number of likes on the review |
  | comments | String | Yes      | Comments text                 |

---

### **Response**

* **Status:** `201 Created`

* **Body:**

  ```json
  {
    "message": "new review created"
  }
  ```

---


