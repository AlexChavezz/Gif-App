import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


function GifExpertApp() {

  //const categories = ['Dragon Ball', 'One Punch'];
  const [categories, setCategories] = useState([]);
  /*
  
  const handleAdd = () => {
    setCategories(categories => [...categories, newCategory]);
     
  }
  */
  return (
    <>
      <h2 className="animate__animated animate__bounce">Gif Expert App</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      {categories.map(category => 
      <GifGrid category={category} key={category} />
      )}
    </>
  );
}
export default GifExpertApp;