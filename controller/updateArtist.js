const  { artist } = require("../models/databaseSchema")

const updateArtist = async (req, res)=>{
    const id = req.params.id
    const myArtist = req.body;
    try {
        const updatedArtist = await artist.findByIdAndUpdate(id, {name: myArtist.name, genre: myArtist.genre}, {new:true});
        console.log(updatedArtist);
        res.status(201).json({message:"updated Artist", updatedArtist})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to update" })
    }
} 

module.exports = updateArtist