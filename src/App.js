import React from 'react';
import './App.css';
// import data from "./components/db.json";
// import Posts  from './components/Posts';
// import axios from "axios";
// import Nextpage from './components/Nextpage';
import  Router  from './components/Routers';

const App = () => {
  // const [posts, setPosts] = useState([]);
 
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get('http://localhost:5000/users');
  //     setPosts(res.data);
  //   };

  //   fetchPosts();
  // }, []);

  // const newPosts=posts.slice(0,8)
  // const nextPosts=posts.slice(8,16)

  return (
    <div className='container mt-5'>
      {/* <Posts posts={newPosts} /> */}
      {/* <Nextpage posts={nextPosts}/> */}
      <Router/>
    </div>
  );
};


export default App;
