import React from 'react';
import PropTypes from 'prop-types';
import { delBookItem } from '../redux/books/booksSlice';
import Button from './Button';

export default function Book({ book, id }) {
  const { title, author, category } = book;
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
          func={delBookItem(id)}
          Value="Remove"
        />
      </p>
    </div>
  );
}

Book.defaultProps = {
  book: {
    title: '',
    author: '',
    category: '',
  },
  id: '',
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }),
  id: PropTypes.string,
};
