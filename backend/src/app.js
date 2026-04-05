require('dotenv').config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use(limiter);

app.get("/", (req,res)=> res.send("🚀 LogementFacile PRO API OK"));

/* ============================= */
/* 🏠 AJOUT LOGEMENT (POST) */
/* ============================= */
app.post("/properties", async (req, res) => {
  try {
    const { title, price, location } = req.body;

    const property = await prisma.property.create({
      data: {
        title,
        price: Number(price),
        location
      }
    });

    res.json(property);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur");
  }
});

/* ============================= */
/* 📋 LISTE LOGEMENTS (GET) */
/* ============================= */
app.get("/properties", async (req, res) => {
  try {
    const properties = await prisma.property.findMany();
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur");
  }
});

/* ============================= */

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running 🚀");
});
