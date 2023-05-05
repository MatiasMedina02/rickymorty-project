const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
	try {
		const { id } = req.params;
		const { userId } = req.query;
		const fav = await Favorite.findOne({ where: id })
		await fav.destroy(userId);;
		return res.status(200).json({ success: true });
		return 
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = deleteFav;