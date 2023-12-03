// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const [name, setName] = useState('mario');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); //Garb the data & call it blogs

    return (
        <div className="home">
            {/* <Blogs blogs={blogs} title="All Blogs!" /> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Asma')} title="Asma's Blog" /> */}
            {/* <button onClick={() => setName('AsmaG')}>Change Name</button> */}
            {/* <p>{name}</p> */}
            {error && <div>{error}</div>}  {/* This is Conditional Rendering */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;