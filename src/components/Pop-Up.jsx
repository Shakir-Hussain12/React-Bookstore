import '../App.css';
import React from 'react';
import Button from './Button';
import { showButton } from '../redux/categories/categoriesSlice';

const popUp = () => (
  <div className="pop">
    <h1>Under Construction...</h1>
    <Button cName="cat-button" tVal="button" func={showButton()} Value="Go Back" />
  </div>
);

export default popUp;
