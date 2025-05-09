const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/collegeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Admission Schema
const Admission = mongoose.model('Admission', {
  name: String,
  course: String,
  email: String,
  phone: String,
});

// Routes

// GET all admissions
app.get('/api/admissions', async (req, res) => {
  const admissions = await Admission.find();
  res.json(admissions);
});

// GET admission by ID
app.get('/api/admissions/:id', async (req, res) => {
    try {
      const admission = await Admission.findById(req.params.id);
      if (!admission) {
        return res.status(404).json({ message: 'Admission not found' });
      }
      res.json(admission);
    } catch (error) {
      res.status(400).json({ message: 'Invalid ID format' });
    }
  });
  

// POST new admission
app.post('/api/admissions', async (req, res) => {
  const admission = new Admission(req.body);
  await admission.save();
  res.json(admission);
});

// PUT update admission
app.put('/api/admissions/:id', async (req, res) => {
  const admission = await Admission.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(admission);
});

// DELETE admission
app.delete('/api/admissions/:id', async (req, res) => {
  await Admission.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
