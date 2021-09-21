const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  base_url: process.env.BASE_URL
};