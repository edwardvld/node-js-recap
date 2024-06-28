const express = require('express');
const Participant = require('../models/Participant');
const { auth } = require('../utils/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const participants = await Participant.find();
    res.send(participants);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) {
      return res.status(404).send('Participant not found');
    }
    res.send(participant);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).send(participant);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!participant) {
      return res.status(404).send('Participant not found');
    }
    res.send(participant);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const participant = await Participant.findByIdAndDelete(req.params.id);
    if (!participant) {
      return res.status(404).send('Participant not found');
    }
    res.send(participant);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
