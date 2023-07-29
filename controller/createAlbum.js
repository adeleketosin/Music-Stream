const { album, artist } = require("../models/databaseSchema")
const { Albumschema }  = require("../models/JoiSchema")

const createAlbum = async (req, res) => {
    const {error, value} = Albumschema.validate(req.body)
    console.log(req.body);
    if(error){
        console.error(error);
    }else{
    try {
        const isArtist= await artist.findById({_id:value.artistid})
        if(isArtist) {
            const subject = `New Album created successfully`;
            const message = `Greetings ${isArtist.name}.
            Your new album have been created successfully

            Album details are below
            Title:${value.title}
            Release year: ${value.releaseyear}
            Genre: ${value.genre}`;

            const song = album ({
                title:value.title,
                releaseyear: value.releaseyear,
                genre: value.genre,
                artistid: value.artistid,
                image: req.file.path, 
        })
        const songs = await song.save();
        await artist.updateOne(
            { _id : value.artistid},
            {$addToSet: {albums:songs._id}
            }
        )
        res.status(200).json({message:"Album created", songs})
    }
      else{
        return res.status(401).send("Invalid Artist Id");
      }
    } catch (error) {
        console.error(error);
        res.status(403).json({"Message": error});
    }
}
}

module.exports = createAlbum