import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

export default function Books() {
  return (
    <div className="books">
      <Book title="My Life" author="Shakir" />
      <Book title="My Project" author="Hussain" />
      <Form />
    </div>
  );
}
