const express = require("express");
const router = express.Router(); //importing router module
const rooms = require("../../RoomsData");

//Creating room with number of seats available, amenities, pricePerHour

router.post("/create-room", (req, res) => {
  const newRoom = {
    name: req.body.name,
    seats: req.body.seats || 150,
    amenities: req.body.amenities,
    pricePerHour: req.body.price || 8000,
    room_id: req.body.room_id,
    roomBoked: false,
    bookingDetails: [],
  };

  if (!newRoom.name || !newRoom.room_id) {
    return res
      .status(400)
      .json({ message: "Please enter the name and room number!" });
  }
  rooms.push(newRoom);
  res.json({ message: "Room Created Successfully", newRoom });
});

//Booking room with customerName, date, startTime, endTime and  room_Id

router.post("/bookRoom", (req, res) => {
  const found = rooms.some((room) => room.room_id === req.body.room_id);
  const checkFalse = rooms.some((room) => room.roomBoked !== true);

  if (found && checkFalse) {
    const booking = {
      customerName: req.body.customerName,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    };
    rooms.forEach((room) => {
      //Booking room if not already booked on the same date and time
      if (room.roomBoked === false) {
        room.bookingDetails.push(booking);
        room.roomBoked = true;
        res.json({ message: "Room Booked", room });
      }
    });
  } else {
    res.status(400).json({
      message: `The entered room number: ${req.body.room_id} not available! try different date and time slot!`,
    });
  }
});

//List all Rooms with Booked data
router.get("/list-rooms", (req, res) => {
  res.json(rooms);
});

//List all customers with booked data

router.get("/list-customers", (req, res) => {
  const details = [];

  rooms.forEach((room) => {
    const customers = {};
    customers.name = room.name;
    for (let book of room.bookingDetails) {
      customers.customerName = book.customerName;
      customers.date = book.date;
      customers.startTime = book.startTime;
      customers.endTime = book.endTime;
    }
    details.push(customers);
  });
  res.json(details);
});

module.exports = router;
