import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import NewPostForm from './components/NewPostForm';
import Error from './Error';
import Footer from './components/Footer';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  const handleNewBlogs = (newPost) => {
    setBlogs((prevBlogs) => [newPost, ...prevBlogs]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blogs" element={<BlogList blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/newpost" element={<NewPostForm addPost={handleNewBlogs} setBlogs={setBlogs} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;