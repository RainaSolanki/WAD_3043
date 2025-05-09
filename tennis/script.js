function showAchievements(player) {
    const achievements = {
      federer: `
        <h4>Roger Federer Achievements</h4>
        <ul class="no-bullets">
          <li>20 Grand Slam Titles</li>
          <li>310 Weeks as World No.1</li>
          <li>8 Wimbledon Titles</li>
        </ul>
      `,
      djokovic: `
        <h4>Novak Djokovic Achievements</h4>
        <ul class="no-bullets">
          <li>24 Grand Slam Titles</li>
          <li>400+ Weeks as World No.1</li>
          <li>Double Career Grand Slam</li>
        </ul>
      `,
      alcaraz: `
        <h4>Carlos Alcaraz Achievements</h4>
        <ul class="no-bullets">
          <li>2022 US Open Champion</li>
          <li>2023 Wimbledon Champion</li>
          <li>Youngest World No.1</li>
        </ul>
      `
    };
  
    document.getElementById("achievements").innerHTML = achievements[player];
  }
  