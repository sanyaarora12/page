import React from 'react'

export const Posts = ({posts}) => {
  return (
    <div>
      <ul>
        {posts.map(post=>(
            <li key={post.id}>
                {post.link}
            </li>
        ))}
      </ul>
    </div>
  )
}
// {
//     data && data.map(item=>{
//      return(
//        <div>
//          <img src={item.link} alt="" height="100px" />
//          </div>
//      )
//     })
//   }