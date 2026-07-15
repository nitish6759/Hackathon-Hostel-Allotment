export function allocateRooms(hostels, participants) {
	const availableRooms = hostels.map((room) => ({
		...room,
		remaining: Number(room["Capacity"])
	}));

	const result = [];

	for (const student of participants) {
		const room = availableRooms.find(
			(r) =>
				r["Gender"] === student["Gender"] &&
				r.remaining > 0
		);

		if (room) {
			result.push({
				"Student ID": student["Student ID"],
				"Student Name": student["Student Name"],
				"Gender": student["Gender"],
				"Allotted Hostel": room["Hostel Name"],
				"Room Number": room["Room Number"]
			});

			room.remaining--;
		} else {
			result.push({
				"Student ID": student["Student ID"],
				"Student Name": student["Student Name"],
				"Gender": student["Gender"],
				"Allotted Hostel": "Not Available",
				"Room Number": "-"
			});
		}
	}

	return result;
}