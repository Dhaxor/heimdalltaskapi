//environment variables
const mongoose  = require('mongoose');

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
// require('dotenv').config();

const uri = process.env.ATLAS_URI;

 function connectDB(){

    mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true});

    const connection = mongoose.connection;

    connection.once('open', () => {

    console.log("Connected Database Successfully");

    })
    

    connection.once('error', (error) => {
            console.log(error)
        })
    
  }
  

  module.exports = connectDB;
