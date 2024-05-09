const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
var cors = require('cors')


dotenv.config({ path: 'config.env' });

const dbConnection = require('./config/db');

const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')

// Connect with db
dbConnection();

// express app
const app = express();
app.use(express.urlencoded({
  extended: true
}))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
// CORS

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});