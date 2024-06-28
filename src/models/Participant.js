const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  contacted: { type: Boolean, required: true },
  preConfirmed: { type: Boolean, required: true },
  confirmed: { type: Boolean, required: true },
  needsAccommodation: { type: Boolean, required: true },
  participateFrom: { type: String, enum: ['Raluca', 'Edward', 'Both'], required: true },
}, { versionKey: false });

const Participant = mongoose.model('Participant', participantSchema, 'participants');

module.exports = Participant;
