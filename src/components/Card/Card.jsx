import { Link } from 'react-router-dom';
import './Card.css';
import { addFav, removeFav } from '../../redux/actions.js'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const Card = ({ id, gender, name, image, onClose, origin, species, status}) => {
   const dispatch = useDispatch();
   const { myFavorites } = useSelector(state => state)
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false);
         dispatch(removeFav(id));
      } 
      if(isFav === false) {
         setIsFav(true);
         dispatch(addFav({ id, gender, name, image, origin, species, status}))
      }
   };

   useEffect(() => {
      myFavorites.forEach(fav => {
         if(fav.id === id){
            setIsFav(true);
         }
      })
   }, [myFavorites])

   return (
      <div className="Card">
         <div className="Card-btn">
         {isFav ? (
            <button className='likeBtn' onClick={handleFavorite}>❤️</button>
         ) : (
            <>
               <button className='dislikeBtn' onClick={handleFavorite}>🤍</button>
               <button className="closeBtn" onClick={() => onClose(id)}>X</button>
            </>
         )}
         </div>
         <img className="Card-img" src={image} alt={name} />
         <Link to={`/detail/${id}`} style={{textDecoration: "none", color: "#c7f9cc"}}>
            <h2>{name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
      </div>
   );
}

export default Card;