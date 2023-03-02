import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({
  id, title, author, category,
}) {
  const dispatcher = useDispatch();

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
        <button
          className="rem-button"
          type="button"
          onClick={() => {
            dispatcher(removeBook(id));
          }}
        >
          Remove

        </button>
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
