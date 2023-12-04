import BlogList from "../Components/BlogList";
import useFetch from "../Components/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); //Garb the data & call it on blogs

    return (
        <div className="home">
            {error && <div>{error}</div>}  {/* This is Conditional Rendering */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;