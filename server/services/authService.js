const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
require('dotenv').config()


const User = require('../models/userModel');
const { token } = require('morgan');
const { response } = require('express');
const { log } = require('winston');

//function for creating token
const createToken = (payload)=>{
    return jwt.sign({userId: payload}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE_TIME
})}

// @desc    Signup
// @route   GET /api/v1/auth/signup
// @access  Public
exports.signup = asyncHandler(async (req,res,next) => {
    //1-create user
    const user = await User.create({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: req.body.role,
    })

    //2-Generate token (JWT)
    const token = createToken(user._id)

    res.status(201).json({
        data : user,
        token: token
    })
})

// @desc    login
// @route   GET /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
    // 1) check if password and email in the body (validation)
    // 2) check if user exist & check if password is correct
    const user = await User.findOne({ email: req.body.email });

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return next(new ApiError('Incorrect email or password', 401));
    }
    // 3) generate token
    const token = createToken(user._id);

    // Delete password from response
    delete user._doc.password;
    // 4) send response to client side
    res.status(200).json({ user: {
        _id:user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
    }, token });
  });

exports.protectAuth = asyncHandler(async (req,res,next) => {

    //1-check if token exist, if exist get
    let token;
    if(req.headers.authorization){
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return next(
            new ApiError('You are not login ,Please login to get access this route',401)
    )}


    //2-verify token (no change happens or expired token)
    jwt.verify(token, process.env.JWT_SECRET_KEY,(err,decoded)=>{
        if (err) {
            // Token is invalid or expired
            console.error('JWT verification failed:', err);
            // Handle unauthorized access here
          } else {
            // Token is valid
            console.log('JWT decoded:', decoded);

            // You can access user information from the decoded token
            const userId = decoded.userId;

            // user information
            User.findById(userId)
            .select('_id firstName lastName email role')
            .then(user => {
                res.status(200).json({user})
            })
            .catch(err => {
              console.error('Error user Not Found:', err);
            });
        }
    })
});


// Update specific user password
// exports.changeAuthPassword = asyncHandler(async (req, res, next) => {

//     const user = await User.findOne({ email: req.body.email});

//     if(!user){
//         return res.status(404).json({
//             message : "User not found !!!"
//         })
//     }

//     const secret = process.env.JWT_SECRET_KEY + user.password;
//     const token = jwt.sign({email : user.email, id:user._id}, secret,{
//         expiresIn: process.env.JWT_EXPIRE_TIME
//     })

//     const link =`http://localhost:8000/api/v1/auth/forgot/${user._id}/${token}`

//     res.json({message : 'click link' , restPasswordLink : link})

//         // // Send email with the temporary password
//         // const transporter = nodemailer.createTransport({
//         //     service: 'gmail',
//         //     auth: {
//         //         user: 'aminecommons05@gmail.com',
//         //         pass: 'lpis pnex ftxk vtge'
//         //     }
//         // });
//         // const mailOptions = {
//         //     from: 'aminecommons05@gmail.com',
//         //     to: user.email,
//         //     subject: 'Password Reset',
//         //     html:   `<div>
//         //                 <h4>Click on the link for Reset your password</h4>
//         //                 <p>${link}</p>
//         //             </div>`
//         // };

//         // transporter.sendMail(mailOptions, (error, success) => {
//         //     if (error) {
//         //         console.error(error);
//         //         return res.status(500).json({ message: 'Failed to send email' });
//         //     } else {
//         //         console.log('Email sent: ' + success.response);
//         //         return res.status(200).json({ message: 'Email sent successfully' });
//         //     }
//         // });

//         // // res.render("/client/src/components/RestPassword")



// })

// exports.getChangeAuthPassword = asyncHandler(async (req, res, next) => {

//     const user = await User.findById(req.params.userId);

//     if(!user){
//         return res.status(404).json({
//             message : "User not found !!!"
//         })
//     }

//     const secret = process.env.JWT_SECRET_KEY + user.password;
//     try{
//         jwt.verify(req.params.token, secret);
//         // res.status(200).json({message : {email: user.email}})
//         res.status(200).redirect('http://localhost:8080/RestPassword');
//     }catch(err){
//         console.log(err);
//         res.status(401).json({message: 'error!!!!'})
//     }

// })

// exports.restChangeAuthPassword = asyncHandler(async (req, res, next) => {

//     const user = await User.findOne({ email: req.body.email });

//     if(!user){
//         return res.status(404).json({
//             message : "User not found !!!"
//         })
//     }
//     const secret = process.env.JWT_SECRET_KEY + user.password;
//     const token = jwt.sign({email : user.email, id:user._id}, secret,{
//         expiresIn: process.env.JWT_EXPIRE_TIME
//     })
//     try{
//         jwt.verify(token, secret);
//         const password = await bcrypt.hash(req.body.password, 12)

//         user.password = password;

//         await user.save();
//         // res.status(200).redirect('http://localhost:8080/SuccessPassword');
//         res.status(200).json({
//             message:'Success password',
//             token : token
//         })

//         console.log(user);

//     }catch(err){
//         console.log(err);
//         res.status(401).json({message: 'error!!!!'})
//     }

//     //change token
//     const newToken  = token;
//     const password = req.body;

//     try {
//         const decodedToken = jwt.verify(newToken, process.env.JWT_SECRET_KEY);

//         if (!decodedToken.email) {
//             return res.status(400).json({ message: 'Invalid token' });
//         }

//         const user = await User.findById(decodedToken.email);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         user.password = await bcrypt.hash(password, 10);
//         await user.save();

//         res.status(200).json({ message: 'Password reset successful' });
//     } catch (error) {
//         if (error.name === 'TokenExpiredError') {
//             return res.status(400).json({ message: 'Token expired' });
//         }
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }

// })

