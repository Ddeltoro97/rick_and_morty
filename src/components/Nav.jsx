import SearchBar from "./SearchBar";

export default function Nav({onSearch, randomHandler}){

    return(
        <div>
        <SearchBar onSearch={onSearch}/>
        <button onClick={randomHandler}>ADD RANDOM</button>
        </div>
    )
};