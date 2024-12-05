import express from 'express';
import cors from 'cors';
import { db } from './database.js';
import { getStudents } from './controllers/students.js';
import { getBooks } from './controllers/books.js';
import { getBorrowing } from './controllers/borrowing.js';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server side is running');
});

app.use("/books", getBooks);
app.use("/students", getStudents);
app.use("/borrowing", getBorrowing);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

