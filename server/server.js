const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  //   res.send('Hello');
  res.status(200).json({ message: 'Welcome to the Support System API' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
