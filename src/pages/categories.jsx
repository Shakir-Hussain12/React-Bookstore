import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import PopUp from '../components/Pop-Up';
import { checkStatus } from '../redux/categories/categoriesSlice';
import '../components/Book.css';

export default function Categories() {
  const { underConstruction, hideButton } = useSelector((store) => store.categories);
  return (
    <div className="cat-page">
      <Navbar />
      {underConstruction && <PopUp />}
      {!hideButton && <Button cName="cat-button" tVal="button" func={checkStatus()} Value="Check Status" />}
    </div>
  );
}
