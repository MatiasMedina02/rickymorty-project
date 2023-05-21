import { Card } from '../Card/Card';
import './Cards.css';

function Cards({ characters, onClose }) {
   return (
      <>
         {characters.length === 0 ? (
            <div className='noCards' style={{ width: "100%", height: "100vh" }}>
               <h1>Search a character by ID or randomly</h1>
            </div>
            ) : (
            <div className='Cards' >
               {characters.map((character, index) => (
                  <Card
                     key={index}
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
            )}
      </>
   );
}

export default Cards