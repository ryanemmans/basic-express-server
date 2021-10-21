# Basic Express Server

Created by Ryan Emmans

## Installation

None currently.

## Summary of Problem Domain

### *Phase 1 Requirements*

From a business requirements standpoint, we will be building a basic Express server using best practices, including server modularization, use of middleware, and tests.

### *Phase 2 Requirements*

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard.

## Links to application deployment

- [Heroku Main Branch](https://ryanemmans-basic-express.herokuapp.com/)
- [GitHub Actions](https://github.com/ryanemmans/basic-express-server/actions)
- [Pull Requests](https://github.com/ryanemmans/basic-express-server/pulls?q=is%3Apr+is%3Aclosed)

## UML

![Basic API Server UML](./img/basic-api-server.png)

![Basic Express Server UML](./img/basic-express-server.png)

## Routes

### **Add a Record**

- CRUD Operation: Create
- REST Method: POST
- Path: /food
- Input: JSON Object in the Request Body
- Returns: The record that was added to the database.
  - You must generate an ID and attach it to the object.
  - You should verify that only the fields you define get saved as a record.

### **Get All Records**

- CRUD Operation: Read
- REST Method: GET
- Path: /food
- Returns: An array of objects, each object being one entry from your database.

### **Get One Record**

- CRUD Operation: Read
- REST Method: GET
- Path: /food/1
- Returns: The object from the database, which has the id matching that which is in the path.

### **Update A Record**

- CRUD Operation: Update
- REST Method: PUT
- Path: /food/1
- Input: JSON Object in the Request Body
- Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
  - You should verify that only the fields you define get saved as a record.

### **Delete A Record**

- CRUD Operation: Destroy
- REST Method: DELETE
- Path: /food/1
- Returns: The record from the database as it exists after you delete it (i.e. null).

## Notes
