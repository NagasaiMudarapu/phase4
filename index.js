const express = require('express') ;
const app = express() ;
const mongoose = require('mongoose') ;
const bodyParser = require('body-parser') ;
app.use(bodyParser.urlencoded({extended:true})) ;
app.use(bodyParser.json()) ;
var pass = "Mongo123" ;
var url = "mongodb+srv://Nagasai:" + pass + "@cluster0.v7mza.mongodb.net/phase4?retryWrites=true&w=majority" ;
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
        else if(!data.isdel)
        Task[i++] = doc ;
    }, function()
    {
        data.tasks = Task ;
        res.json(data) ;
    });
}) ;
app.post('/todoDB', function(req, res, next)
{
    var item = req.body.name ;
    console.log(item) ;
    var ind = [] ;
    for(var i = 0 ; i < 1000 ; i++)
    ind[i] = 0 ;
    var cursor = mongoose.connection.collection('phase4').find();
    cursor.forEach(function(doc, err) {
        if(err)
        console.log("asd") ;
        console.log(doc) ;
        console.log("DOC ID" + doc.id) ;
        ind[doc.id] = 1 ;
        console.log(ind[doc.id]) ;
    }, function()
    {
        console.log(ind) ;
        var index = 0 ;
        for(var i = 0 ; i < 1000 ; i++)
        if(ind[i] === 0)
        {
            console.log("found" + i) ;
            index = i ;
            break ;
        }
        var obj = {
            "task" : item,
            "id" : index,
            "checked" : false,
            "isdel" : false
        }
        mongoose.connection.collection("phase4").save(obj, function(){
            console.log(obj) ;
            res.redirect('/todoDB') ;
        }) ;
    });
}) ;

app.put('/todoDB/:id', function(req, res){
    var ind = req.params.id;
    console.log(ind) ;
    var cursor = mongoose.connection.collection('phase4').find();
    var x = {} ;
    cursor.forEach(function(doc, err) {
        if(err)
        console.log("asd") ;
        if(doc.id == ind) x = doc ;
    }, function() 
    {
        if(x.checked === false) x.checked = true ;
        else x.isdel = true ;
        mongoose.connection.collection("phase4").save(x, function(){
            res.send({}) ;
        }) ;
    }) ;
})
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