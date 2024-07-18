import express from "express";
import { TodoModel } from "./shema.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/todos", async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/todos", async (req, res) => {
  const todo = new TodoModel({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description || "",
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/todos/:id", async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    if (req.body.title != null) {
      todo.title = req.body.title;
    }
    if (req.body.description != null) {
      todo.description = req.body.description;
    }
    if (req.body.completed != null) {
      todo.completed = req.body.completed;
    }

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    const result = await TodoModel.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/todos", async (req, res) => {
  try {
    await TodoModel.deleteMany();
    res.json({ message: "All todos deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

