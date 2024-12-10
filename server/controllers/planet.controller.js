// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const Planet = require('../models/planet.model');

const getPlanets = async (req, res) => {
    try {
        const planet = await Planet.find({});
        res.status(200).json(planet);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getPlanet = async (req, res) => {
    try {
        const planet = await Planet.create(req.body);
        res.status(200).json(planet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPlanet = async (req, res) => {
    try {
        const planet = await Planet.create(req.body);
        res.status(200).json(planet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletePlanet = async (req, res) => {
    try {
        const { id } = req.params;
        const planet = await Planet.findByIdAndDelete(id);

        if (!planet) {
            return res.status(404).json({ message: "Planet not found" });
        }

        res.status(200).json({ message: "Planet deleted sccesfully" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// eslint-disable-next-line no-undef
module.exports = {
    getPlanets,
    getPlanet,
    createPlanet,
    deletePlanet
};
