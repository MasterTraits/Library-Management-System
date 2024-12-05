import express from 'express';
import { db } from '../database.js';

export const getBooks = express.Router();

getBooks.get("/", async (req, res) => {
  const [rows] = await db.query('SELECT * FROM books');
  res.json(rows);
});

getBooks.get("/:id", async (req, res) => {
  const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [req.params.id]);
  res.json(rows);
});

getBooks.post("/", async (req, res) => {
  const { title, author, category, quantity } = req.body;
  const [result] = await db.query('INSERT INTO books (title, author, category, quantity) VALUES (?, ?, ?, ?)', [title, author, category, quantity]);
  res.json(result);
});

getBooks.put("/:id", async (req, res) => {
  const { title, author, category, quantity } = req.body;
  const [result] = await db.query('UPDATE books SET title = ?, author = ?, category = ?, quantity = ? WHERE id = ?', [title, author, category, quantity, req.params.id]);
  res.json(result);
});

getBooks.delete("/:id", async (req, res) => {
  const [result] = await db.query('DELETE FROM books WHERE id = ?', [req.params.id]);
  res.json(result);
});