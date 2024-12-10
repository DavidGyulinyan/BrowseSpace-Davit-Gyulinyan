// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const mongoose = require('mongoose');

const PlanetSchema = mongoose.Schema({
    planetName: {
        type: String,
        required: true
    },
    galaxyName: {
        type: String,
        required: true,
    },
    diameter: {
        type: Number,
        required: true,
        defaultValue: 0
    },
    distance: {
        type: Number,
        required: true,
        defaultValue: 0
    },
    finderName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
);

const Planet = mongoose.model("Planet", PlanetSchema)

// eslint-disable-next-line no-undef
module.exports = Planet;
