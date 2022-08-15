const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
const asyncHandler = require('express-async-handler');
const JWT_SECRET = 'interacto';

const protect = asyncHandler(async (req, res, next) => {

    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            // decodes token id
            const decoded = jwt.verify(token, JWT_SECRET);

            req.user = await User.findById(decoded.id).select("")
        }
    }
})