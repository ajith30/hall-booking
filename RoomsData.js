// Room Data with existing rooms
const rooms = [
  {
    name: "Super-Deluxe",
    seats: 100,
    amenities: "Air Conditioning, Free Wi-Fi, TV",
    pricePerHour: 5000,
    room_id: "100",
    roomBoked: true,
    bookingDetails: [
      {
        customerName: "Ajith",
        date: "08/02/2023",
        startTime: "10:00",
        endTime: "14:00",
        status: "Confirmed",
      },
    ],
  },
  {
    name: "Premium",
    seats: 150,
    amenities: "Air Conditioning, AV Equipments, Free Wi-Fi, Large Podium",
    pricePerHour: 7500,
    room_id: "101",
    roomBoked: true,
    bookingDetails: [
      {
        customerName: "Ragu",
        date: "08/02/2023",
        startTime: "11:00",
        endTime: "15:00",
        status: "Payment Pending",
      },
    ],
  },
];

module.exports = rooms;
