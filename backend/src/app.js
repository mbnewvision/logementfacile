require('dotenv').config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use(limiter);

app.get("/", (req,res)=> res.send("🚀 LogementFacile PRO API OK"));

app.listen(process.env.PORT || 3000);
