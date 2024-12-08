import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvailableBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books/available')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Available Books</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableBooks;
