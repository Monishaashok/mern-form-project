const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const FormEntry = require('./models/FormEntry');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://moni:moni@cluster0.eys8r66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(' MongoDB connection failed:', err));
app.post('/api/register', async (req, res) => {
  try {
    const entry = new FormEntry(req.body);
    await entry.save();
    res.status(200).json({ message: 'Registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registration failed' });
  }
});
app.listen(5000, () => console.log(' Server running at http://localhost:5000'));
