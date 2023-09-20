// function getCharById(res, id){
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         const char ={
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status

//         }
//         res
//         .writeHead(200, {"Content-type": "application/json"})
//         .end(JSON.stringify(char))
//     })
//     .catch(err => res
//         .writeHead(500, {"Content-type": "text-plain"})
//         .end(`No hay personaje con el id: ${id}`))
    
// }

const axios = require("axios");
const { response } = require("express");

// const getCharById = (req, res) =>{
//     const {id} = req.params;
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({status, name, species, origin, image, gender}) =>{
//         if (id && name){
//             const character = {
//                 id,
//                 name,
//                 species,
//                 origin,
//                 image,
//                 gender,
//                 status
//             }
//             return res.status(200).json(character)
//         }
        
//             return res.status(404).send("Not found");
        
//     })
//     .catch(error => res.status(500).send(error.message))
// }

const getCharById = async (req,res) =>{
    try {
        const {id} = req.params;
        const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        
        if (data.name){
            const character = {
                id,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                status: data.status
            }
            return res.status(200).json(character);
        }
        else{
            return res.status(404).send("Not found"); 
        }
    } catch (error) {
        res.status(500).send(error) 
    }
}

module.exports = {getCharById}