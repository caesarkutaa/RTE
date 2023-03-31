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


    
    try {
        const song =  await Song.create({...req.body})
        res.status(200).json(song);
      } catch (err) {
        res.status(500).send(err);
      }
}

const updateSong = async(req,res)=>{
    
}
const deleteSong = async(req,res)=>{
    
}
const updatevideo = async(req,res)=>{
    const { songsvideo } = req.body
    try {
        const updatevideomp4 = await Song.updateOne({_id:req.params.id},{songsvideo})
        if (!songsvideo) return res.status(404).send({ error: 'Song not found' });
        res.status(200).json({msg:'Added video successfuly'});
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
}


module.exports = {
getAllsongs,
getsongbyId,
uploadNewsong,
updateSong,
deleteSong,
updatevideo ,
}