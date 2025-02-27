document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const roomType = document.getElementById('room-type').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;

    // Simple validation (you can expand this)
    if (!name || !email || !roomType || !checkIn || !checkOut) {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can send the data to a server or process it as needed
    alert(`Booking confirmed for ${name} in a ${roomType} from ${checkIn} to ${checkOut}.`);
    
    // Reset the form
    document.getElementById('form').reset();
});