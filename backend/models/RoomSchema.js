const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  location: { type: String },
  stayType: { 
    type: String,
    enum: ["longstay","shortstay"],
    required: true,
    default: "longstay"
   },
   allowances: { type: String },
  about: { type: String },
  rating: { type: Number, default: 0 },
  images: [{ type: String }], // Store image file paths
  amenities: [{ name: String, icon: String }], // Array of amenities with icons
  nearbyLocations: [{ name: String, distance: String }],
  mapLocation: { type: String },
  faqs: [{ question: String, answer: String }],
});

module.exports = mongoose.model('Room', roomSchema);
