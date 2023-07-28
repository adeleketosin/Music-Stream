const  { album } = require("../models/databaseSchema")

const updateAlbum = async (req, res)=>{
    const id = req.params.id
    const myAlbum= req.body;
    try {
        const updatedAlbum = await album.findByIdAndUpdate(id, {title: myAlbum.title, 
        genre: myAlbum.genre, releaseyear: myAlbum.releaseyear, artistid: myAlbum.artistid}, {new:true});
        console.log(id);
        res.status(201).json({message:"updated Album", updatedAlbum})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to update" })
    }
} 

module.exports = updateAlbum