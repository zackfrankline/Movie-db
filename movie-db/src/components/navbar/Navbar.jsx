import {useState,useEffect} from "react"
import Axios from "axios"
import Movies from "../movie-grid/Movies";
import Logo from "../../assests/logo/logo.svg"
import "../navbar/navbar.css"

const Navbar = () =>{

    const[input,setInput]= useState("");
    const [movies,setMovies] = useState()
    const [movie,setMovie] = useState()
    const [initialCall,setInitialCall] = useState(false)
    const [checkInput,setCheckInput] = useState(false)

    useEffect(()=>{
        // recent Movies handler 
        const getRecent = async () => {
            try{
                const {data:{results}}=await Axios.get(
                    "https://api.themoviedb.org/3/movie/popular?api_key=5048970431d4a664139799822733ebeb&language=en-US&page=1&append_to_response=images")
                // console.log(results)
                setMovies(results)
                setInitialCall(true)
                
            }
            catch(e){
                console.log(e)
            }
        }
        getRecent();    
    },[])

    
    
   
    // search form handler
    const handleSubmit = async(e)=>{

        e.preventDefault();

        try{
            const result= await Axios.get("https://api.themoviedb.org/3/search/movie?api_key=5048970431d4a664139799822733ebeb&language=en-US&query="+input)
            const {data:{results}}=result;
            // console.log(results)
            setCheckInput(true)
            setMovie(results)
        }
        catch(e){
            console.log(e)
        }
    }
    

    return (
        <>

            <div className="navbar">

            <img className="logo" src={Logo} alt="Logo" />
            <form type="submit" onSubmit={handleSubmit}>
                <input type="text" 
                value={input} 
                placeholder="search for a movie"
                onChange={(e)=>{setInput(e.target.value)}}  />
            </form>
            </div>
            <hr />
            <div className="movie-grid">

            { 
               
               checkInput===true?
               movie.map((title,index)=>{
                   return (
                       <Movies key={index} id={title.id} name={title.original_title}  image={title.poster_path} />
                       )
                    }):initialCall===true&&
                    movies.map((title,index)=>{
                        
                        return (
                            <Movies key={index} id={title.id} name={title.original_title}  image={title.poster_path} />
                            )
                        })
                    }
            </div>

        </>

        
    )
}

export default Navbar;