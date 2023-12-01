import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    // const [name, setName] = useState('mario');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        // console.log('Use Effect Run!');
        // console.log(blogs);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resources')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);// set nhin kia tha , useState mein null jaa rahi thi values blogs={blogs} idhr
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                    // console.log(err.message)
                })
        }, 1000)
    }, []);// what does empty array mean?

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