const Todo = require("../model/Todo")

const addToDo = (req, res) => {
    try {
        let todo = new Todo(req.body)
        todo.save()
        res.redirect("/");
    } catch (error) {
        res.status(500).send(error)
    }
}

const getTodos = async(req, res) => {
    try {
        let todos = await Todo.find()
        res.render("index", { data: todos, isUpdate: false });
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTodo = async(req, res) => {
    try {
        let { id } = req.body
        console.log(req.body);
        await Todo.findOneAndRemove({ _id: id })
        res.redirect("/");
    } catch (error) {
        res.status(500).send(error)
    }
}

const getCurrentTodo = async(req, res) => {
    try {
        let { id } = req.params
        let todo = await Todo.findOne({ _id: id })
        res.render("index", { data: todo, isUpdate: true })
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateTodo = async(req, res) => {
    try {
        let { id } = req.params
        await Todo.findOneAndUpdate({ _id: id }, req.body)
        res.redirect("/")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    addToDo,
    getTodos,
    deleteTodo,
    getCurrentTodo,
    updateTodo
}