import React, { useEffect, useState } from 'react'
import '../App.css'
import LandingPage from './LandingPage'
import { Link } from 'react-router-dom'


const BlogList = ({ blogs, setBlogs }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data);
                isLoading(false)
            })
            .catch((error) => console.error('Error loading', error))


    }, [setBlogs])

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            setIsDeleting(true);
            fetch(`http://localhost:5000/blogs/${id}`, {
                method: 'DELETE'
            })
                .then((response) => {
                    if (response.ok) {
                        setBlogs((prevBlogs) => prevBlogs.filter((b) => b.id !== id))
                    } else {
                        console.error('Failed to  load the blogs')
                    }
                })
                .catch((error) => console.error('Error: ', error))
                .finally(() => setIsLoading(false))
        }
        if (isLoading) {
            return (
                <div className='Loading'>
                    <p>Loading</p>
                </div>
            )
        }
        if (blogs.length === 0) {
            return (
                <div>
                    <p>No blogs available for display at the time.</p>

                </div>
            )
        }
    }
    return (
        <div>
            <LandingPage />
            <div className="blog-list">
                {blogs.map((blog) =>
                (
                    <div key={blog.id} className='blog-card'>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <img src={blog.image} alt="" />
                            <p>{blog.content.substring(0, 100)}...</p>

                        </Link>
                        <button className='delete-button' onClick={() => handleDelete(blog.id)} disabled={isDeleting}>
                            {isDeleting ? 'Deleting' : "Delete post"}
                        </button>
                    </div>
                )

                )}
            </div>

        </div>
    )
}

export default BlogList
