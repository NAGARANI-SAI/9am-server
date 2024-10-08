var express=require('express')
var mongodb=require('mongodb')
var objectId=mongodb.ObjectId;
var router=express.Router();
var getDB=require('../common/dbConn')

router.post('/register',async function (req,res,next){
    try{
    const data=req.body.data
    const db=await getDB();
    const collection=db.collection('students')
    const result=await collection.insertOne(data)
    res.send(result)
    }
    catch(ex){
        res.send(ex.message)
    }
})
//http:://localhost:2020/std/register ,post
router.get('/get-std',async function(req,res,next){
    try{
    const db= await getDB();
    const collection=db.collection("students")
    const result= await collection.find().toArray()
    res.send(result);
    }
    catch(ex){
        res.send(ex.message)
    }
})
router.put('/update-std',async function(req,res,next){
    try{
    const id=req.query.id;
    const data=req.body.data;
    const db=await getDB();
    const collection=db.collection("students")
   const result=await collection.updateOne({_id:objectId.createFromHexString(id)},{$set:data})
   res.send(result);
    }
    catch(ex){
        //console.error(ex)
        res.send(ex)
    }
})
router.delete('/delete-std/:id',async function(req,res,next){
    try{
    var id=req.params.id;
    const db=await getDB()
    const collection=db.collection("students")
    const result=await collection.deleteOne({_id:objectId.createFromHexString(id)})
    res.send(result)
    }
    catch(ex){
        res.send(ex)
        console.error(ex)
    }
})
router.post('/login',function(req,res,next){
    const {uid,pwd}=req.body
    if(uid==='rani'&&pwd==="nagarani"){
        res.send([{uid,pwd}])
    }else
    {
        res.send([])
    }
})

module.exports=router;