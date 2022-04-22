const express = require('express');
const path = require('path');
const notes = require('./db/db.json')
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get(`/notes`, (req, res) =>
  res.sendFile(path.join(__dirname, `/public/notes.html`))
);

app.get(`*`, (req, res) =>
  res.sendFile(path.join(__dirname, `/public/index.html`))
);

app.get(`/api/notes`, (req, res) => {
  res.status(200).json(notes);
});

app.post(`api/notes`, (req, res) => {
  console.info(`${req.method} Request received to add a review`);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));