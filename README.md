# Projeto GymPoint

Aplicação **Gympoint** para avaliação final do GoStack.

```
# Clone repository
$ git clone https://github.com/rvieceli/gympoint.git

$ cd gympoint
```

## Backend

### Serviços

1. Users
   - **POST** Create an user
   - **PUT** Update user except password **_#authRequired_**
2. Password
   - **PUT** Update: only password **_#authRequired_**
3. Forgot Password
   - **POST** Create token and sending e-mail with link to reset
   - **PUT** Update
4. Session
   - **POST** Create: login returns JWT token
5. Students **_#authRequired_**
   - **GET** List all with pagination
   - **GET** Show one
   - **POST** Create
   - **PUT** Update
   - **DELETE** Delete
6. Plans **_#authRequired_**
   - **GET** List all with pagination
   - **GET** Show one
   - **POST** Create
   - **PUT** Update
   - **DELETE** Delete
7. Registrations **_#authRequired_**
   - **GET** List all with pagination
   - **GET** Show one
   - **POST** Create
   - **PUT** Update
   - **DELETE** Delete
8. Student Login
   - **POST** Required a token (send to email)
   - **GET** Login
9. Chekin
   - **GET** List all with pagination
   - **POST** Create
10. Help orders - Questions
    - **GET** List all of a student with pagination
    - **POST** Create
11. Help orders - Answer **_#authRequired_**
    - **GET** List all non answered questions
    - **POST** Create an answer
12. Statistics
    - **GET** Get system statistics

### Como usar

```
# Enter repository folder
$ cd backend

# Install dependencies
$ yarn

# Create .env based on .env.example
- NODE_ENV
- APP_URL
- APP_SECRET
- DB
- REDIS
- MAIL

# Run migrate to your databse
$ yarn sequelize db:migrate

# Seed teste informations
$ yarn sequelize db:seed:all

# Run app server
$ yarn dev

# Run queue
$ yarn queue

```

## Frontend

### Como usar

```
# Enter repository folder
$ cd frontend

# Install dependencies
$ yarn

# Create .env based on .env.example
- REACT_APP_BASE_URL=http://localhost:3000
- REACT_APP_API_URL=http://localhost:3333

# Run application
$ yarn start

```

## Mobile

### Como usar

```
# Enter repository folder
$ cd mobile

# Install dependencies
$ yarn

# Create .env based on .env.example
# open android or ios emulator

# Run application
$ npx react-native run-android
$ npx react-native run-ios

```

- see `/mobile/src/config/reactotronConfig.js` to change the host of Reactotron
- see `/mobile/src/services/api.js` to change the API url

_Tested on Android **only**_
