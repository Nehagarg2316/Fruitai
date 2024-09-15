document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform login validation here
    window.location.href = 'homepage.html'; // Redirect to home page
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform registration validation here
    window.location.href = 'homepage.html'; // Redirect to home page
});
