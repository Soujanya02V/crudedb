import mongoose from "mongoose";



try{
    await mongoose.connect("mongodb://localhost:27017/mongooseware");
    
}catch(error){
   console.error(error);
   process.exit();
}

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true,min:5},
    createdAt:{type:Date, default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}

});

userSchema.pre(["updateOne"],function(next){
    this.set({updatedAt: Date.now()})
    next();
})



const Users = mongoose.model("user",userSchema);


/*await Users.create({name:"tuvi",
    age:21,
    email: "tuvi2V@gmail.com"
});*/

await Users.updateOne({name:"tuvi"},
    {
        $set:{age:21}
    }

);


await mongoose.connection.close();