To-Do List App

    A full-stack task management application built with React, Node.js, Express, and PostgreSQL.
    It allows users to create, read, update, and delete tasks with a responsive interface and a RESTful backend.

Features

    Add, edit, and delete tasks
    View all tasks in a clean and responsive UI
    Persistent data storage using PostgreSQL
    Built with React Context API for global state management
    RESTful API built with Express
    Modern styling with Tailwind CSS

Tech Stack

Frontend:React, Context API, Tailwind CSS

Backend:Node.js, Express, PostgreSQL

Tools:Git, VS Code, Postman

git clone https://github.com/Tsonkov7/ToDo-list
cd ToDo-List

cd server
npm install

.env
PORT=5000
PG_USER=postgres
PG_PASSWORD=yourpassword
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=perntodo

nodemon index.js

sql
CREATE DATABASE perntodo;

CREATE TABLE todo (
todo_id SERIAL PRIMARY KEY,
description VARCHAR(255),
created_at TIMESTAMP DEFAULT NOW()
);

cd client
npm install
npm run dev
