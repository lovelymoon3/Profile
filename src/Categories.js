import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

const Categories = ({categories, filterItems}) => {

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button type='button' className='job-btn' key={index} onClick={()=> filterItems(category)}>
            {category}
          </button>

        );
      })}
    </div>
  );
};

export default Categories;