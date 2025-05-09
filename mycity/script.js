function showInfo(title, message) {
  const box = document.getElementById("infoBox");
  box.classList.remove("d-none");
  box.innerHTML = `<strong>${title}:</strong> ${message}`;
}
