const express = require('express');
const connectDB = require('./config/db');
// const bodyParser = require('body-parser');
const path = require('path')

const app = express();

// //bodyParser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//Init BodyParser Middleware
app.use(express.json({ extended: false }));

//Connect database
connectDB();

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/upload', require('./routes/api/uploadRoutes'));

// const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


// app.get('/', (req, res) => res.send('Api Running'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
