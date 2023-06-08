const { progressBar } = require("./index.js");
const expect = require("expect.js");

describe("Progress Bar", function () {
    describe("#progressBar()", function () {
        it("should expose a function", function () {
            expect(progressBar).to.be.a("function");
        });

        it("should return a string (normal return method)", function () {
            let ans = progressBar(
                56,
                30,
                "▢",
                "▧",
                false,
                ["◁", "◀"],
                ["▷", "▶"]
            );
            expect(ans).to.eql("◀▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▢▢▢▢▢▢▢▢▢▢▢▢▢▷");
        });

        it("should be an array (returnAr parameter set to true)", function () {
            let ans = progressBar(
                56,
                30,
                "▢",
                "▧",
                true,
                ["◁", "◀"],
                ["▷", "▶"]
            );
            expect(Array.isArray(ans)).to.eql(true);
        });
    });
});
