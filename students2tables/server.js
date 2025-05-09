const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // Serve static files like CSS

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
