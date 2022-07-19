// import React from "react";
// import "./App.css";
// import Checkbox from "./components/Checkbox";
// import Router from "./components/Routers";

// const App = () => {
//   return (
//     <div>
//       <Router />
//       {/* <Checkbox /> */}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import Page from "./components/Page";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

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

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Page posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
