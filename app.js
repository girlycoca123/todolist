const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
urlEncodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

let values = [{ list: "Meditating", day: "Morning" }];

app.get("/", (req, res) => {
    res.render("index", { data: values });
});

app.post("/post", urlEncodedParser, (req, res) => {
    values.push(req.body);
    res.redirect("/");
})

app.post("/delete", urlEncodedParser, (req, res) => {
    let { id } = req.body
    values.splice(id, 1)
    res.redirect("/");
})


app.listen(3000);