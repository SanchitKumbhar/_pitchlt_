Sure! Here's a simple API documentation for your **POST /post** endpoint based on the code you shared:

---

# Create New Post API

### **Endpoint**

`POST /post`

---

### **Description**

Creates a new post with optional media files (`image` and/or `pitchDeck`), and other fields `type` and `review`.

---

### **Request**

* **Headers:**

  ```
  Content-Type: multipart/form-data
  ```

* **Body (form-data):**

  | Field     | Type         | Required | Description                                      |
  | --------- | ------------ | -------- | ------------------------------------------------ |
  | type      | String       | Yes      | Type of the post                                 |
  | review    | String       | Yes      | Review text for the post                         |
  | image     | File (array) | No       | Video file, accessed as `req.files.image[0]`     |
  | pitchDeck | File (array) | No       | Photo file, accessed as `req.files.pitchDeck[0]` |

---

### **Response**

* **Status:** `201 Created`

* **Body:**

  ```json
  {
    "message": "created new post"
  }
  ```

---

### **Notes**

* Media files, if present, will be saved with filenames prefixed by the current timestamp under the `/media` directory.
* If media files are not provided, the corresponding fields will be set to `null`.
* This API uses `express-async-handler` to handle async errors.

---

If you want, I can also help you with a Swagger/OpenAPI spec for this! Would you like that?
