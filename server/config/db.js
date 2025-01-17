const mongoose = require('mongoose');
require('dotenv').config()

const dbConnection = () => {
  mongoose
    .connect(process.env.DB)
    .then((conn) => {
      console.log(`Database Connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`Database Error: ${err}`);
      process.exit(1);
    });
};

module.exports = dbConnection;