function sendEmail() {
    // Get form data
    const emailField = document.getElementById("email");
    const email = emailField.value;
    const name = document.querySelector('input[name="name"]').value;
    const msg = document.querySelector('textarea[name="msg"]').value;

    // Validate the email and other fields
    if (!email || !name || !msg) {
        alert("Please fill out all fields (name, email, and message).");
        return;
    }

    // Create the email body
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`;

    // Sending the email using Elastic Email SMTP server
    Email.send({
        Host: "smtp.gmail.com",
        Username: "almasaina2003@gmail.com", // Your Elastic Email username
        Password: "amina2003", // Your Elastic Email password
        To: "almasaina2003@gmail.com",
        From: email,
        Subject: "New Contact Form Enquiry",
        Body: body
    })
    .then(msg => {
        alert("Email sent successfully!");
        // Clear the form
        emailField.form.reset();
    })
    .catch(error => {
        alert("Failed to send the email: " + error);
    });
}
