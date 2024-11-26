
$(document).ready(function () {
$('#login-form').on('submit', function (e) {
e.preventDefault();

const email = $('#email').val().trim();
const password = $('#password').val().trim();

// Basic Validation
if (!email || !password) {
    alert('Please fill out all fields.');
    return;
}

// Regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
}

// If validation passes
alert('Login successful!');
// Add logic for backend integration here.
});
});