const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/test', (req, res) => {
  request(
    { url: 'https://seffaflik.epias.com.tr/transparency/service/production/dpp-organization' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
  console.log("GET /test")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to: http://localhost:${PORT}`));