import { Link } from 'react-router-dom';
import './Card.css';

const detailLinkStyle = {
   textDecoration: "none",
   color: "#c7f9cc"
}

export const Card = ({ 
   id, 
   onClose, 
   name,
   status, 
   species ,
   gender,
   origin,
   image
}) => {
   return (
      <div className="Card">
         <button className="closeBtn" onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} style={detailLinkStyle}>
            <h2>{name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img className="cardImg" src={image} alt='Image Card' width="100%" />
      </div>
   );
}
