import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ title, author }) {
  return (
    <div className="Book-item">
      <p className="Book-details">
        {title}
        {' '}
        -
        {' '}
        {author}
        {' '}
        <button className="rem-button" type="button">Remove</button>
      </p>
    </div>
  );
}

Book.defaultProps = {
  title: 'none',
  author: 'none',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
