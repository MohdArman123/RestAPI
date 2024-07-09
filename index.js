const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Import routes
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const app = express();
// app.use(bodyParser.json());

// // Connect to the database
// mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log('Database connection successful!'));

// // Connecting user routes
// const userRouter = require('./routes/user');
// app.use('/api/v1/user/', userRouter);

// // Connecting product routes
// const productRouter = require('./routes/product');
// app.use('/api/v1/product/', productRouter);

// app.listen(process.env.PORT || 3000, () => console.log(`Server is running on port ${process.env.PORT || 3000}`));






// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// require('dotenv').config();
 
// const app = express();
// app.use(bodyParser.json());
 
// // Connect to the database
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log('Database connection successful!'));

// // Connecting routes
// const userRouter = require('./routes/user');
// app.use('/api/v1/user/', userRouter);

 
// app.listen(process.env.PORT || 3000, ()=> console.log(`Server is running on port ${process.env.PORT || 3000}`))
