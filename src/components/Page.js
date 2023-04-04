import React from 'react';

const Page = ({ posts}) => {
  
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          <img src={post.link} alt="" height="100px" />
        </li>
      ))}
    </ul>
  );
};

export default Page;
