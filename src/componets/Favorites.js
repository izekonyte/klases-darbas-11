import React from 'react'
import { Rating } from 'react-simple-star-rating'

const Favorites = ({movies}) => {
  return (
    <div className='favCard'>
                <img width={"150px"} src={movies.image} alt="" />
                <div className='text'>
                <p> Title English <span>{movies.titleEng}</span></p>
                <p>Pavadinimas Lietuviskai <span>{movies.titleLtu}</span></p>
                <p>Zanras <span>{movies.genre}</span></p>
                <p>Trukme <span>{movies.duration}</span></p>
                 <Rating  size={"20px"} readonly={true} ratingValue={movies.imdbRating *10} />
                 <p>Description: <span>{movies.description}</span></p>
                 
                 </div>
                 <button>Remove favorites</button>
                
    </div>
  )
}

export default Favorites