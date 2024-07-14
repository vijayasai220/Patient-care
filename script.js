
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');

    loginButton.addEventListener('click', function() {
        
        window.location.href = 'LoginPage/login.html'; // Navigate to the login page
    });

    signupButton.addEventListener('click', function() {
        window.location.href = 'SignupPage/signup.html'; // Navigate to the signup page
    });
});