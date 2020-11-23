var mongoose=require('mongoose');

var postMessage=mongoose.model('users',{
      title:{type:String},
      message:{type:String},
},'postmessage')


module.exports=postMessage;
