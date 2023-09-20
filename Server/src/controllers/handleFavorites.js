let myFavorites = [];

function postFav(req, res) {
    try {
      const character = req.body;
  
      if (!character.name || !character.gender) throw new Error ( "Missing info")
      myFavorites.push(character);
    res.status(200).json(myFavorites);
    }catch (error) {
      res.status(400).json({error:error})
    }
  }

const deleteFav = (req, res) =>{
    try{
        const {id} = req.params;
        myFavorites = myFavorites.filter((character) => character.id != id);

        if(myFavorites.length === 0){
            res.status(200).json([]);
        } else{
            res.status(200).json(myFavorites);
        }
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports={postFav, deleteFav};

