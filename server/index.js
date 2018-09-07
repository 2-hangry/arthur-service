var express = require('express');
var app = express();
const port = process.env.PORT || 3002;

app.listen(port, ()=>{
    console.log(' we listening for things');
})