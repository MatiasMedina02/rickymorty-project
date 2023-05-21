import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
	myFavorites: [],
	allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type){
		case ADD_FAV:
			return {
				...state,
				myFavorites: [...state.myFavorites, payload],
				allCharacters: [...state.allCharacters, payload]
			}
		case REMOVE_FAV:
			const newFavorites = state.allCharacters.filter(character => character.id !== payload)
			return {
				...state,
				myFavorites: newFavorites,
				allCharacters: newFavorites
			}
		case FILTER:
			const filteredChars = state.allCharacters.filter(character => character.gender === payload);
			return {
				...state,
				myFavorites: payload === "allCharacters" ? [...state.allCharacters] : filteredChars,
			}
		case ORDER: 
			const sortedChars = [...state.allCharacters];
			if(payload === "A"){
				sortedChars.sort((a, b) => a.id - b.id);
			}
			if(payload === "D"){
				sortedChars.sort((a, b) => b.id - a.id);
			}
			return {
				...state,
				myFavorites: sortedChars
			}
		default:
			return {...state}
	}
}

export default reducer;