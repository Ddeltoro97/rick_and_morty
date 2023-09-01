import Card from "./Card";
import reducer from "../redux/reducer";
import {connect} from 'react-redux';

function Favorites({myFavorites}){
    return(
        <div>
       {myFavorites?.map(fav =>{
        return(
            <Card
                  key={fav.id} 
                  id={fav.id} 
                  name={fav.name} 
                  species={fav.species} 
                  gender={fav.gender} 
                  image={fav.image}
                  onClose={fav.onClose}    />
        )
       })}
    |</div>
    )

}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);