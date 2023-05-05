import { useState } from "react";
import './SearchBar.css';
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const randomId = id =>  Math.ceil(Math.random() * id);

   const handleChange = event => setId(event.target.value);

   const addRandomCharacter = () => onSearch(randomId(826));

   const addCharacter = () => {
      onSearch(id);
      setId("");
   }

   return (
      <div className="SearchBar">
         <Link to="/home">
            <button onClick={addRandomCharacter} className="randomBtn" type="button">
               <i className="icon fa-solid fa-shuffle" style={{ color: "black" }}></i>
            </button>
         </Link>
         <input className="agregarInput" onChange={handleChange} value={id} type='search' placeholder="Search character..." />
         <Link to="/home">
            <button className="agregarBtn" onClick={addCharacter} type="button">
               Add card
            </button>
         </Link>
      </div>
   );
}
