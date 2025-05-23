const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // ✅ Load environment variables first

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.connect((err) => {
  if (err) {
    console.error(' Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;
