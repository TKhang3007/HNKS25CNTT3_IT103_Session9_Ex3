const rooms = [
    {
        roomId: "P101",
        roomType: "Deluxe",
        pricePerNight: 1500000,
        status: "VACANT"
    },
    {
        roomId: "P102",
        roomType: "Standard",
        pricePerNight: 1000000,
        status: "VACANT"
    },
    {
        roomId: "P103",
        roomType: "Deluxe Ocean View",
        pricePerNight: 2000000,
        status: "VACANT"
    }
];

console.log("===== DANH SÁCH PHÒNG BAN ĐẦU =====");
for (let i = 0; i < rooms.length; i++) {
    console.log(
        rooms[i].roomId + " | " +
        rooms[i].roomType + " | " +
        rooms[i].pricePerNight + " VNĐ | " +
        rooms[i].status
    );
}

const newRoom = {
    roomId: "P104",
    roomType: "VIP Suite",
    pricePerNight: 3500000,
    status: "VACANT"
};

rooms.push(newRoom);

console.log("\n===== SAU KHI THÊM PHÒNG P104 =====");
for (let i = 0; i < rooms.length; i++) {
    console.log(
        rooms[i].roomId + " | " +
        rooms[i].roomType + " | " +
        rooms[i].pricePerNight + " VNĐ | " +
        rooms[i].status
    );
}

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P101") {
        rooms[i].status = "OCCUPIED";
    }
}

console.log("\n===== SAU KHI CẬP NHẬT P101 =====");
for (let i = 0; i < rooms.length; i++) {
    console.log(
        rooms[i].roomId + " | " +
        rooms[i].roomType + " | " +
        rooms[i].pricePerNight + " VNĐ | " +
        rooms[i].status
    );
}

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P103") {
        rooms.splice(i, 1);
        break;
    }
}

console.log("\n===== SAU KHI XÓA P103 =====");
for (let i = 0; i < rooms.length; i++) {
    console.log(
        rooms[i].roomId + " | " +
        rooms[i].roomType + " | " +
        rooms[i].pricePerNight + " VNĐ | " +
        rooms[i].status
    );
}