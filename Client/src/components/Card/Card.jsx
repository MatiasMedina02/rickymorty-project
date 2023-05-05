import { Link } from 'react-router-dom';
import './Card.css';
import { addFav, removeFav } from '../../redux/actions.js'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Iconos Gender
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

// Iconos Status
import { FaSkullCrossbones } from "react-icons/fa";
import { BsQuestionLg, BsFillHeartPulseFill } from "react-icons/bs";

export const Card = ({ id, gender, name, image, onClose, origin, species, status}) => {
   const dispatch = useDispatch();
   const { myFavorites } = useSelector(state => state);
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

   let statusType, genderType;
   
   // Condicionales Status
   if(status === "Alive"){
      statusType = "Card-content__status-alive";
   } 
   if(status === "Dead"){
      statusType = "Card-content__status-dead";
   } 
   if(status === "unknown"){
      statusType = "Card-content__status-unknown";
   }

   // Condicionales Gender
   if(gender === "Male"){
      genderType = "Card-content__gender-male";
   }
   if(gender === "Female"){
      genderType = "Card-content__gender-female";
   }
   if(gender === "Genderless"){
      genderType = "Card-content__genderless";
   }
   if(gender === "unknown"){
      genderType = "Card-content__gender-unknown";
   }

   useEffect(() => {
      if(myFavorites.length > 0){
         myFavorites.forEach(fav => {
            if(fav.id === id){
               setIsFav(true);
            }
         })
      }
   }, [myFavorites])

   return (
      <div className="Card">
         <div className="Card-btn">
         {isFav ? (
            <button className='likeBtn' onClick={handleFavorite}>❤️</button>
         ) : (
            <>
               <button className='dislikeBtn' onClick={handleFavorite}>🤍</button>
               <button className="closeBtn" onClick={() => onClose(id)}>
                  <i className="fa-solid fa-x"></i>
               </button>
            </>
         )}
         </div>
         <img className="Card-img" src={image} alt={name} />
         <div className="Card-content">
            <Link to={`/detail/${id}`} className='Card-img__link'>
               <h2>{name}</h2>
            </Link>
            <div className="Card-content__info">
               <div className="Card-content__div">
                  <h2 className={genderType}>
                     {gender === "Male" && <BsGenderMale /> || gender === "Female" && <BsGenderFemale />}
                     {gender}
                  </h2>
               </div>
               <div className="Card-content__div">
                  <h2 className={statusType}>
                     {status}
                     {status === "Alive" && <BsFillHeartPulseFill /> || status === "Dead" && <FaSkullCrossbones /> || status === "unknown" && <BsQuestionLg />}
                  </h2>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Card;