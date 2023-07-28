const  mongoose  = require("mongoose")

const albumSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
    },
    releaseyear: Number,
    genre: String,
    artistid: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Artist"
    },     
})

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim: true,
    },
    genre: String,
    artistEmail:{
        type:String,
        unique:true,
    },
    image: String,
    albums:{
        type:[{type:mongoose.Schema.Types.ObjectId,
        ref:'Album'}],
    }
})

module.exports.artist = mongoose.model("Artist", artistSchema)
module.exports.album = mongoose.model("Album", albumSchema);

