function showOffers() {
  const box = document.getElementById("offersBox");
  box.style.display = "block";
  box.innerHTML = `
    <ul class="list-unstyled">
      <li>20% off on first booking</li>
      <li>₹2000/day for Sedan Rentals</li>
      <li>₹2500/day for SUV Rentals</li>
      <li>₹5000/day for Luxury Cars</li>
    </ul>
  `;
}
