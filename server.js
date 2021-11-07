const fs = require('fs');
const express = require('express');
const app = express();

app.get('/api/userNotes', (req, res) => {
  fs.readFile('./userNotes.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

const { userNotes } = require('./Develop/db.db.json')



