# Backend
This is our starter backend app. Backend service that uses `mongoose.js` from MongoDB to store users and passwords, and authenticate.

## Getting Started
Download [Docker](https://docs.docker.com/) and follow installation instructions correspondent to your machine.

Dowload [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) and follow installation instructions correspondent to your machine.

Dowload [MongoDB](https://docs.mongodb.com/manual/installation/) and follow installation instructions correspondent to your machine. You should be able to run command `mongod`.

## Development
### Using Docker
- `yarn install` should install all dependencies
- `docker-compose up --build` should start both backend and MongoDB.

### Using Nodemon or Node
- `yarn install` should install all dependencies
- `mongod` should start the database (wait for message `waiting for connection`), then
- `node index.js` or `nodemon index.js` should start the backend program.

_NOTE:_
In one terminal run `mongod` and in another terminal run `node index.js` or `nodemon index.js`

## ENV variables
Make sure you define these variables in both `.env` and `.env.development` files.
### MongoDB
#### Using Docker
- `DB_HOST = mongodb://mongodb:27017`
#### Using Nodemon or Node
- `DB_HOST = mongodb://localhost:27017`
### Port
- `PORT = 4000`

## db
### mongoose.js
File that makes the URL connection given on the `.env` file. 

## models
### user.js
User schema definition is presented in this file. Schema is a way to represent a user object that contains attributes as defined in the schema.

- User Object:
  - username: string, unique
  - email: string, unique
  - password: string

More about the `user.js` configuration can be found [here](https://medium.com/createdd-notes/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359).

## Routes
### Authentication
#### POST /authentication/signup

* Data params:
  - `username`
  - `email`
  - `password`

* Reponse:
  - Successful: `200`
  - If missing arguments: `400`

## Testing
### Postman
- Select `POST` method
- Address: `http://localhost:4000/authentication/signup/`
- Click Body
- Add a JSON body with username, email, and password params
- Click send, and look at the bottom for response
![image](https://drive.google.com/uc?export=view&id=1YiH06jvbTCctLzNKkCTlkFKOrQpG_Vp2)
- Send again with same params
![image](https://drive.google.com/uc?export=view&id=11UINHIbWlesn_ONJQpiyWJUChkSVfIEv)
- Send again with any of the params to be empty (example: `"username": ""`) and check what happens!
