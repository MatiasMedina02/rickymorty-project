import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css';

const Detail = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
			if (data.name) {
				setCharacter(data);
			} else {
				alert('No hay personajes con ese ID');
			}
	});
	return setCharacter({});
	}, [id])

	return (
		<>
			{id !== character.id ? (
				<h1>Ingresa el id de un Personaje existente</h1>
			) : (
				<div className="characterDiv" key={character.id}>
					<div className="characterInfo">
						<h2 className="nameCharacter">{character.name}</h2>
						<h2>Status: {character.status}</h2>
						<h2>Specie: {character.species}</h2>
						<h2>Gender: {character.gender}</h2>
						<h2>Origin: {character.origin.name}</h2>
					</div>
					<div className="characterImage">
						<img src={character.image} alt={character.name} style={{ width: "100%", height: "100%" }} />
					</div>
				</div>
			)}
		</>
	)
}

export default Detail