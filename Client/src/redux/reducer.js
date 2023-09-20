import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./action-types"
import axios from 'axios';


let initialState = {
    myFavorites: [],
    allCharacters: [],
    currentState: "All",
    currentOrder: "A"
}


const reducer = (state= initialState, action) =>{
    let orderedArray = [];
    switch(action.type){
        case ADD_FAV:
            // console.log("añadiendo: ", action.payload);
         return { ...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload };

        case REMOVE_FAV:
            // console.log("borrando: ", action.payload);
            // console.log("allchars, ", state.allCharacters);
            // console.log("myFavorites: ", state.myFavorites);
            orderedArray = arrayOrder(action.payload, state.currentOrder);
            const filterFav = orderedArray.filter((character) => character.gender === state.currentState); 
            console.log(filterFav);
            console.log(state.currentState);

        if(state.currentState === "All"){
         return { ...state, 
         myFavorites: orderedArray,
         allCharacters: action.payload };
         }
        else{
         console.log(filterFav);
         console.log(state.currentState);
           return { ...state, 
            myFavorites: filterFav,
            allCharacters: action.payload };
        }
        //  return { ...state, 
        //     myFavorites: action.payload,
        //     allCharacters: action.payload };

        case FILTER:
         orderedArray = arrayOrder(state.allCharacters, state.currentOrder);
            if(action.payload == "All"){
                return {
                    ...state,
                    myFavorites: orderedArray,
                    currentState: action.payload
                }
            }
            else{
            let genderList = orderedArray.filter(character => character.gender == action.payload)
            return{
                ...state,
                myFavorites: genderList,
                currentState: action.payload
            }
        }
        case ORDER:
                if (state.currentState !== "All"){
                    let aux = state.allCharacters.filter((character) => character.gender == state.currentState); 
                    orderedArray = arrayOrder(aux, action.payload);
                    
                }
                else{
                    orderedArray = arrayOrder(state.allCharacters, action.payload);
                }
            return{
                ...state,
                myFavorites: orderedArray,
                currentOrder: action.payload

            }
             
        default:
            return {...state}
    }
}

const arrayOrder = (array, order) =>{
    if (order === "A"){
      const newArray = array.sort((a, b) =>{
        return a.id - b.id;
      })  
    return newArray;  
    }

    if(order === "D"){
      const newArray = array.sort((a, b) =>{
        return b.id - a.id;
      })  
    return newArray;
    }
}

export default reducer;