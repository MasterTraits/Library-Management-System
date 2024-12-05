import express from 'express';
import { db } from '../database.js';

export const getStudents = express.Router();

getStudents.get("/", async (req, res) => {
  const [rows] = await db.query('SELECT * FROM student_details');
  res.json(rows);
});

getStudents.get("/:id", async (req, res) => {
  const [rows] = await db.query('SELECT * FROM student_details WHERE id = ?', [req.params.id]);
  res.json(rows);
});

getStudents.get("/columns", async (req, res) => {
  const [rows] = await db.query('SELECT COLUMNS FROM sys.columns WHERE object_id = OBJECT_ID(\'student_details\')');
  res.json(rows);
});

getStudents.post("/", async (req, res) => {
  const { name, email, phone, address } = req.body;
  const [result] = await db.query('INSERT INTO student_details (name, email, phone, address) VALUES (?, ?, ?, ?)', [name, email, phone, address]);
  res.json(result);
});

getStudents.put("/:id", async (req, res) => {
  const { name, email, phone, address } = req.body;
  const [result] = await db.query('UPDATE student_details SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?', [name, email, phone, address, req.params.id]);
  res.json(result);
});

getStudents.delete("/:id", async (req, res) => {
  const [result] = await db.query('DELETE FROM student_details WHERE id = ?', [req.params.id]);
  res.json(result);
});