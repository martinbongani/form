document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("contact-form-email").value;
    const phone = document.getElementById("contact-form-phone").value;
    const message = document.getElementById("contact-form-message").value;

    // Validate input (you can add more validation rules)
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      alert("All fields must be filled out");
      return;
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    // Create an object to store the user data
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    // Log the user data to the console
    console.log(userData);
  });
