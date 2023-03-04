import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookItem } from '../redux/books/booksSlice';

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

  const trimItems = () => {
    setTitle(title.trim());
    setAuthor(author.trim());
    setCategory(category.trim());
  };

  return (
    <form id="myForm">
      <label htmlFor="book-title">
        Book Title :
        <input placeholder="Title" type="text" id="book-title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      {' '}
      <label htmlFor="book-author">
        Book Author :
        <input placeholder="Author" type="text" id="book-author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      {' '}
      <label htmlFor="book-category">
        Book Category :
        <input placeholder="Category" type="text" id="book-category" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      {' '}
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          trimItems();
          if (title && author && category) {
            dispatcher(setBookItem({
              title, author, category,
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
