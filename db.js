const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
  if(!err){
    console.log('connected mongo');
  }  else{
    console.log('err in connected mongo');
  }
})

module.exports = mongoose;