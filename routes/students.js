var express=require('express')
var mongodb=require('mongodb')
var router=express.Router();


router.post('/register',async function (req,res,next){
    try{
    const data=req.body.data
    const MongoClient=mongodb.MongoClient
    const server=await MongoClient.connect('mongodb+srv://nagarani101994:nagarani1994@cluster0.sbzacep.mongodb.net/')
    const db=server.db("sms")
    const collection=db.collection('students')
    const result=await collection.insertOne(data)
    res.send(result)
    }
    catch(ex){
        res.send(ex.message)
    }
})
//http:://localhost:2020/std/register ,post
module.exports=router;