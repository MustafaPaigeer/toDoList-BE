# Todo list API

Todo list is a CRUD API based on NodeJS, Express and PostgreSQL. It will allow user to create, upadate and delete todo items. All user can create todo items but only the user who owns the todo item can edit or delete it. 

You can register a user account and login to your account. It uses Json Web Token for user authentication.

## Dependencies

* bcryptjs
* cookie-parser
* cors 
* dotenv
* express
* jsonwebtoken 
* pg

## Routes

POST: /user/register | Register new user
POST: /auth/login | authenticate user for login
GET: / | home (List of all tasks)
GET: /task | list of all tasks
POST: /task | Create new tasks
PUT: /task/update | Update an existing task
DELETE: /task/delete | Delete an existing task