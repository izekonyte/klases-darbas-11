import movies from "./assets/movies.json"
import './App.css';
import React, {useState} from "react";
import Card from "./componets/Card";
import AddToModal from "./componets/AddToModal"
import Favorites from "./componets/Favorites";
import Nav from "./componets/Nav";

function App() {
  const [getCard, setCard]= useState({})
  const [getShowModal, setShowModal] = useState(false)
  const [getFav, setFav] = useState([])
  const [getShowFav, setShowFav] = useState(false)


   function showCard(card, index){
  setCard(card)
  setShowModal(true)
 }
    
 function addToFavorits(card, index){
  setFav([...getFav,card])

 }
  return (
    <div className="main-container">
      <Nav setShowFav={setShowFav} getCard={getCard}/>
      {getShowModal && 
      <AddToModal
       addToFavorits={addToFavorits} 
       getCard={getCard}
       setCard={setCard}
        setShowModal={setShowModal}/> }

{getShowFav && 
            <div className='modal-close'>
            <span onClick={() => setShowFav(false)} className='close'>&times;</span>
            
            <div className="fav-container">
              {getFav.map((x,i)=>
              <Favorites movies={x} key={i}/> 
              )} 
              </div>
            </div>
  }
     
      <div className="cards-container">
{movies.slice(0,100).map((x,i) =>
<Card movie={x} index={i} key ={i} showCard={showCard}/>
  )}
      </div>


    </div>
  );
}

export default App;
