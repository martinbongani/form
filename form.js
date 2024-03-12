document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('contact-form-email').value;
    var phone = document.getElementById('contact-form-phone').value;
    var message = document.getElementById('contact-form-message').value;

    // Validate input (you can add more validation rules)
    if (firstName === "" || lastName === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled out");
        return;
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return;
    }

    // Send data to the server (you'll need a backend endpoint)
    fetch('https://your-server.com/contact', {
        method: 'POST',
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, phone: phone, message: message }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
