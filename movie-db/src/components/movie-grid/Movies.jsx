

const Movies = ({name,image})=>{
    
    return (
        <div>
            <h4>{name}</h4>
            <img src={"https://image.tmdb.org/t/p/w500"+image} alt={name+" poster"} />
        </div>
    )
}

export default Movies;