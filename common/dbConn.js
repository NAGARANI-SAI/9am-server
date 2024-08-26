var mongodb=require("mongodb")


function getDB(){
    const MongoClient=mongodb.MongoClient;
    const server=MongoClient.connect("mongodb+srv://nagarani101994:nagarani1994@cluster0.sbzacep.mongodb.net/")
    const db=server.db("sms")
    return db;
    
}
module.exports=getDB;