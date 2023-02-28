import React from 'react';

export default function Form() {
  return (
    <form>
      <label htmlFor="book-title">
        Book Title :
        <input placeholder="Title" type="text" id="book-title" />
      </label>
      {' '}
      <label htmlFor="book-author">
        Book Author :
        <input placeholder="Author" type="text" id="book-author" />
      </label>
      {' '}
      <button type="submit">Add Book</button>
    </form>
  );
}
