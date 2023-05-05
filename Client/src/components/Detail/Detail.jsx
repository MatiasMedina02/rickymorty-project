import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Detail = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios(`http://localhost:3001/rickandmorty/character/${id}`)
		.then(({ data }) => {
			if (data.name) {
				setCharacter(data);
				setIsLoading(false);
			}
		}).catch(error => {
		console.error(error);
		setIsLoading(false)
	});
	return setCharacter({});
	}, [id])

	return (
		<>
			{isLoading ? <LoadingSpinner /> : parseInt(id) !== character.id ? (
				<h1 style={{ marginTop: "1rem", color:"#b5e2fa" }}>Ingresa el id de un Personaje existente</h1>
			) : (
				<div className="characterDiv" key={character.id}>
					<div className="characterInfo">
						<h2 className="nameCharacter">{character.name}</h2>
						<h2>
							<span className="titleCharacter">Status: </span>{character.status}
						</h2>
						<h2>
							<span className="titleCharacter">Specie: </span>{character.species}
						</h2>
						<h2>
							<span className="titleCharacter">Gender: </span>{character.gender}
						</h2>
						<h2>
							<span className="titleCharacter">Origin: </span>{character.origin.name}
						</h2>
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