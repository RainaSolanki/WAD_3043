
// Example function to show an alert for a clicked service
function showServiceAlert(serviceName) {
  alert("You clicked on " + serviceName);
}

function showContactForm() {
  var contactForm = document.getElementById("contactForm");
  if (contactForm.style.display === "none") {
    contactForm.style.display = "block"; // Show the contact form
  } else {
    contactForm.style.display = "none"; // Hide the contact form if it's already visible
  }
}
