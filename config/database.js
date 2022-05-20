// Database Connection
const mongoose = require('mongoose');

// connect ke database mongoDB
mongoose.connect(process.env.MONGODB,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));