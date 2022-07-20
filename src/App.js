import React, { useState, useEffect } from "react";
import Page from "./components/Page";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsperPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/users");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // const numOfPages=
  return (
    <div className="container mt-5">
      <div class="dropdown">
  <button  class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Posts per page
  </button>
  <ul class="dropdown-menu">
    <li><div class="dropdown-item" onClick={()=>setPostsperPage(1)}>1</div></li>
    <li><div class="dropdown-item" onClick={()=>setPostsperPage(2)} >2</div></li>
    <li><div class="dropdown-item" onClick={()=>setPostsperPage(3)}>3</div></li>
  </ul>
</div>
      <Page posts={currentPosts} />
      {posts.length>0 && 
      <Pagination
        postsPerPage={postsPerPage}
        paginate={paginate}
        posts={posts}
      />

 }
 
    </div>
  );
};

export default App;
