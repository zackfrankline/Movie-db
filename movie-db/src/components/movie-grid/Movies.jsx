import Axios from "axios"
import {useState} from "react"
import Description from "../description/Description"
import "./movie.css"
import "../navbar/navbar.css"

const Movies = ({name,image,id})=>{

    const [movie,setMovie]=useState()
    const [check,setCheck] = useState(false)
    

    const handleMovie = async() =>{
        const {data}= await Axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=5048970431d4a664139799822733ebeb&language=en-US")
        setMovie(data);
        setCheck(true)
        
    }
    return (
        <>
        
           {
            check===true&&
           <Description title={movie.title}  
           overview={movie.overview} 
           releaseDate={movie.release_date} 
           rating={movie.vote_average}
           voteCount={movie.vote_count} />
        }
       

        <div className="movie-container" onClick={handleMovie}>
            <h4>{name}</h4>
            <img className="movie-poster" src={"https://image.tmdb.org/t/p/w500"+image} alt={name+" poster"} />
        </div>
        </>
    )
}

export default Movies;