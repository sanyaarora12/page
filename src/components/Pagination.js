import React, { useEffect, useState } from 'react';

const Pagination = ({ paginate,posts,postsPerPage }) => {
  const[pageNumber,setPageNumber]=useState([])

  useEffect(()=>{
    console.log(Math.ceil(posts.length/postsPerPage ))
  
    setPageNumber(new Array(Math.ceil(posts.length/postsPerPage )).fill(0))
      
    },[postsPerPage])

 
   console.log(pageNumber)
  return (
    <nav>
      <ul className='pagination'>
        {pageNumber.map((number,index )=> 
          {
            console.log(index)
            return  <li key={number} className='page-item'>
            <a onClick={() => paginate(index+1)} href='!#' className='page-link'>
              {index+1}
            </a>
          </li>}
        )}
      </ul>
      
    </nav>
  );
};

export default Pagination;