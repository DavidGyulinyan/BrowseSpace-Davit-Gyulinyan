// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const express = require('express');

const cors = require('cors');

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const mongoose = require('mongoose');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const planetRoute = require('./routes/planet.rout');

const app = express();
const PORT = 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extend:false}));

// routes
// eslint-disable-next-line no-undef
app.use("/api/planets", planetRoute);

mongoose.connect("mongodb+srv://DavidGyulinyan:ekYs7qDpvqf4239v@cluster0.6dmzay5.mongodb.net/nasa_browser?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to the database");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(() => {
        console.log("connection failed");
    });
