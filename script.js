const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (nameInput.value === '') {
    alert('Please enter your name.');
    return;
  }

  if (emailInput.value === '') {
    alert('Please enter a valid email.');
    return;
  }

  if (commentsInput.value === '') {
    alert('Please enter a comment or message.');
    return;
  }

  form.submit();
});