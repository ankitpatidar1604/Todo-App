const express = require('express');
const Router = express.Router(); 
const todo = require("../Controller/Todo")

Router.get("/",todo.homeController);

Router.get("/add-todo",todo.addTodoFromController);

Router.get("/update-todo",todo.updateTodoFromController);

Router.get("/delete-todo",todo.deleteTodoFromController);

Router.post("/add-todo",todo.addTodoController);

Router.post("/update-todo/:id",todo.updateTodoController);

Router.get("/confirm-delete",todo.deleteTodoController);

module.exports = Router;