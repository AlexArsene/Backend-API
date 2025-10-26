const express = require('express');
const app = express();
app.use(express.json());
const contacts = [];
app.post('/contacts', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });
  contacts.push({ name, email });
  res.status(201).json({ message: 'Contact added' });
});
app.get('/contacts', (req, res) => {
  res.json(contacts);
});
app.listen(3000, () => console.log('Server running on port 3000'));
