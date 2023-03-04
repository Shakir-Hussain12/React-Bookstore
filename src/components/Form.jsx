import {
  MenuItem, Select, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookItem } from '../redux/books/booksSlice';
import './Book.css';

export default function Form() {
  const dispatcher = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

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
      <h1 className="form-title">
        Add New Book
      </h1>
      <div className="form-content">
        <TextField placeholder="Title" type="text" id="book-title" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" />
        <TextField placeholder="Author" type="text" id="book-author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Select
          id="book-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Action">Action</MenuItem>
          <MenuItem value="Fiction">Fiction</MenuItem>
          <MenuItem value="Thriller">Thriller</MenuItem>
          <MenuItem value="Economy">Economy</MenuItem>
        </Select>
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
      </div>
    </form>
  );
}
