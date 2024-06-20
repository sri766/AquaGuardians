const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// PostgreSQL connection
const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

// Endpoint to get geospatial data
app.get('/api/locations', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM your_table');
    res.json(result.rows);
  } finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
