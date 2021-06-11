import { useHistory, useParams } from "react-router";
import useFetch from './useFetch' ;

const BlogDetails  = () => {
    const { id } = useParams();
    const {data:blog , ispending , error} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const handleclick = () => {
        fetch('http://localhost:8000/blogs/'+blog.id , {
            method : 'DELETE'
        }) .then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            { ispending && <div> loading.. </div>}
            { error && <div> {error} </div>}
            { blog && (
                <artice>
                    <h2>{blog.title}</h2>
                    <p>wriiten by {blog.author}</p>
                    <div> {blog.body} </div>
                    <button onClick={handleclick}> delete </button>
                </artice>
                
                )}
        </div>
     );
}
 
export default BlogDetails ;
