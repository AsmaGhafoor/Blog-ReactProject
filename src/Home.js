import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([null])

    // const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        // console.log('Use Effect Run!');
        // console.log(blogs);
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data=>{
                setBlogs(data);// set nhin kia tha apney useState mein null jaa rahi thi values blogs={blogs} idhr
            })
    }, []);// what does empty array mean? btayen whatsap pr

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Asma')} title="Asma's Blog" /> */}
            {/* <button onClick={() => setName('AsmaG')}>Change Name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Home;