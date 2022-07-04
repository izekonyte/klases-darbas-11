import React from 'react'
import { Rating } from 'react-simple-star-rating'

const Card = ({movie, showCard, index }) => {
  return (
    <div className='container'>
            <div className='card'>
                <img width={"150px"} src={movie.image} alt="" onClick={()=> showCard(movie)}/>
                <div className='text'>
                <p> Title English <span>{movie.titleEng}</span></p>
                <p>Pavadinimas Lietuviskai <span>{movie.titleLtu}</span></p>
                <p>Zanras <span>{movie.genre}</span></p>
                <p>Trukme <span>{movie.duration}</span></p>
                 <Rating  size={"20px"} readonly={true} ratingValue={movie.imbRaiting * 10} />
              
                </div>
           </div>
            </div>
  )
}

export default Card