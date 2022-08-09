const express = require('express');
const app = express();
const dotenv = require('dotenv'); 
const { chats } = require('./data/data')
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

connectDB();


dotenv.config();


app.use(cors());
app.use(express.json()); // to accept JSON Data


app.get('/', (req, res) => {
    res.send("Hello Welcome to my homepage"); // response from server
})

app.use('/api/user', userRoutes); // redirect all /api/user/ requests to the file userRoutes


const Port = process.env.PORT || 3000;

app.listen(Port, console.log(`Server is running on Port ${Port}`));






