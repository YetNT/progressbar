const { progressBar, ProgressBar } = require("../dist/index");
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
    describe("ProgressBar (Class)", function () {
        it("should expose a function (class = function)", function () {
            expect(ProgressBar).to.be.a("function");
        });

        let bar = new ProgressBar(50, 10, "f", "e");
        it("should be an instance of ProgressBar", function () {
            expect(bar instanceof ProgressBar).to.eql(true);
        });
        it("should equal to the bar 'eeeeefffff'", function () {
            expect(bar.bar).to.eql("eeeeefffff");
        });
        it("should update the bar to be of width 20", function () {
            bar.barWidth = 20;
            expect(bar.bar).to.eql("eeeeeeeeeeffffffffff");
        });
    });
});
