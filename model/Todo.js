const mongoose = require("mongoose")
const { Schema, model } = mongoose
const TodoSchema = new Schema({
    list: { type: String, required: true },
    day: { type: String, required: true },
})

const Todo = new model("Todo", TodoSchema)
module.exports = Todo