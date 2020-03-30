#Show All User
Returns json data about a All user.

URL

/todos/

Method:

GET

URL Params

Required:

none

Data Params

None

Success Response:

Code: 200
Content: {
  "message": "Read all Success",
  "todos": [
    {
      "id": 1,
      "title": "tugas hari senin pagi",
      "description": "Buat rest api documention",
      "status": false,
      "due_date": "2020-03-30T00:00:00.000Z",
      "createdAt": "2020-03-30T15:36:42.378Z",
      "updatedAt": "2020-03-30T15:36:42.378Z"
    },
    {
      "id": 2,
      "title": "tugas hari senin siang",
      "description": "Buat rest api application ",
      "status": false,
      "due_date": "2020-03-30T00:00:00.000Z",
      "createdAt": "2020-03-30T15:36:42.378Z",
      "updatedAt": "2020-03-30T15:36:42.378Z"
    },
    {
      "id": 3,
      "title": "tugas hari senin malam",
      "description": "Buat rest api together ",
      "status": false,
      "due_date": "2020-04-05T00:00:00.000Z",
      "createdAt": "2020-03-30T15:36:42.378Z",
      "updatedAt": "2020-03-30T15:36:42.378Z"
    },
    {
      "id": 4,
      "title": "tugas hari selasa malam mlam",
      "description": "Buat rest api together ",
      "status": false,
      "due_date": "2020-04-05T00:00:00.000Z",
      "createdAt": "2020-03-30T16:11:44.426Z",
      "updatedAt": "2020-03-30T16:11:44.426Z"
    }
  ]
}

Error Response:

Code: 500 NOT FOUND
Content: { error : "server Error" }



#Show User
Returns json data about a single user.

URL

/todos/:id

Method:

GET

URL Params

Required:

id=[integer]

Data Params

None

Success Response:

Code: 200
Content: {
  "message": "Read by PK Success",
  "todos": {
    "id": 4,
    "title": "tugas hari selasa malam mlam",
    "description": "Buat rest api together ",
    "status": false,
    "due_date": "2020-04-05T00:00:00.000Z",
    "createdAt": "2020-03-30T16:11:44.426Z",
    "updatedAt": "2020-03-30T16:11:44.426Z"
  }
}

Error Response:

Code: 500 NOT FOUND
Content: { error : "server Error" }


#Create User
Create data about a single user.

URL

/todos/

Method:

POST

URL Params

Required:
none

Data Params

"title": string
"description": string
"status": string
"due_date": string

Success Response:

Code: 201
Content: {
  "message": "Data created Success",
  "todos": {
    "id": 10,
    "title": "tugas hari selasa malam pagi",
    "description": "Buat rest api together ",
    "status": false,
    "due_date": "2020-04-05T00:00:00.000Z",
    "updatedAt": "2020-03-30T16:44:15.722Z",
    "createdAt": "2020-03-30T16:44:15.722Z"
  }
}

Error Response:

Code: 400 NOT FOUND
Content: { error : "Validation Errors" }
OR
Code: 500 NOT FOUND
Content: { error : "server Error" }


#Update User
Update a single user data.

URL

/todos/:id

Method:

PUT

URL Params

Required:

id=[integer]

Data Params

"title": string
"description": string
"status": string
"due_date": string

Success Response:

Code: 200
Content: {
  "message": "Updated Success",
  "todos": [
    1
  ]
}

Error Response:

Code: 400 NOT FOUND
Content: { error : "Validation Errors" }
OR
Code: 404 NOT FOUND
Content: { error : "Error not found" }
OR
Code: 500 NOT FOUND
Content: { error : "server Error" }


#Delete User
Update a single user data.

URL

/todos/:id

Method:

DELETE

URL Params

Required:

id=[integer]

Data Params
none

Success Response:

Code: 200
Content: {
  "message": "Delete Success",
  "todos": 1
}

Error Response:

Code: 400 NOT FOUND
Content: { error : "Validation Errors" }
OR
Code: 500 NOT FOUND
Content: { error : "server Error" }