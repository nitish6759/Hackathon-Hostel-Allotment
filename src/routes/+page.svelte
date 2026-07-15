<script>
	function startProject() {
		window.location.href = "/upload";
	}
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
	<h1 class="text-5xl font-bold text-blue-600 mb-6">
		🏠 Hackathon Hostel Allotment System
	</h1>

	<p class="text-lg text-gray-700 max-w-2xl text-center mb-8">
		A web application built with <strong>SvelteKit</strong> to automate hostel room
		allocation for hackathon participants.
	</p>

	<button
		type="button"
		onclick={startProject}
		class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
	>
		Get Started
	</button>
</div>