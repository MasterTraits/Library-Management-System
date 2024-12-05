import express from 'express';
import { db } from '../database.js';

export const getBorrowing = express.Router();

getBorrowing.get("/", async (req, res) => {
  const [rows] = await db.query('SELECT * FROM borrows');
  res.json(rows);
});

getBorrowing.get("/:id", async (req, res) => {
  const [rows] = await db.query('SELECT * FROM borrows WHERE id = ?', [req.params.id]);
  res.json(rows);
});

getBorrowing.post("/", async (req, res) => {
  const { student_id, book_id, borrow_date, return_date } = req.body;
  const [result] = await db.query('INSERT INTO borrows (student_id, book_id, borrow_date, return_date) VALUES (?, ?, ?, ?)', [student_id, book_id, borrow_date, return_date]);
  res.json(result);
}); 

getBorrowing.put("/:id", async (req, res) => {
  const { student_id, book_id, borrow_date, return_date } = req.body;
  const [result] = await db.query('UPDATE borrows SET student_id = ?, book_id = ?, borrow_date = ?, return_date = ? WHERE id = ?', [student_id, book_id, borrow_date, return_date, req.params.id]);
  res.json(result);
});

getBorrowing.delete("/:id", async (req, res) => {
  const [result] = await db.query('DELETE FROM borrows WHERE id = ?', [req.params.id]);
  res.json(result);
});
