import { Card } from '../Card/Card';
import './Cards.css';

export default function Cards({ characters, onClose }) {
   return (
      <div className='Cards'>
         {characters.length === 0 ? (
            <div style={{ color:'#b5e2fa', marginLeft: "7px" }}>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#b5e2fa" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <line x1="12" y1="5" x2="12" y2="19" />
               <line x1="18" y1="11" x2="12" y2="5" />
               <line x1="6" y1="11" x2="12" y2="5" />
               </svg>
               <h1>Search a character by ID or randomly </h1>
            </div>
         ) : characters.map(character => (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
            />
         ))}
      </div>
   );
}
