// Restrict contact input to digits only and max 10 digits
document.getElementById("contact").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
  });
  
  // Load patient count from localStorage
  let patients = JSON.parse(localStorage.getItem("patients")) || [];
  updateCount();
  
  // Handle form submission
  document.getElementById("patientForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const contact = document.getElementById("contact").value.trim();
    const address = document.getElementById("address").value.trim();
  
    const patient = { name, age, gender, contact, address };
  
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));
    updateCount();
  
    this.reset();
    alert("Patient registered successfully!");
  });
  
  function updateCount() {
    document.getElementById("count").innerText = `Total Patients Registered: ${patients.length}`;
  }
  