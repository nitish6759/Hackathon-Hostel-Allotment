<script>
	import * as XLSX from "xlsx";

	let hostelFile = $state(null);
	let participantFile = $state(null);

	let hostelData = $state([]);
	let participantData = $state([]);
	let allocationResult = $state([]);
	let searchText = $state("");
	function readExcel(file, type) {
		if (!file) return;

		const reader = new FileReader();

		reader.onload = (e) => {
			const data = new Uint8Array(e.target.result);

			const workbook = XLSX.read(data, {
				type: "array"
			});

			const sheetName = workbook.SheetNames[0];

			const worksheet = workbook.Sheets[sheetName];

			const json = XLSX.utils.sheet_to_json(worksheet);

			if (type === "hostel") {
				hostelData = json;
			} else {
				participantData = json;
			}

			console.log(type, json);
		};

		reader.readAsArrayBuffer(file);
	}

	function hostelChanged(event) {
		hostelFile = event.target.files[0];
		readExcel(hostelFile, "hostel");
	}

	function participantChanged(event) {
		participantFile = event.target.files[0];
		readExcel(participantFile, "participant");
	}
	function allocateRooms() {
		console.log("Allocate button clicked");
		alert("Allocation Started!");
	allocationResult = [];

	const rooms = hostelData.map((room) => ({
		...room,
		remaining: Number(room["Capacity"])
	}));

	for (const student of participantData) {
		const availableRooms = rooms.filter(
	(r) =>
		r["Gender"] === student["Gender"] &&
		r.remaining > 0
);

let room = null;

if (availableRooms.length > 0) {
	room =
		availableRooms[
			Math.floor(Math.random() * availableRooms.length)
		];
}

		if (room) {
			allocationResult.push({
				studentId: student["Student ID"],
				studentName: student["Student Name"],
				gender: student["Gender"],
				hostel: room["Hostel Name"],
				room: room["Room Number"]
			});

			room.remaining--;
		}
		else {
			allocationResult.push({
				studentId: student["Student ID"],
				studentName: student["Student Name"],
				gender: student["Gender"],
				hostel: "Not Available",
				room: "-"
			});
		}
	}
	console.log(hostelData);
console.log(participantData);
console.log(allocationResult);
allocationResult = [...allocationResult];
}
function downloadExcel() {
	const worksheet = XLSX.utils.json_to_sheet(allocationResult);

	const workbook = XLSX.utils.book_new();

	XLSX.utils.book_append_sheet(
		workbook,
		worksheet,
		"Hostel Allotment"
	);

	XLSX.writeFile(
		workbook,
		"Hostel_Allotment_Result.xlsx"
	);
}
function resetData() {
	hostelFile = null;
	participantFile = null;

	hostelData = [];
	participantData = [];
	allocationResult = [];
}
</script>

<div class="min-h-screen bg-gray-100 p-10">

	<h1 class="text-4xl font-bold text-center mb-10">
		Upload Excel Files
	</h1>

	<div class="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

		<div class="mb-8">
			<label class="font-semibold block mb-2">
				Hostel Availability Excel
			</label>

			<input
				type="file"
				accept=".xlsx,.xls"
				onchange={hostelChanged}
				class="border p-2 w-full rounded"
			/>

			{#if hostelFile}
				<p class="text-green-600 mt-2">
					✅ {hostelFile.name}
				</p>
			{/if}
		</div>

		<div>
			<label class="font-semibold block mb-2">
				Participants Excel
			</label>

			<input
				type="file"
				accept=".xlsx,.xls"
				onchange={participantChanged}
				class="border p-2 w-full rounded"
			/>

			{#if participantFile}
				<p class="text-green-600 mt-2">
					✅ {participantFile.name}
				</p>
			{/if}
		</div>

	</div>

</div>
<div class="text-center mt-8">
	<button
		onclick={allocateRooms}
		class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
	>
		Allocate Rooms
	</button>
</div>
<div class="text-center mt-4">

	<button
		onclick={downloadExcel}
		class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
	>
		Download Excel
	</button>

</div>
<button
	onclick={resetData}
	class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
>
	🔄 Reset
</button>
{#if hostelData.length > 0}
	<h2 class="text-2xl font-bold mt-10 mb-4">Hostel Data</h2>

	<div class="overflow-x-auto">
		<table class="w-full border border-gray-300">
			<thead class="bg-blue-600 text-white">
				<tr>
					<th class="border p-2">Hostel</th>
					<th class="border p-2">Room</th>
					<th class="border p-2">Capacity</th>
					<th class="border p-2">Gender</th>
				</tr>
			</thead>

			<tbody>
				{#each hostelData as hostel}
					<tr>
						<td class="border p-2">{hostel["Hostel Name"]}</td>
						<td class="border p-2">{hostel["Room Number"]}</td>
						<td class="border p-2">{hostel["Capacity"]}</td>
						<td class="border p-2">{hostel["Gender"]}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
{#if allocationResult.length > 0}

<h2 class="text-3xl font-bold mt-10 mb-4">
	Allocation Result
</h2>
<div class="my-6">
	<input
		type="text"
		bind:value={searchText}
		placeholder="🔍 Search by Student ID or Name..."
		class="w-full border border-gray-300 rounded-lg px-4 py-2"
	/>
</div>

<table class="w-full border">

	<thead class="bg-green-600 text-white">

	<tr>

		<th class="border p-2">Student ID</th>
		<th class="border p-2">Student Name</th>
		<th class="border p-2">Gender</th>
		<th class="border p-2">Hostel</th>
		<th class="border p-2">Room</th>

	</tr>

	</thead>

	<tbody>

	{#each allocationResult.filter(student =>
	student.studentId.toLowerCase().includes(searchText.toLowerCase()) ||
	student.studentName.toLowerCase().includes(searchText.toLowerCase())
) as student}
	<tr>

		<td class="border p-2">{student.studentId}</td>
		<td class="border p-2">{student.studentName}</td>
		<td class="border p-2">{student.gender}</td>
		<td class="border p-2">{student.hostel}</td>
		<td class="border p-2">{student.room}</td>

	</tr>

	{/each}

	</tbody>

</table>

{/if}