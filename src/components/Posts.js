import React from "react";
import { Link } from "react-router-dom";
import data from "./db.json";

export const Posts = () => {
  return (
    <div>
      <ul>
        {data &&
          data.map((item) => {
            return (
              <div>
                <img src={item.link} alt="" height="100px" />
              </div>
            );
          })}
      </ul>
      <button>
        <Link to="/nextpage">Next Page</Link>
      </button>
    </div>
  );
};
export default Posts;

