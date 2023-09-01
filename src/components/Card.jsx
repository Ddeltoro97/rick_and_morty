import {NavLink, useLocation} from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   const {key, id, name, species, gender, image, onClose, addFav, removeFav, myFavorites} = props;

   let [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if (isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true)
         addFav({key, id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   let location =useLocation();

   return (
      <div>
         {location.pathname == '/home'? <button onClick={()=>onClose(id)}>X</button> : ''}
         {/* // (<button onClick={()=>onClose(id)}>X</button>) */}
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         <h2>{id}</h2>
         <NavLink to = {`/detail/${id}`}>
         <h2>{name}</h2>
         </NavLink>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='NA' />
      </div>
   );
}

function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }

}

function mapDispatchToProps(dispatch){
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card);