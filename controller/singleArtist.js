const  { artist } = require("../models/databaseSchema")

const singleArtist = async (req, res)=>{
        console.log(req.params);
        const {error, value} = (req.body)
        try{
            const id = req.params.id
            const getArtist = await artist.findById(id).populate("albums")
            if (!getArtist){
                res.json({ message: "Artist not found" })
            }
            res.json({Message: getArtist}); 
        }catch(error){
            console.log(error);
        }
    }

module.exports = singleArtist