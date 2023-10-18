const request = require("supertest");
const app = require("./app");

describe("submitquiz route", () => {
    test("post has proper response", async () => {
        let data = { 
            favAnimal: "Dog", 
            favBook: "1984",
            favTime: "Morning",
            birthdate: "2000-01-01"
        };
        await request(app).post("/submitquiz").send(data).expect(200);
        data.favAnimal = undefined;
        await request(app).post("/submitquiz").send(data).expect(422);
    });
});