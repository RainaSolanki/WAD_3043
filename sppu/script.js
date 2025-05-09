function toggleDetails(id, btn) {
    const section = document.getElementById(id);
    if (section.style.display === "block") {
      section.style.display = "none";
      btn.textContent = "Show Details";
    } else {
      section.style.display = "block";
      btn.textContent = "Hide Details";
    }
  }
  