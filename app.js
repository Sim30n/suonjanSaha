var express = require("express");
const port = process.env.PORT || 3000
var app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("landing")
});

app.get("/index", function(req, res){
    res.render("index")
});

app.listen(port, () => {
  console.log("Server is up on port " + port)
})
