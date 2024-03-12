document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate input (you can add more validation rules)
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return;
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return;
    }

    // Send data to the server (you'll need a backend endpoint)
    fetch('https://your-server.com/contact', {
        method: 'POST',
        body: JSON.stringify({ name: name, email: email, message: message }),
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
