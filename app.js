
async function inform() {
	
	console.log("Beginning avalability test");

	var available = await Bluetooth.getAvailability();

	console.log(available);

}

inform();
