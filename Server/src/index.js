const server = require("./app");
const { conn } = require("./DB_connection");

const PORT = 3001;
server.listen(PORT, async () => {
	conn.sync({ force: true });
	console.log(`Server listening on port ${PORT}`);
});