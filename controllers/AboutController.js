const About = require('../models/AboutModel');
const mongoose = require('mongoose');

const getOneAbout = async (req, res) => {
  const id = req.params.aboutId;
  try {
    const about = await About.findById(id);
    res.status(200).json(about);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllAbouts = async (req, res) => {
  try {
    const abouts = await About.find({});
    res.status(200).json(abouts);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addAbout = async (req, res) => {
  const about = new About({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  });

  try {
    await about.save();
    res.status(201).json(about);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateAbout = async (req, res) => {
  const id = req.params.aboutId;
  try {
    await About.findByIdAndUpdate(id, {
      title: req.body.title,
      description: req.body.description,
      image: req.body.image
    });
    const about = await About.findById(id);
    res.status(200).json({
      message: 'About updated successfully',
      about: about
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteAbout = async (req, res) => {
  const id = req.params.aboutId;
  try {
    await About.deleteOne({ _id: id });
    res.status(200).json({ message: 'About deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneAbout,
  getAllAbouts,
  addAbout,
  deleteAbout,
  updateAbout
};
