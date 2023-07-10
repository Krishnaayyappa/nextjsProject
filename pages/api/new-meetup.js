import {MongoClient} from "mongodb";

export default async function handler(req,res){
    console.log(req.method)
    console.log("connection1")
    const data = req.body;
    console.log("connection2");

    // store in the database

    const client = await MongoClient.connect("mongodb+srv://Admin-krishna:iO4KVeK4qWJfGDRd@cluster0.yaob0.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    const result = await meetupsCollections.insertOne(data);
    console.log(result);
    client.close(); // to close the database
    res.status(201).json({message:"meetup inserted"})

}

