const  { artist } = require("../models/databaseSchema");

const allArtist = async (req, res)=>{
    console.log(req.body);
    try {
        const allArtists= await artist.find({}).populate("albums")
    res.json({message: allArtists})        
    } catch (error) {
        res.status(400).send(error)
        console.error(error);
    }
}
module.exports = allArtist
