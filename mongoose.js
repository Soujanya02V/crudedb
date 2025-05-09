import mongoose from "mongoose";

//step 1 | connection

try{
    await mongoose.connect("mongodb://localhost:27017/mongoose");
    mongoose.set("debug",true);
}catch(error){
   console.error(error);
   process.exit();
}

//step 2 | schema creation

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true,min:5},
    createdAt:{type:Date, default:Date.now()}

});


//step 3 | creating model

const Users = mongoose.model("user",userSchema);

await Users.create({name:"souju",
    age:21,
    email: "souju@gmail.com"
});

await mongoose.connection.close();
