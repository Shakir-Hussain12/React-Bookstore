import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const dispatcher = useDispatch();

  return (
    <button
      className="cat-button"
      type="button"
      onClick={() => {
        dispatcher(checkStatus());
      }}
    >
      Check Status
    </button>
  );
}
