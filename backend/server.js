const express = require('express');
const dotenv = require('dotenv'); 
const { chats } = require('./data/data')
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();
connectDB();

const app = express();



app.use(express.json()); // to accept JSON Data


app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello Welcome to my homepage"); // response from server
})


app.use('/api/user', userRoutes); // redirect all /api/user/ requests to the file userRoutes
app.use('/api/chat', chatRoutes);



// if no other links work as given above .. we finally will come across error handlers


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const Port = process.env.PORT || 3000;

app.listen(Port, console.log(`Server is running on Port ${Port}`));






