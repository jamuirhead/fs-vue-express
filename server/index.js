const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('combined'));

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

// handle production routes
if (proecess.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public'));
  // handle spa
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
