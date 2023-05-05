import { useDispatch, useSelector } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions.js";
import { useState } from "react";
import Card from "../Card/Card";
import "./Favorites.css";

const Favorites = () => {
	const { myFavorites } = useSelector(state => state);
	const dispatch = useDispatch();
	const [aux, setAux] = useState(false);

	const handleOrder = event => {
		dispatch(orderCards(event.target.value));
		setAux(true);
	}

	const handleFilter = event => {
		dispatch(filterCards(event.target.value));
	}

	return (
		<div className={myFavorites.length > 0 ? "Favorites" : "No-Favorites"}>
			<div className="Favorites-select">
				<select onChange={handleOrder} name="order" defaultValue="Order">
					<option value="Order" disabled>-- Order --</option>
					<option value="A">Ascendente</option>
					<option value="D">Descendente</option>
				</select>
				<select onChange={handleFilter} name="gender" defaultValue="Gender">
					<option value="Gender" disabled>-- Gender --</option>
					<option value="allCharacters">All Characters</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
			
			{myFavorites.length > 0 && 
				<div className="Favorites-card">
					{myFavorites.map(fav => (
						<Card 
							key={fav.id}
							id={fav.id} 
							name={fav.name} 
							gender={fav.gender}
							origin={fav.origin} 
							species={fav.species} 
							status={fav.status}
							image={fav.image}
						/>
					))}
				</div>
			}
		</div>
	)
}

export default Favorites;