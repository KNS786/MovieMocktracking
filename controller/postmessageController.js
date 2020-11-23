var express=require('express');
var router=express.Router();

var postmessage=require('../models/postmessage');
var ObjectId=require('mongoose').Types.ObjectId;
//get data
router.get('/',function(req,res){
    return postmessage.find(function(err,data){
               if(!err)
                  return res.send(data);
               else console.error('cannot find database in data')
      })  
})
  
//post data
router.post('/',function(req,res){
      var newRecord=new postmessage({
            title:req.body.title,
            message:req.body.message
      })
     return newRecord.save(function(err,recordData){
             if(!err) return res.send(recordData);
             else console.error("new Record connot be created...",err);
     })
})

//username login post data in the server




 
//Put data
router.put('/:id',function(req,res){
      if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record with given id: "+req.params.id)

      var updatedRecord={
         title:req.body.title,
          message:req.body.message
        }
       return postmessage.findByIdAndUpdate(req.params.id,{$set:updatedRecord},{new:true},function(err,data){
              if(!err) return res.send(data);
              else console.error("Updating failed Record : ",JSON.stringify(err))
       })

})

//delete 

router.delete('/:id',function(req,res){
   
     if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No recored given with Id : '+req.params.id)

     return postmessage.findByIdAndRemove(req.params.id,function(err,data){
              if(!err) return res.send(data);
              else console.error("Error occured while deleting a Record : " ,JSON.stringify(err));

    })

})



module.exports=router;
