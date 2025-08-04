(function () {
  // Select the form and input elements
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let telephoneInput = document.querySelector('#contact-telephone');
  let messageInput = document.querySelector('#my-input');

  // Shows an error message under the input field
  function showErrorMessage(input, message) {
    let container = input.parentElement; // Gets the wrapper div

    // Removes any existing error message
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    // Adds the new error message if there's any
    if (message) {
      let error = document.createElement('div'); // Creates new <div>
      error.classList.add('error-message'); // Adds error class
      error.innerText = message; // Sets message text
      container.appendChild(error); // Adds to the DOM
    }
  }

  // Validates the email field
  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is required.');
      return false;
    }

    if (!value.includes('@') || !value.includes('.')) {
      showErrorMessage(emailInput, 'Enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null); // Clear any previous error
    return true;
  }

  // Validates the message textarea
  function validateMessage() {
    let value = messageInput.value;

    if (!value.trim()) {
      showErrorMessage(messageInput, 'Message is required.');
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }

  // Optional: Validates telephone (basic check)
  function validateTelephone() {
    let value = telephoneInput.value;

    if (value && !/^\+?[0-9\s\-()]+$/.test(value)) {
      showErrorMessage(telephoneInput, 'Enter a valid phone number.');
      return false;
    }

    showErrorMessage(telephoneInput, null);
    return true;
  }

  // Runs all validations and returns true if all pass
  function validateForm() {
    let isEmailValid = validateEmail();
    let isMessageValid = validateMessage();
    let isTelephoneValid = validateTelephone(); // optional

    return isEmailValid && isMessageValid && isTelephoneValid;
  }

  // Prevents default form submission if there are errors
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
      alert('Message sent successfully!');
      // You could add form.submit() here if you later set a real action URL
    }
  });

  // Attach real-time validation listeners
  emailInput.addEventListener('input', validateEmail);
  messageInput.addEventListener('input', validateMessage);
  telephoneInput.addEventListener('input', validateTelephone);
})();
