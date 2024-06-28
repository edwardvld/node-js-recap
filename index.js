const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  //login
const userRoute = require('./src/routes/userRoute');
app.use('/users', userRoute);

  //participants
const participantRoutes = require('./src/routes/participantRoute');
app.use('/participants', participantRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});