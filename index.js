const express = require('express') ;
const app = express() ;
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
var PORT = process.env.PORT || 3000 ;
app.listen(PORT, function()
{
    console.log("Site running on https:localhost:" + PORT) ;
}) ;