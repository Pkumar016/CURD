const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Sample data
let data = [
  { Id: 1,
    Name: 'abd',
    employee:"hello",
    statuss:"good"
 }
];

// Routes
// Get all data
app.get('/data', (req, res) => {
  res.json(data);
});

// Get data by ID
app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const foundData = data.find(item => item.Id === id);
  if (foundData) {
    res.json(foundData);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Add new data
app.post('/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).json(newData);
});

// Update data
app.put('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body;
  const dataIndex = data.findIndex(item => item.Id === id);
  if (dataIndex !== -1) {
    data[dataIndex] = newData;
    res.json(newData);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Delete data
app.delete('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dataIndex = data.findIndex(item => item.Id === id);
  if (dataIndex !== -1) {
    data.splice(dataIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log("runnig")
});