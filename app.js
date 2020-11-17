const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require("./dbconnection");
const { addToDo, getTodos, deleteTodo, getCurrentTodo, updateTodo } = require('./controller/todolistController');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

database.connect();

app.get("/", getTodos);
app.post("/post", addToDo);
app.post("/delete", deleteTodo);
app.get("/update/:id", getCurrentTodo);
app.post("/update/:id", updateTodo);

app.listen(3000);