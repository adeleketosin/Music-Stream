const mongoose = require("mongoose")

const connectDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Music-Stream',{
    useNewUrlParser:true,
    }).then(() => {
        console.log('MongoDB connected')
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err.message);
    });
};

module.exports = connectDB; 