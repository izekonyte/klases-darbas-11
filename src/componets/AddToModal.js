import React from 'react'
import { Rating } from 'react-simple-star-rating'

const AddToModal = ({getCard, setShowModal, addToFavorits}) => {
  return (
    <div className='modal'>
        <div className='modal-content'>
            <div className='modal-close'>
            <span onClick={() => setShowModal(false)} className='close'>&times;</span>
            </div>
            <div className='modal-body'>
            <div className='card'>
                <img width={"150px"} src={getCard.image} alt="" />
                <div className='text'>
                <p> Title English <span>{getCard.titleEng}</span></p>
                <p>Pavadinimas Lietuviskai <span>{getCard.titleLtu}</span></p>
                <p>Zanras <span>{getCard.genre}</span></p>
                <p>Trukme <span>{getCard.duration}</span></p>
                 <Rating  size={"20px"} readonly={true} ratingValue={getCard.imdbRating *10} />
                 <p>Description: <span>{getCard.description}</span></p>
                 <button onClick={() =>  addToFavorits={getCard} }>Add to favorites</button>
                </div>
            </div>

            </div>

        </div>


        
    </div>
  )
}

export default AddToModal