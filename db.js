var mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1/videoServer',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
        
      if(!err) console.log("mongo db connected successfully")
      else console.log('mongo db not connected ',err);

})