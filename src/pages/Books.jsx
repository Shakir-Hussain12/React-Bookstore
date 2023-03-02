import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/Form';
import Book from '../components/Book';

export default function Books() {
  const { bookItems } = useSelector((store) => store.books);
  return (
    <div className="books">
      {
        bookItems.map((item) => (
          <Book
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))
      }
      <Form />
    </div>
  );
}
