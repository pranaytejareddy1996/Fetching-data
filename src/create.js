import {useState} from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {

    const [ title , setTitle ] = useState('weoing');
    const [body , setBody]  = useState('');
    const [ author, setAuthor ] = useState('mario');
    const [ ispending, setIspending ] = useState(false);
    const history = useHistory();

    const handlesubmit = (e) => {
        e.preventDefault();
        const blog = { title , body , author};
        
        setIspending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST' ,
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(blog)
        }) .then( () => {
            console.log('blog added');
            setIspending(false);
            history.push('/');
            })
    }

    return ( 
        <div className="create">
            <h2>add a new blog </h2>
            <form onSubmit = {handlesubmit}>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
                </input>
            
                <label>Blog Body:</label>
            <textarea       
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
            </textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>   
                
                { !ispending && <button>add blog</button> }
                { ispending && <button disabled> adding blog... </button>}
                </form>        
        </div>
     );
}
 
export default Create ;
