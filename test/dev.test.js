
var app = require("../app");
var request = require("supertest").agent(app.listen(10010));


describe("Test suite DEMO", function () {

    it("UNO", function (done) {
        request
            .get("/")
        	.set("a", "b")
            .expect({ "name": "CHE" })
            .end(function (err, res) {

                done();

            })
    });


    it("DOS", function (done) {
        request
            .get("/")
            .set("a", "b")
            .expect({ "name": "CHE" })
            .end(function (err, res) {

                done();

            })
    });


    it("TRES", function (done) {
        request
            .get("/")
            .set("a", "b")
            .expect({ "name": "CHE" })
            .end(function (err, res) {

                done();

            })
    });


    it("CUATRO", function (done) {
        request
            .get("/")
            .set("a", "b")
            .expect({ "name": "CHE" })
            .end(function (err, res) {

                done();

            })
    });


    it("CINCO", function (done) {
        request
            .get("/")
            .set("a", "b")
            .expect({ "name": "CHE" })
            .end(function (err, res) {

                done();

            })
    });

    it("SEIS", function (done) {
        request
            .get("/")
            .set("a", "b")
            .expect({ "name": "CHE" })
            .end(function (err, res) {

                done();

            })
    });


    it("SIETE", function (done) {
        request
            .get("/")
            .set("a", "b")
            .expect({ "name": "CHE" })
            .end(function (err, res) {

                done();

            })
    });




});