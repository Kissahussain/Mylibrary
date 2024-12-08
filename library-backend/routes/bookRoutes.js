const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// Example: Get all available books
router.get('/available', async (req, res) => {
  try {
    const books = await Book.find({ status: 'available' });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
