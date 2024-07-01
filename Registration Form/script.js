document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    var isValid = true;
  
    // Get form values from the user
    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    // Name validation
    if (fullName.length < 5) {
      isValid = false;
      document.getElementById('nameError').innerText = "Name must be at least 5 characters long.";
    } else {
      document.getElementById('nameError').innerText = "";
    }
  
    // Email validation
    if (!email.includes('@')) {
      isValid = false;
      document.getElementById('emailError').innerText = "Enter a valid email address.";
    } else {
      document.getElementById('emailError').innerText = "";
    }
  
    // Phone number validation
    if (phone === '1234567890' || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      isValid = false;
      document.getElementById('phoneError').innerText = "Enter a valid 10-digit phone number.";
    } else {
      document.getElementById('phoneError').innerText = "";
    }
  
    // Password validation
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
      isValid = false;
      document.getElementById('passwordError').innerText = "Password must be at least 8 characters long and not be 'password' or your name.";
    } else {
      document.getElementById('passwordError').innerText = "";
    }
  
    // Confirm password validation
    if (password !== confirmPassword) {
      isValid = false;
      document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
    } else {
      document.getElementById('confirmPasswordError').innerText = "";
    }
  
    if (isValid) {
      // Redirect to success page on successful validation
      window.location.href = "registration-success.html";
    }
  });
  