const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");

const registerUser = asyncHandler(async () => {
    const { name, email, password, pic } = req.body;

    if(!name || !email || !password) {
        res.status(400);

        throw new Error("Please enter all the fields");
    }

    const userExists = await User.findOne( {email} )

    if(userExists) {
        res.status(400);

        throw new Error("User already exists");
    }

    // if user doesn't exist we need to create a new user with all the provided details
    
});