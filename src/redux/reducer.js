import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./action-types"


const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state= initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            let filteredList = state.myFavorites.filter(character => character.id != action.payload)
            return{
                ...state,
                myFavorites: filteredList
            }
        case FILTER:
            if(action.payload == "All"){
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            }
            else{
            let genderList = state.allCharacters.filter(character => character.gender === action.payload)
            return{
                ...state,
                myFavorites: genderList
            }
        }
        case ORDER:
            let orderedList = [];
            if (action.payload === "A" ){
                orderedList = state.allCharacters.sort((a, b) =>{
                    return a.id - b.id;
                })
            }
            else{
                orderedList = state.allCharacters.sort((a, b) =>{
                    return b.id - a.id;
                })
            }
            return{
                ...state,
                myFavorites: orderedList
            }
             
        default:
            return {...state}
    }
}

export default reducer;