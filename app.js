const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); // Sequelize setup

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/user', userRoutes);

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Page Not Found" });
});

// Database sync and server start
sequelize.sync()
    .then(result => {
        app.listen(4000, () => console.log("Server running on http://localhost:4000"));
    })
    .catch(err => {
        console.error("Failed to sync database:", err);
    });
