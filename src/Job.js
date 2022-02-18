import React, { useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'
// import JobDesc from '/JobDesc'
import items from './data';

const Job = ({jobs}) => {
    // const [jobDesc, setJobDesc] = useState(items);

    return (
        <>
        {
            jobs.map((job)=>{
                const {id, title, category, dates, desc} = job;
                return (
        <article key={id} className='job-info'>
          <h3 >{title}</h3>
          <h4>{category}</h4>
          <p className='job-date'>{dates}</p>
          {/* <JobDesc items={jobDesc}/> */}
          {/* {jobs.map((duty, index)=>{
             const {company, dates, duties, title} = jobs[id];
            return  */}
            
              {
                desc.map((des, index)=>{
                  return (
                      <div key={index }className='job-desc'>
                      <FaAngleDoubleRight className='job-icon'>
                      </FaAngleDoubleRight>
                      <p>{des}</p>
                      </div>
                  )
                })
            }
             
          {/* })} */}
        </article> 
                );
            })
        }
        </>
                 
    );
}

export default Job;