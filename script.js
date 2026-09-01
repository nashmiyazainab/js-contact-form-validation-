document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMsg = document.getElementById('successMsg');

  // Reset errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  let isValid = true;

  if (name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email';
    isValid = false;
  }

  if (message === '') {
    messageError.textContent = 'Message cannot be empty';
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset();
  }
});