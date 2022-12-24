const mongoose = require("mongoose");

//create a user schema
const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
    },  
    { timestamps: true }
);
module.exports= mongoose.model("User", userSchema);