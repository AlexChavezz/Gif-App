import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


function GifExpertApp() {

  const [categories, setCategories] = useState([]);

  return (
    <>
      <AddCategory setCategories={setCategories} />
      {categories.map(category =>
        <GifGrid category={category} key={category} />
      )}
    </>
  );
}
export default GifExpertApp;