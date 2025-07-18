require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error:", err));

const headingSchema = new mongoose.Schema(
  {
    text: String,
  },
  { collection: "heading" }
);
const Heading = mongoose.model("heading", headingSchema);

app.get("/api/heading", async (req, res) => {
  try {
    const heading = (await Heading.findOne()) || {
      text: "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI",
    };
    res.json(heading);
  } catch (error) {
    res.status(500).send("Error retrieving heading");
  }
});

app.post("/api/heading", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).send("Text is required");
  const heading = await Heading.findOneAndUpdate(
    {},
    { text },
    { upsert: true, new: true }
  );
  res.json(heading);
});

app.listen(5000, () => console.log("Server running on port 5000"));
