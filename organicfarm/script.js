function showOffers() {
  const box = document.getElementById("offersBox");
  box.style.display = "block";
  setTimeout(() => {
    box.style.opacity = "1";
  }, 50);
  box.innerHTML = `
    <ul class="list-unstyled">
      <li>20% off on first subscription</li>
      <li>₹999/month for seasonal vegetable box</li>
      <li>Free home delivery on orders above ₹500</li>
    </ul>
  `;
}
