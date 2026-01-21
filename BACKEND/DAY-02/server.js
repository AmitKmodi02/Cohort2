const express = require('express')


const app = express() //server instance create karna // instance means blueprint the express that contains class and object

app.get('/', (req,res) => {
    res.send('hello duniya waaloooo')
})

app.get('/about', function(req,res){
    res.send('This is about page')
})

app.get('/home', function(req,res){
    res.send('This is home page')
})

// npx use for package execute
// npm is use to install the package

// Port number is used to track any application running in particular pc like in network when we send data to any pc ip address find pc and port number find particular application to send data
app.listen(3000)   // server start karna