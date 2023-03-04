import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getBookItems } from '../redux/books/booksSlice';
import Navbar from '../components/Navbar';
import '../components/Book.css';
import Form from '../components/Form';
import Book from '../components/Book';

export default function Books() {
  const { bookItems, loading } = useSelector((store) => store.books);
  const dispatcher = useDispatch();
  const keys = Object.keys(bookItems);
  useEffect(() => {
    if (!loading) {
      dispatcher(getBookItems());
    }
  }, [dispatcher, loading]);
  return (
    <>
      <Navbar />
      <ul className="books">
        {
          keys.map((key) => {
            const myNum = Math.floor(Math.random() * 100);
            return (<Book key={key} book={bookItems[key][0]} id={key} progVal={myNum} />);
          })
        }
        <Divider />
        <Form />
      </ul>
    </>
  );
}
