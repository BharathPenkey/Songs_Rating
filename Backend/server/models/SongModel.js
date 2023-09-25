
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  cover: {
    type: String, // Store the image URL 
  },
  artists:{
    type: String, 
    
  }
  //  [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Artist',
  // }],
});

module.exports = mongoose.model('Song', songSchema);
