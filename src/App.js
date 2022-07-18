import React, { useState, useEffect } from 'react';
import './App.css';
import data from "./components/db.json";

const App = () => {
  // const [posts, setPosts] = useState([]);
 
  // useEffect(() => {
  //   const fetchPosts = async () => {
      
  //     const res = await axios.get('http://localhost:5000/users');
  //     setPosts(res.data);
     
  //   };

  //   fetchPosts();
  // }, []);

  // console.log(posts)

  return (
    <div className='container mt-5'>
       {
         data && data.map(item=>{
          return(
            <div>
              <img src={item.link} alt="" height="100px"/>
              </div>
          )
         })
       }
    </div>
  );
};

export default App;
