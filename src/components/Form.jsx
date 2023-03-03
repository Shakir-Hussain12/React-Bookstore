import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function Form() {
  const dispatcher = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const setItems = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form id="myForm">
      <label htmlFor="book-title">
        Book Title :
        <input placeholder="Title" type="text" id="book-title" value={title} onChange={(e) => setTitle(e.target.value.trim())} />
      </label>
      {' '}
      <label htmlFor="book-author">
        Book Author :
        <input placeholder="Author" type="text" id="book-author" value={author} onChange={(e) => setAuthor(e.target.value.trim())} />
      </label>
      {' '}
      <label htmlFor="book-category">
        Book Category :
        <input placeholder="Category" type="text" id="book-category" value={category} onChange={(e) => setCategory(e.target.value.trim())} />
      </label>
      {' '}
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const id = 'item4';
          if (title && author && category) {
            dispatcher(addBook({
              id, title, author, category,
            }));
            setItems();
          }
        }}
      >
        Add Book
      </button>
    </form>
  );
}
