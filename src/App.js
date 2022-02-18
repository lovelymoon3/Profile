import React, { useState } from 'react';

import items from './data';
import Job from './Job';
import Categories from './Categories';

const allCategories = ['Overview',...new Set(items.map((item)=> item.category))];

function App() {
  const [jobs, setJobs] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'Overview'){
      setJobs(items);
      return;
    }

    const newItems = items.filter((item)=> item.category === category)
    setJobs(newItems);
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>KAYLEY MOON</h2>
        <h3  style={{color: '#2caeba'}}>profile</h3>
        <div className='underlinde'></div>
      </div>
      <div className='jobs-center'>
        <Categories categories={categories} filterItems={filterItems} />
        <Job jobs = {jobs} />
      </div>
    </section>
  );
}

export default App;
