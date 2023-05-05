const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
	try {
		const { name, origin, status, image, species, gender } = req.body;
		if(!name || !origin || !status || !image || !species || !gender) return res.status(401).json({ error: "Faltan datos" });
		const [characterFav, created] = await Favorite.findOrCreate({ where: { name, origin, status, image, species, gender } });
		if(!created) return res.status(200).json(characterFav);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = postFav;