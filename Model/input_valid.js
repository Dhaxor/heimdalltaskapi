const mongoose = require("mongoose");


const inputValidation = mongoose.Schema({
  type: {
    type: String,
    required:true
  }, 
  crux: {
    type: String,
    required:true
    
  }, 
  color: {
    type: String,
    required:true

  },
  title: {
    type: String,
    
  }, 
  // completed: {
  //   type: Boolean,
  // }
  
});
const inputValid = (module.exports = mongoose.model("inputValid", inputValidation));