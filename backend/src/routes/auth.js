const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let users = [];

router.post("/register", async (req,res)=>{
 const {email,password} = req.body;
 const hash = await bcrypt.hash(password,10);
 users.push({email,password:hash});
 res.json({msg:"user created"});
});

router.post("/login", async (req,res)=>{
 const {email,password} = req.body;
 const user = users.find(u=>u.email===email);
 if(!user) return res.status(401).send("not found");
 const valid = await bcrypt.compare(password,user.password);
 if(!valid) return res.status(401).send("invalid");
 const token = jwt.sign({email}, "secret");
 res.json({token});
});

module.exports = router;
