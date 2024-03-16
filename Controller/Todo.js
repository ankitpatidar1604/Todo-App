const moment = require('moment');
const Todo = require("../models/Todo");

const homeController = async (req,res,next)=>{
    try{
        const todos = await Todo.find({}).sort({createdAt:-1});
        res.locals.moment = moment;
        res.render("index", {title:"List Todo", todos })
    }catch(err){
          res.status(500).send(err.msg);
    }

}

const addTodoFromController = (req,res,next)=>{
    try{
         
          res.render("newTodo",{title:"Add todo"});
    }catch(err){
        res.status(500).send(err.message);
    }
}

const updateTodoFromController =async (req,res,next)=>{
    try{
        const {id} = req.query;
        const todo = await Todo.findById(id);
        res.render("updateTodo",{title:"Update Todo",todo});
    }catch(err){
        res.status(500).send(err.message);
    }
};

const deleteTodoFromController = (req,res,next)=>{
    try{
        const {id} = req.query;
        res.render("deleteTodo",{title:"Delete Todo",id});
    }catch(err){
        res.status(500).send(err.message);
    }
} 

const addTodoController =async(req,res,next)=>{
    try{
        const {title,desc}=req.body;
        if(!title){
            return res.status(400).send({
                message:"Title is required"
            });
        }
        const newTodo = new Todo({title,desc});
        await newTodo.save(); 
        res.redirect("/"); 
    }catch(err){
        res.status(500).send(err.message);
    }
}

const updateTodoController = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const {title , desc} = req.body;
        const todo = await Todo.findById(id);
        if(!todo)
        {
            return res.status(404).send({message:"No todo found"});
        }
        todo.title = title;
        todo.desc = desc;
        await todo.save();
        res.redirect('/');
    }catch(err){
        res.status(500).send(err.message);
    }
}

const deleteTodoController = async(req,res,next)=>{
    try{
        const {id,confirm}=req.query;
        if(confirm==="yes")
        {
            await Todo.findByIdAndDelete(id);
        }
        res.redirect('/');

    }catch(err){
        res.status(500).send({message:"Error while delete todo"});
    }
}

module.exports = {
    homeController:homeController,
    addTodoFromController:addTodoFromController,
    updateTodoFromController:updateTodoFromController,
    deleteTodoFromController:deleteTodoFromController,
    addTodoController:addTodoController,
    updateTodoController:updateTodoController,
    deleteTodoController:deleteTodoController
}