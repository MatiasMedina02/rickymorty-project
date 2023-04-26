const app = require("../src/app");
const session = require("supertest");
const request = session(app);

describe("Test de RUTAS", () => {
	const character = {
		id: 1,
		name: "Rick Sanchez",
		status: "Alive",
		species: "Human",
		gender: "Male",
		origin: {
			name: "Earth (C-137)",
		},
		image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	}

	describe("GET /rickandmorty/character/:id", () => {
		it("Responde con status: 200", async () => {
			await request.get("/rickandmorty/character/1")
			.expect(200)
		});

		it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
			const response = await request.get("/rickandmorty/character/1").send();
			for(const prop in character){
				expect(response.body).toHaveProperty(prop)
			}
		});

		it("Si hay un error responde con status: 500", async () => {
			const response = await request.get("/rickandmorty/character/1").send();
			if(!response.body.id){
				expect(response.status).toBe(500);
			}
		});
	});

	describe("GET /rickandmorty/login", () => {
		const users = require("../src/utils/users");
		it("Debe retornar access: true si la información correcta", async () => {
			const user = users.find(user => user.email === "rusomedina02@gmail.com" && user.password === "matias02");
			const queryParams = new URLSearchParams({
				email: user.email,
				password: user.password
			})
			const response = await request.get(`/rickandmorty/login?${queryParams}`);
			expect(response.body).toEqual({access: true});
		});

		it("Debe retornar access: false si la información es incorrecta", async () => {
			const queryParams = new URLSearchParams({
				email: "correo@correo.com",
				password: "asd12345"
			});
			const response = await request.get(`/rickandmorty/login?${queryParams}`);
			expect(response.body).toEqual({access: false});
		});
	});

	describe("POST /rickandmorty/fav", () => {
		it("Debe guardar el personaje en favoritos", async () => {
			const response = await request.post("/rickandmorty/fav").send(character);
			expect(response.body).toContainEqual(character)
		});

		it("Debe agregar personaje a favoritos sin eliminar los existentes", async () => {
			character.id = 12;
			character.name = "Julio";
			const response = await request.post("/rickandmorty/fav").send(character);
			expect(response.body.length).toBe(2);
		})
	});

	describe("DELETE /rickandmorty/fav/:id", () => {
		it("Si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async () => {
			const response = await request.delete("/rickandmorty/fav/15623");
			expect(response.body.length).toBe(2);
		});

		it("Si se envia un ID valido se elimina correctamente personaje", async () => {
			const response = await request.delete("/rickandmorty/fav/1");
			expect(response.body.length).toBe(1);
		})
	});
});