const Artist = require('../models/ArtistModel');

// Creating new artist
exports.createArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();
    res.status(201).json(artist);
  } catch (error) {
    console.error('Error creating artist:', error);
    res.status(500).json({ error: 'Unable to create artist' });
  }
};

// Get all artists
exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (error) {
    console.error('Error fetching artists:', error);
    res.status(500).json({ error: 'Unable to fetch artists' });
  }
};

// Get artist by ID
exports.getArtistById = async (req, res) => {
  const { id } = req.params;
  try {
    const artist = await Artist.findById(id);
    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }
    res.status(200).json(artist);
  } catch (error) {
    console.error('Error fetching artist:', error);
    res.status(500).json({ error: 'Unable to fetch artist' });
  }
};
