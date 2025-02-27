
        document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("3rNZHyuLk9RF4ce2T"); // Replace with your EmailJS Public Key
});

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    const templateParams = {
        from_name: name,
        name: name,
        email: email,
        message: message
    };

    emailjs.send("service_2xu527a", "template_01i62bh", templateParams)
        .then(function(response) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
        }, function(error) {
            alert("Oops! Something went wrong. Please try again.");
            console.error("EmailJS Error:", error);
        });
}
  