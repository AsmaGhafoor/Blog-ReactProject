import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        //blogs/1 because when ever we are deleting or editng we need an id. to we use params to extract id f
        //for api when api gets the request it extract the id blogs/:id from here then process it. 
        //jab jab id en api pr to /1 aese dyn
        
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {/* <h2>Blog Details - {id}</h2> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by{blog.author} </p>
                    <div>{blog.body}</div>

                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;