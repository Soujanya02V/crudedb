import{MongoClient} from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1");
await client.connect();


const db = client.db("mongodb_nodejs_db");
const userCollection = db.collection("users");


userCollection.insertOne({name:"souju",age:21});

userCollection.insertMany([{
    name:"nimmi",
    age:20
},
{
    name:"tuvi",
    age:21
}])

const userCursor = userCollection.find();
console.log(userCursor);

for await (const user of userCursor){
    console.log(user);
}


//const userCursor = await userCollection.find().toArray();
console.log(userCursor)

const user = await userCollection.findOne({name:"souju"});
console.log(user)
console.log(user._id.toHexString());


await userCollection.updateOne({
    name:"tuvi"
},{$set:{age: 22}});


const tuvi = await userCollection.findOne({name:"tuvi"});
console.log(tuvi)


await userCollection.deleteOne({name:"tuvi"});