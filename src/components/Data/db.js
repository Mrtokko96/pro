const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mrtokko:<password>@cluster0-5xfdg.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}, (err)=>{
  console.log("error with db");
})

require('./db_model.js')
