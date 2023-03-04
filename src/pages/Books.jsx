import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import { getBookItems } from '../redux/books/booksSlice';

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
      <div className="books">
        {
          keys.map((key) => (<Book key={key} book={bookItems[key][0]} id={key} />))
        }
        <Form />
      </div>
    </>
  );
}
