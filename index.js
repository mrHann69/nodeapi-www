const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app.js');

const hostname = process.env.HOST|| "127.0.0.1";
const port = process.env.PORT || 5000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});