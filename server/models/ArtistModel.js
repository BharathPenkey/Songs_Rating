const mongoose =require('mongoose');
const  Schema =mongoose.Schema;



const artistSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
    bio: {
      type: String,
    },
  });
  
  module.exports = mongoose.model('Artist', artistSchema);