const  { album } = require("../models/databaseSchema");

const allAlbum = async (req, res)=>{
    console.log(req.body);
    try {
        const allAlbums= await album.find({}).populate('artistid');
    res.json({message: allAlbums})        
    } catch (error) {
        res.status(400).send(error)
        console.error(error);
    }
}
module.exports = allAlbum
