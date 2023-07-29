const { artist } = require("../models/databaseSchema")
const { artistSchema }  = require("../models/JoiSchema")
 
const createArtist = async (req, res) => { 
    const {error, value} = artistSchema.validate(req.body)
    console.log(req.body);
    if(error){
        console.error(error);
    }
    console.log(value)
    try {
        const newSong = new artist ({
            name:value.name,
            genre: value.genre,
            artistEmail: value.artistEmail,
            image: req.file.path, 
            albums : []
        })
        console.log(newSong)
        const song = await newSong.save();
        res.status(200).json({message:"Artist created", song})
         console.log(song)
    } catch (error) {
        console.error(error);
    }
}

module.exports = createArtist