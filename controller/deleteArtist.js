const  { artist } = require("../models/databaseSchema")

const deleteAlbum = async (req, res)=>{
    const id = req.params.id
    console.log(id);
    try {
        const deletedAlbum = await artist.findByIdAndDelete(id)
        if (!deletedAlbum) {
            return res.status(404).json({message:"Artist not Found"})
        };
        console.log(req.params)
        res.status(201).json({message: "Artist deleted"})
    } catch (error) {
        console.log(error);
    }
} 

module.exports = deleteAlbum