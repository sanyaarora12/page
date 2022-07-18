import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Posts = () => {
    const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/users');
      setPosts(res.data);
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <ul>
        {posts.slice(0,8).map(post=>(
            <li key={post.id}>
                <img src={post.link} alt="" height="100px"/>
            </li>
        ))}
      </ul>
      <button>
        <Link to="/nextpage">
        Next Page
        </Link>
        </button>
    </div>
  )
}
export default Posts;
// {
//     data && data.map(item=>{
//      return(
//        <div>
//          <img src={item.link} alt="" height="100px" />
//          </div>
//      )
//     })
//   }