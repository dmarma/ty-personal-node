const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/portfolio', (req, res) => {
  res.sendFile(__dirname + '/public/portfolio.html');
});

app.post('/webhook', (req, res) => {
  const event = req.get('X-GitHub-Event');
  if (event === 'push') {
    exec('git pull', (err, stdout, stderr) => {
      console.log('Webhook git pull output:', stdout, stderr);
    });
  }
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
