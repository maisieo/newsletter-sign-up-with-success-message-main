// script.js

const emailInput = document.getElementById('emailInput');
const warningMessage = document.getElementById('warningMessage');
const successMessage = document.getElementById('successMessage');
const subscribeBtn = document.querySelector('.subscribe-btn');
const contentContainer = document.querySelector('.content-container');
const confirmationEmail = document.getElementById('confirmationEmail');

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  const isValidEmail = email.includes('@');

  if (isValidEmail) {
    emailInput.style.backgroundColor = 'white';
    warningMessage.style.display = 'none';
    subscribeBtn.disabled = false; // Enable the button
  } else {
    emailInput.style.backgroundColor = '#FF5B63';
    warningMessage.style.display = 'block';
    subscribeBtn.disabled = true; // Disable the button
  }
});

subscribeBtn.addEventListener('click', function() {
  const email = emailInput.value;
  contentContainer.style.display = 'none';
  successMessage.style.display = 'block';
  confirmationEmail.textContent = email;
});

document.addEventListener("DOMContentLoaded", function() {
  var dismissButton = document.getElementById("dismissButton");
  var successMessage = document.getElementById("successMessage");
  var contentContainer = document.querySelector(".content-container");

  dismissButton.addEventListener("click", function() {
    successMessage.style.display = "none";
    contentContainer.style.display = "flex";
  });
});