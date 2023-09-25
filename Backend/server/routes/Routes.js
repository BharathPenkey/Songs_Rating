
const express = require('express');
const router = express.Router();
const artistController = require('../controllers/ArtistController');


const songController = require('../controllers/SongController');


// const ratingController=require('../controllers/RatingControllers');


// Creates new artist in db
router.post('/artists', artistController.createArtist);

// Get all artists from db
router.get('/artists', artistController.getAllArtists);



// Creates new song in db
router.post('/songs', songController.createSong);

// Get all songs from db
router.get('/songs', songController.getAllSongs);




module.exports = router;


