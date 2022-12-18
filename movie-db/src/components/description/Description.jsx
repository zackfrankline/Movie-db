

const Description = ({title,overview,releaseDate,rating,voteCount}) =>{
    return (
        <>
          <h6>{title}</h6>
          <p>{overview}</p>
          <h6>{releaseDate}</h6>
          <p>{rating}/10 ({voteCount})</p>
        </>
    )
}

export default Description