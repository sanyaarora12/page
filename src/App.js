import React, { useState, useEffect } from "react";
import Page from "./components/Page";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsperPage] = useState(8);
  const [filters, setFilters] = useState({});
  //const [images, setimages] = useState([]);

  // useEffect(() => {
  //   if (filters === "all") {
  //     setimages(data.results);
  //   } else {
  //     const filteredimg = data.results.filters((i) => i.tags === filters);
  //     setimages(filteredimg);
  //   }
  // }, [filters]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/users");
      setPosts(res.data);
      generateFilters(res.data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const generateFilters = (data) => {
    let filobj = {};
    data.forEach((item) => {
      console.log(item.tags);
      if (Array.isArray(item.tags)) {
        item.tags.forEach((items) => {
          if (!filobj[items]) {
            filobj[items] = true;
          }
        });
      }
    });
    setFilters(filobj);
  };
  console.log(filters);
  
  let finalArray = [];
  const getSelectedData = (filterkey) => {
    posts.forEach((it) => {
      if (Object.keys(it).find((k) => it[k] === filterkey)) {
        finalArray.push(it);
      }
    });
    console.log(finalArray);
  };

  return (
    <div className="container mt-5">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Posts per page
        </button>
        <ul class="dropdown-menu">
          <li>
            <div class="dropdown-item" onClick={() => setPostsperPage(2)}>
              2
            </div>
          </li>
          <li>
            <div class="dropdown-item" onClick={() => setPostsperPage(4)}>
              4
            </div>
          </li>
          <li>
            <div class="dropdown-item" onClick={() => setPostsperPage(6)}>
              6
            </div>
          </li>
        </ul>
      </div>
      {Object.keys(filters).map((i) => {
        return (
          <label>
            <input type="checkbox" onClick={getSelectedData(i)} />
            {i}
            <br />
          </label>
        );
      })}

      <Page posts={currentPosts} />
      {posts.length > 0 && (
        <Pagination
          postsPerPage={postsPerPage}
          paginate={paginate}
          posts={posts}
        />
      )}
    </div>
  );
};

export default App;
