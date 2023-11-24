import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "Lorem Ipsum...", author: "mario", id: 1 },
        { title: "My new website", body: "Lorem Ipsum...", author: "mario", id: 2 },
        { title: "My new website", body: "Lorem Ipsum...", author: "mario", id: 3 }
    ])

    return (
        <div className="home">
            <BlogList />
        </div>
    );
}

export default Home;