import React,{useState,useEffect} from 'react';
import axios from 'axios';

export const Nextpage = () => {
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
        {posts.slice(8,16).map(post=>(
            <li key={post.id}>
                <img src={post.link} alt="" height="100px"/>
            </li>
        ))}
      </ul>
    </div>
  )
}
export default Nextpage;