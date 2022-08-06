const express = require('express');
const app = express();
const Port = 3000;
const { chats } = require('./data/data')

app.get('/', (req, res) => {
    res.send("Hello Welcome to my homepage"); // response from server
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    var chatID = req.params.id;

    const singleChat = chats.find((chat) => {
       return chat._id === chatID;
    })

    res.send(singleChat);
})



app.listen(Port, console.log(`Server is running on Port ${Port}`));






