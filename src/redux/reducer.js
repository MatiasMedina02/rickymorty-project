import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types.js";

const initialState = {
	myFavorites: [],
	allCharacters: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case ADD_FAV:
			return {
				...state,
				myFavorites: [...state.allCharacters, action.payload],
				allCharacters: [...state.allCharacters, action.payload]
			}
		case REMOVE_FAV:
			const filteredId = state.myFavorites.filter(fav => fav.id !== action.payload);
			return {
				...state,
				myFavorites: filteredId,
				allCharacters: filteredId
			}
		case FILTER:
			const filteredChars = state.allCharacters.filter(char => char.gender === action.payload);
			return {
				...state,
				myFavorites: action.payload === "allCharacters" ? [...state.allCharacters] : filteredChars,
			}
		case ORDER: 
			const sortedChars = [...state.allCharacters];
			if(action.payload === "A"){
				sortedChars.sort((a, b) => a.id - b.id);
			}
			if(action.payload === "D"){
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