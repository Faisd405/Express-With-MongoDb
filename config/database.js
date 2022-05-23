// Database Connection
const mongoose = require('mongoose');

// connect ke database mongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

try {
    const db = mongoose.connection;
    db.once('open', () => console.log('Database Connected'));
} catch (error) {
    db.on('error', (error) => console.error(error));
}