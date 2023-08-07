import express, { application } from "express";
import mysql from "mysql"
import cors from "cors"
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeemanagment"
})

con.connect((err) => {
    if(err){
        console.log("error in connection");
    }else{
        console.log("connected");
    }
})

app.post("/login", (req,res) =>{
    const sql = "select * from users where email = ? AND password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) =>{
        if(err){
            return res.json({status: "error", error: "Error in running query"})
        }
        if(result.length > 0 ){
        return res.json({status: "success"})
        }else{
            return res.json({status: "error", error: "Wrong Email or Password"})
        }
        
    })
   
})

app.listen(5000, () =>{
    console.log("listening on 5000")
})