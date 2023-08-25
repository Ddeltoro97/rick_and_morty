import {NavLink} from 'react-router-dom';

export default function Card(props) {
   const {key, id, name, status, species, gender, origin, image, onClose} = props;

   return (
      <div>
         (<button onClick={()=>onClose(id)}>X</button>)
         <h2>{id}</h2>
         <NavLink to = {`/detail/${id}`}>
         <h2>{name}</h2>
         </NavLink>
         {/* <h2>{props.status}</h2> */}
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {/* <h2>{props.origin}</h2> */}
         <img src={image} alt='NA' />
      </div>
   );
}
