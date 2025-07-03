function clicked() {
    const email = document.getElementById("mail").value.trim();

    if (email === "") {
        alert("Please enter your email address.");
    } else {
        alert("Thank you for registering with your email: " + email);
    }
}
