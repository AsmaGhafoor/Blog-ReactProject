import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "Lorem Ipsum...", author: "Asma", id: 1 },
        { title: "My new website", body: "Lorem Ipsum...", author: "mario", id: 2 },
        { title: "My new website", body: "Lorem Ipsum...", author: "Asma", id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Asma')} title="Asma's Blog" /> */}
        </div>
    );
}

export default Home;