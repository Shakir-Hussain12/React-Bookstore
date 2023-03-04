import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Paper } from '@mui/material';
import { delBookItem } from '../redux/books/booksSlice';
import Button from './Button';
import './Book.css';

export default function Book({ book, id, progVal }) {
  const { title, author, category } = book;
  return (
    <li className="Book-item">
      <Paper className="Book-details" elevation={12}>
        <div className="left">
          <div className="inner-content">
            <p className="cat">{category}</p>
            <h2 className="header">{title}</h2>
            <p className="author">{author}</p>
          </div>
          <div className="Buttons">
            <button type="button">Comments</button>
            {' | '}
            <Button
              cName="rem-button"
              tVal="button"
              func={delBookItem(id)}
              Value="Remove"
            />
            {' | '}
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="progress-details">
          <CircularProgress variant="determinate" value={progVal} className="circle" />
          <p>
            <span className="percent">
              {progVal}
              %
            </span>
            Completed
          </p>
        </div>
        <div className="additional">
          <p className="current">current chapter</p>
          <h3 className="chapter">chapter 17</h3>
          <button type="button" className="update">Update Progress</button>
        </div>
      </Paper>
    </li>
  );
}

Book.defaultProps = {
  book: {
    title: '',
    author: '',
    category: '',
  },
  id: '',
  progVal: '',
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }),
  id: PropTypes.string,
  progVal: PropTypes.number,
};
