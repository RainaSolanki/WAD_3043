const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // for API JSON parsing

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/simpledb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err));

// User model
const User = mongoose.model('User', { name: String, email: String });

// HTML wrapper for browser view
const wrapHtml = (bodyContent) => `
  <html>
    <head><link rel="stylesheet" href="/styles.css"></head>
    <body>${bodyContent}</body>
  </html>
`;

// ========== HTML ROUTES (form-based interface) ==========

// Home page: list users + add form
app.get('/', async (req, res) => {
  try {
    const users = await User.find();
    const userList = users.map(u => `
      <li>${u.name} - ${u.email}
        <a href="/delete/${u._id}">Delete</a>
        <a href="/edit/${u._id}">Edit</a>
      </li>`).join('');
    
    const form = `
      <h2>Add User</h2>
      <form method="POST" action="/add">
        <input name="name" placeholder="Name" required><br>
        <input name="email" placeholder="Email" required><br>
        <button type="submit">Add</button>
      </form>`;

    res.send(wrapHtml(`<h1>User List</h1><ul>${userList}</ul>${form}`));
  } catch {
    res.status(500).send('Error loading users');
  }
});

// Add user (form)
app.post('/add', async (req, res) => {
  try {
    await User.create(req.body);
    res.redirect('/');
  } catch {
    res.status(500).send('Error adding user');
  }
});

// Delete user (form)
app.get('/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch {
    res.status(500).send('Error deleting user');
  }
});

// Edit user form
app.get('/edit/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    
    const form = `
      <h2>Edit User</h2>
      <form method="POST" action="/update/${user._id}">
        <input name="name" value="${user.name}" required><br>
        <input name="email" value="${user.email}" required><br>
        <button type="submit">Update</button>
      </form>`;
    
    res.send(wrapHtml(form));
  } catch {
    res.status(500).send('Error loading user');
  }
});

// Update user (form)
app.post('/update/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch {
    res.status(500).send('Error updating user');
  }
});

// ========== API ROUTES (as required in your practical) ==========

// 1. GET all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// 2. POST new user
app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch {
    res.status(400).json({ error: 'Failed to add user' });
  }
});

// 3. PUT update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch {
    res.status(400).json({ error: 'Failed to update user' });
  }
});

// 4. DELETE user
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch {
    res.status(400).json({ error: 'Failed to delete user' });
  }
});

// Start server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
