import { Db } from "mongodb";
import mysql from "mysql2/promise";

//connecting
const db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"********",
    database:"testing"
});

console.log("sequel connected successfully");


//creating db

//console.log(await db.execute("show databases"));

//await db.execute(`create database testing`);

//creating table

/*await db.execute(`CREATE TABLE USER(
    ID INT PRIMARY KEY NOT NULL,
    NAME VARCHAR(40) NOT NULL,
    EMAIL VARCHAR(40) NOT NULL UNIQUE)`);*/


//await db.execute(`INSERT INTO USER(ID,NAME,EMAIL) VALUES(1,"souju","souju@gmail")`);

//reading data

 const [row,field] = await db.execute(`SELECT * FROM USER`);
 console.log(row);
 console.log(field)

 //using prepared statement

 //await db.execute(`INSERT INTO USER(ID,NAME,EMAIL)
   //  VALUES(?,?,?)`,[2,"tuvi","tuvi@gmail.com"]);


//multiple values
//declare all in one object

const values = [
    [3,"alice","alice@gmail.com"],
    [4,"bob","bob@gmail.com"]
];

//await db.execute("insert into USER(ID,NAME,EMAIL) values ?",[values]);


//updating

try{
    const [row] = await db.execute(`update USER SET NAME="nimmi" WHERE ID = 2`)
}catch(error){
    console.error(error)
}



