import React, { useEffect, useState } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import CommentSection from './CommentSection'

const BlogPost = () => {
  const { id }= useParams()
  const [blog, setBlog]= useState(null)

  useEffect(()=>{
    fetch(`http://localhost:5000/blogs/${id}`)
    .then((response)=>response.json())
    .then ((data)=>setBlog(data))
  }, [id])

  if(!blog)
    return <p>Loading ...</p>
  
  return (
    <div>
      <div className='blog-post-container'>
        <div className="blog-post-full">
          <div className="blog-post-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt={blog.title}
          />
          </div>
          <div className="blog-post-details">
            <h2 className='blog-post-title'>{blog.title}</h2>
            <p className='blog-post-author'> By: {blog.author}</p>
            <div className="blog-post-content">
              <p>{blog.content}</p>
            </div>
            <CommentSection blogId={blog.id} comments={blog.comments} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
