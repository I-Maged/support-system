const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  //   res.send('Hello');
  res.status(200).json({ message: 'Welcome to the Support System API' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
