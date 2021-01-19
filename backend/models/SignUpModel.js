const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const signUpTemplate = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
      
    },
    username: {
      type: String,
      required:true,
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
      unique: true 
    },
    email: {
        type: String,
        required:true,
        unique: true 
      },
      password: {
        type: String,
        required:true,
      },
  },
  { timestamps: true }
);
signUpTemplate.plugin(uniqueValidator)
module.exports = mongoose.model("Userhoops", signUpTemplate);
