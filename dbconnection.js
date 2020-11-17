const mongoose = require("mongoose")
const connectedToDatabase = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/todolist", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true
        }).then(() => {
            console.log("connected to Database");
        }).catch(error => console.log("error", error))
}
module.exports = { connect: connectedToDatabase }