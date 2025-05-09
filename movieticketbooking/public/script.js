document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const movie = document.getElementById('movie').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
  
    // Hide form and show confirmation message
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('confirmation-message').classList.remove('hidden');
  
    // Set confirmation message
    document.getElementById('movie-name').textContent = movie;
  });
  