function showOffers() {
    const box = document.getElementById("offersBox");
    box.style.display = "block";
    box.innerHTML = `
      <ul>
        <li>15% off on all solar panel installations</li>
        <li>Free consultation for the first 50 customers</li>
        <li>₹3000 off on solar system maintenance packages</li>
        <li>Free installation for government and educational institutions</li>
      </ul>
    `;
  }
  