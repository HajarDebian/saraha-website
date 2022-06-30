const mongoose = require('mongoose');
const bycrpt = require('bcrypt');
const CryptoJS = require("crypto-js");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    ,
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    profilePic: String,
    loginStatus: { 
        type: Boolean, 
        default: false 
    },
    lastseen: {
        type: String 
    },
    confirmEmail: {
        type: Boolean, 
        default: false 
    },
    role: { 
        type: String, 
        default: 'User' 
    },
}, {
    timestamps: true
})


userSchema.pre('save', async function (next) {
    this.password = await bycrpt.hash(this.password, parseInt(process.env.saltRound));
    this.phone= CryptoJS.AES.encrypt(this.phone , process.env.encKey).toString();
    next();
})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;