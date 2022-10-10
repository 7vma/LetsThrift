///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const UserSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: [true, ' Please enter username'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, ' Please enter Email Adress'],
        unique:true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
    // profile_picture: String,
},
{
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
            delete ret.password;
            return ret;
            },
        },
    });

const User = mongoose.model("User", UserSchema);

module.exports = User
