const request = require("supertest");
const app = require("../app");

describe("API Examples", () => {
  it("should post a new example", done => {
    request(app)
      .post("/api/example")
      .send({
        field1: "faisal",
        field2: 21,
        field3: true
      })
      .then(response => {
        expect(response.statusCode).toBe(201);
        expect(response.body.field1).toBe("faisal");
        expect(response.body.field2).toBe(21);
        expect(response.body.field3).toBe(true);
        done();
      });
  });

  it("should return a list of examples", done => {
    request(app)
      .get("/api/example")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty("field1");
        expect(response.body[0]).toHaveProperty("field2");
        expect(response.body[0]).toHaveProperty("field3");
        done();
      });
  });

  it("should return a specific example", done => {
    request(app)
    .post("/api/example")
    .send({
      field1: "faisal",
      field2: 21,
      field3: true
    }).then(response => {
      request(app)
      .get(`/api/example/${response.body._id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.field1).toBe("faisal");
        expect(response.body.field2).toBe(21);
        expect(response.body.field3).toBe(true);
        done();
      });
    })
  });

  it("should update a specific example", done => {
    request(app)
    .post("/api/example")
    .send({
      field1: "faisal",
      field2: 21,
      field3: true
    }).then(response => {
      request(app)
      .put(`/api/example/${response.body._id}`)
      .send({
        field1: "faisal",
        field2: 21,
        field3: true
      }).then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
    })
  });

  it("should delete a specific example", done => {
    request(app)
    .post("/api/example")
    .send({
      field1: "faisal",
      field2: 21,
      field3: true
    }).then(response => {
      request(app)
      .delete(`/api/example/${response.body._id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
    })
  });
});