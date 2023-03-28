const Song = require('../models/song.model')


const getAllsongs = async(req,res)=>{
 
    Song.find()
    .then(songs => (
        res.status(200).json(songs)
    ))
    .catch(err => {
        res.status(404).json('Error: ' + err)
    })

}

const getsongbyId = async(req,res)=>{
    Song.findById(req.params.id)
    .then((song) => res.json(song))
    .catch((err) => res.status(400).json('Error: ' + err));

}

const uploadNewsong = async(req,res)=>{
    
}

const updateSong = async(req,res)=>{
    
}
const deleteSong = async(req,res)=>{
    
}


module.exports = {
getAllsongs,
getsongbyId,
uploadNewsong,
updateSong,
deleteSong
}