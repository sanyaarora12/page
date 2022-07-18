import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nextpage from "./Nextpage";
import Posts from "./Posts";
import New from "./New";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/posts" element={<Posts/>} />
        <Route exact path="/" element={<New/>} />
        <Route exact path="/nextpage" element={<Nextpage />} />
        </Routes>
      </Router>
    </div>
  );
}
