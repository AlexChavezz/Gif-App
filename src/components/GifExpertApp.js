import React, { useState } from 'react';
import AddCategory from './AddCategory';
import { Alert } from './Alert/Alert';
import GifGrid from './GifGrid';


function GifExpertApp() {

  const [categories, setCategories] = useState([]);

  const [alertLogin, setAlertLogin] = useState(false);

  return (
    <>
      {
        alertLogin &&
        <Alert setAlertLogin={setAlertLogin}/>
      }
      <AddCategory setCategories={setCategories}  />
      {categories.map(category =>
        <GifGrid category={category} key={category} setAlertLogin={setAlertLogin} />
      )}
    </>
  );
}
export default GifExpertApp;