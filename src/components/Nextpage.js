import React from "react";
import { Link } from "react-router-dom";
import data from "./db.json";

export const Nextpage = () => {
  return (
    <div>
      <ul>
        {data &&
          data.slice(8, 16).map((item) => {
            return (
              <div>
                <img src={item.link} alt="" height="100px" />
              </div>
            );
          })}
      </ul>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};
export default Nextpage;
