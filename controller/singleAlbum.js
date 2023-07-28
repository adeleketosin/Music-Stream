const  { album } = require("../models/databaseSchema")

const singleAlbum = async (req, res)=>{
        console.log(req.params);
        const {error, value} = (req.body)
        try{
            const id = req.params.id
            const getAlbum = await album.findById(id).populate("artistid")
            if (!getAlbum){
                res.json({ message: "Album not found" })
            }
            res.json({Message: getAlbum}); 
        }catch(error){
            console.log(error);
        }
    }

module.exports = singleAlbum