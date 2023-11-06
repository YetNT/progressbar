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
        it("should split the char with a split of '6'", function () {
            bar.charSplit("6");
            expect(bar.bar).to.eql("eeeeeeeee6ffffffffff");
        });
        it("should update the bar, changing it's entire look.", function () {
            bar.emptyChar = "O";
            bar.fullChar = "@";
            bar.lastEdgeOverride = [">", "}"];
            bar.firstEdgeOverride = ["<", "{"];

            expect(bar.bar).to.eql("{@@@@@@@@@OOOOOOOOO>");
        });
        it("should clear edge overrides.", function () {
            bar.lastEdgeOverride = [];
            bar.firstEdgeOverride = [];
            expect(bar.bar).to.eql("@@@@@@@@@@OOOOOOOOOO");
        });

        let bar2 = new ProgressBar(100, 4, "e", "f", ["<", "<"], [">", ">"]);
        it("should NOT split with the char, since there is a lastEdgeOverride and bar is 100%", function () {
            bar2.charSplit("null");
            expect(bar2.bar).to.eql("<ff>");
        });
    });
});
