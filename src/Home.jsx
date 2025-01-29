// src/components/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BookCard from './components/BookCard'; // Corrected import path
import books from './booksData'; // Corrected import path
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleAddBookClick = () => {
    navigate('/add'); // Programmatic navigation to /add route
  };

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button className="add-book-button" onClick={handleAddBookClick}>
        Add Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
