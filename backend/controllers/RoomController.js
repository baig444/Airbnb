const Room = require('../models/RoomSchema');

exports.addRoom = async (req, res) => {
    const { name, price, location, about, images, amenities, nearbyLocations, mapLocation, faqs,stayType,rating,allowances } = req.body;

    try {
     // Check if the room already exists based on a unique field, e.g., name or combination of fields
     const existingRoom = await Room.findOne({ name });

     if (existingRoom) {
         return res.status(400).json({ message: 'Room already exists.' });
     }

    const newRoom = new Room({
        name,
        price,
        location,
        about,
        images,
        amenities,
        rating,
        allowances,
        nearbyLocations,
        mapLocation,
        stayType,
        faqs
    });
    
        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);

    } catch (err) {
        res.status(500).json(err);
    }

}

exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }

    catch (err) {
        res.status(500).json(err);
    }
}


exports.deleteRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteroom = await Room.findByIdAndDelete(id);
    if (!deleteroom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });

  } catch (error) {
    res.status(500).json(error);
  }
}


exports.getroom = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
}