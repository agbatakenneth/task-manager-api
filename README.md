# Task Manager API

A simple RESTful API for managing tasks, built with Node.js and Express.

This project demonstrates a professional Git branching workflow using:

- `main`
- `develop`
- `feature/*`
- `release/*`

## Features

- Create a task
- Retrieve all tasks
- Retrieve a task by ID
- Update task completion status
- Task priority support
- Priority validation
- Default task priority
- Automated testing with Jest

## Task Priority

Tasks support the following priority levels:

- `LOW`
- `MEDIUM`
- `HIGH`

If no priority is provided, the application automatically assigns:

```text
MEDIUM

Invalid priority values are rejected.

Example:
{
  "message": "Priority must be LOW, MEDIUM, or HIGH"
}

Technologies Used
Node.js
Express.js
Jest
Supertest
Git
GitHub

Project Structure
task-manager-api/
│
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── task.test.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

Installation

Clone the repository:
git clone https://github.com/agbatakenneth/task-manager-api.git


Navigate into the project directory:

cd task-manager-api

Install dependencies:

npm install

Running the Application

Start the application:

npm start

The API runs on:

http://localhost:3000

Health Check
Request

curl http://localhost:3000/health

Response

{
  "status": "UP",
  "service": "task-manager-api"
}

Create a Task
Request

curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{
  "title": "Learn AWS DevOps",
  "description": "Prepare for AWS DevOps Professional",
  "priority": "HIGH"
}'

Example Response

{
  "id": 1,
  "title": "Learn AWS DevOps",
  "description": "Prepare for AWS DevOps Professional",
  "priority": "HIGH",
  "completed": false
}

Get All Tasks
Request

curl http://localhost:3000/api/tasks

Running Tests

Run the automated tests:

npm test

Current test coverage includes:

Health check
Creating tasks
Retrieving tasks
Missing title validation
HIGH priority tasks
Default MEDIUM priority
Invalid priority validation
Git Branching Workflow

This project follows the workflow:

main
 │
 └── develop
       │
       ├── feature/add-task-priority
       │           │
       │           ▼
       │      Pull Request
       │           │
       │           ▼
       │        develop
       │
       └── release/v1.1.0
                   │
                   ▼
                  main


Feature Development Process

Create feature branch
        ↓
Develop feature
        ↓
Run automated tests
        ↓
Review changes
        ↓
Stage changes
        ↓
Commit
        ↓
Push branch
        ↓
Create Pull Request
        ↓
Merge into develop
        ↓
Delete feature branch

Version

Current release:

v1.1.0

Author

Kenneth Agbata

License

This project is for learning and portfolio demonstration purposes.
