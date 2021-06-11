import Bloglist from './Bloglist'
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs , ispending , error} = useFetch('http://localhost:8000/blogs');
    const {data:person , isPending , Error } = useFetch('https://api.randomuser.me/');
   
    return ( 
        <div className="home">
            {error && <div> {error} </div> }
            {ispending && <div> loading... </div>}
            {blogs && <Bloglist blogs = {blogs} title = 'my blogs'/>}   

            {person &&(
                <div>
                    <h1>The information down below is fetched from an external url</h1>
                    <p>User's first name : {person.results[0].name.first}</p>
                    <p>User's last name : {person.results[0].name.last}</p>
                    </div>                
            )  }  
            
        </div>
        );
}
 
export default Home;

//npx json-server --watch data/db.json --port 8000
