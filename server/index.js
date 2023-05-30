const PORT = 8000;
const express = require("express");

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const uri =
  "mongodb+srv://miguelbomfanti:StNc4VE5WvT7rtSu@cluster0.x7setfs.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log("Server running? port: " + PORT));

// Default
app.get("/", (req, res) => {
  res.json("Funciona?");
});

app.get("/user", async (req, res) => {
  const client = new MongoClient(uri);
  //const userId = req.query.userId

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    //const query = {user_id: userId}
    //const user = await users.findOne(query)
    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
});

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  const generatedUserId = uuidv4();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(409).send("Usuário Já Existe");
    }

    const sanitizedEmail = email.toLowerCase();

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };

    const insertedUser = await users.insertOne(data);

    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });
    res.status(201).json({ token, userId: generatedUserId });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
});
