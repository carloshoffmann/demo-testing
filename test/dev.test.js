
var app = require("../app");
var request = require("supertest").agent(app.listen(10010));

describe("Test suite DEMO", function () {

    it("checking root method", function (done) {
        request
            .get("/")
        	.set("a", "b")
            .expect({ "name": "CHE" })
            .end(done);
    });



});