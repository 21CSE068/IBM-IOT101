function updateTrafficStatus() {
    const redLightStatus = document.getElementById("red-light-status");
    const yellowLightStatus = document.getElementById("yellow-light-status");
    const greenLightStatus = document.getElementById("green-light-status");
    const pedestrianStatus = document.getElementById("pedestrian-status");
    const ambulanceStatus = document.getElementById("ambulance-status");

    // Replace with your real-time data retrieval logic
    // Here, we use placeholder values
    const isRedOn = true; // Replace with actual data
    const isYellowOn = false; // Replace with actual data
    const isGreenOn = true; // Replace with actual data
    const isPedestrianWaiting = true; // Replace with actual data
    const isAmbulanceAlert = false; // Replace with actual data

    // Update traffic light status
    redLightStatus.textContent = `Red Light: ${isRedOn ? "On" : "Off"}`;
    yellowLightStatus.textContent = `Yellow Light: ${isYellowOn ? "On" : "Off"}`;
    greenLightStatus.textContent = `Green Light: ${isGreenOn ? "On" : "Off"}`;

    // Update pedestrian crossing status
    pedestrianStatus.textContent = `Pedestrian: ${isPedestrianWaiting ? "Waiting" : "Crossing"}`;

    // Update ambulance alert status
    ambulanceStatus.textContent = `Ambulance: ${isAmbulanceAlert ? "Alert" : "No Alert"}`;

    // Add or remove 'on' class to highlight active status
    isRedOn ? (redLightStatus.classList.add("on"),redLightStatus.classList.remove("off")) : (redLightStatus.classList.remove("on"),redLightStatus.classList.add("off"));
    isYellowOn ? (yellowLightStatus.classList.add("on"),yellowLightStatus.classList.remove("off")) : (yellowLightStatus.classList.remove("on"),yellowLightStatus.classList.add("off"));
    isGreenOn ? (greenLightStatus.classList.add("on"),greenLightStatus.classList.remove("off")) : (greenLightStatus.classList.remove("on"),greenLightStatus.classList.add("off"));
    isPedestrianWaiting ? (pedestrianStatus.classList.add("on"),pedestrianStatus.classList.remove("off")) : (pedestrianStatus.classList.remove("on"),pedestrianStatus.classList.add("off"));
    isAmbulanceAlert ? (ambulanceStatus.classList.add("on"),ambulanceStatus.classList.remove("off")) : (ambulanceStatus.classList.remove("on"),ambulanceStatus.classList.add("off"));
}

// Initial update
updateTrafficStatus();

// Simulated real-time updates
setInterval(() => {
    // Fetch and update data from your Python IoT code
   updateTrafficStatus();
}, 5000); // Update every 5 seconds (adjust as needed)
