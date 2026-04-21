const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/expenseDB")
.then(() => console.log("DB Connected"));

// schema
const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: Date
});

const Expense = mongoose.model("Expense", expenseSchema);

// POST
app.post("/expenses", async (req, res) => {
  const data = new Expense(req.body);
  await data.save();
  res.send("Added");
});

// GET
app.get("/expenses", async (req, res) => {
  const data = await Expense.find();
  res.json(data);
});

// DELETE
app.delete("/expenses/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(3000, () => console.log("Server running"));