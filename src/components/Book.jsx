import React from 'react';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

export default function Book({
  id, title, author, category,
}) {
  return (
    <div className="Book-item">
      <p className="Book-details">
        {title}
        {' '}
        -
        {' '}
        {author}
        {' '}
        -
        {category}
        {' '}
        <Button
          cName="rem-button"
          tVal="button"
          func={removeBook(id)}
          Value="Remove"
        />
      </p>
    </div>
  );
}

Book.defaultProps = {
  title: 'none',
  author: 'none',
  category: 'none',
  id: 'none',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};
