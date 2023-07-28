const  { album } = require("../models/databaseSchema")

const deleteAlbum = async (req, res)=>{
    const id = req.params.id
    try {
        const deletedAlbum = await album.findByIdAndDelete(id)
        if (!deletedAlbum) {
            return res.status(404).json({message:"Album not Found"})
        };
        console.log(req.params)
        res.status(201).json({message:"Album deleted"})
    } catch (error) {
        console.log(error);
    }
} 

module.exports = deleteAlbum