const express = require('express') ;
const app = express() ;
const mongoose = require('mongoose') ;
const bodyParser = require('body-parser') ;
app.use(bodyParser.urlencoded({extended:true})) ;
app.use(bodyParser.json()) ;
var url = "mongodb+srv://Nagasai:Mongo123@cluster0.v7mza.mongodb.net/phase4?retryWrites=true&w=majority" ;
const options = {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 
} ;
mongoose.connect(url, options, function(err){
    if(err) console.log(err) ;
    else console.log("Connected!!") ;
}) ;
// var data = {
//     "name" : "fghjk",
//     "emial" : "asdfg",
//     "asd" : "werty" 
// }
// var data2 = {
//     "ghj" : "sdf"
// }
// mongoose.connection.collection("phase4").save(data) ;
// mongoose.connection.collection("phase4").save(data2) ;

app.use(express.static(__dirname + '/frontend')) ;
app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/index.html') ;
}) ;
app.get('/resume', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/resume.html') ;
}) ;
app.get('/google', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/google.html') ;
}) ;

app.get('/register', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/register.html') ;
}) ;
app.get('/chart', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/chart.html') ;
}) ;

app.get('/todo', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/todo.html') ;
}) ;
app.get('/todoDB', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/todoDB.html') ;
}) ;
app.get('/tododata', function(req, res)
{
    var data = {
        "tasks" : [] 
    } ;
    var cursor = mongoose.connection.collection('phase4').find();
    var Task = [] ;
    var i = 0 ;
    cursor.forEach(function(doc, err) {
        if(err)
        console.log("asd") ;
        else
        {
            Task[i++] = doc.task ;
            // console.log(Task) ; 
        }
    }, function()
    {
        // console.log(data) ;
        // console.log(Task) ;
        data.tasks = Task ;
        // console.log(data) ;
        res.json(data) ;
        res.redirect('/todoDB') ;
    });
}) ;
app.post('/todoDB', function(req, res, next)
{
    var item = req.body.name ;
    console.log(item) ;
    var obj = {
        "task" : item
    }
    res.redirect('/todoDB') ;
    // mongoose.connection.collection("phase4").save(obj, function(){
    //     res.redirect('/todoDB') ;
    // }) ;
}) ;

app.get('/login', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/login.html') ;
}) ;
app.get('/apple', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/apple.html') ;
}) ;

app.get('/color', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/color.html') ;
}) ;
var PORT = process.env.PORT || 3000 ;
app.listen(PORT, function()
{
    console.log("Site running on https:localhost:" + PORT) ;
}) ;