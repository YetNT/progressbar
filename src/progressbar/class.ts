/**
 * @class ProgresBar
 * @classdesc Editable string progress bar.
 */
class ProgressBar {
    _percentage: number;
    _barWidth: number;
    emptyChars: String;
    fullChars: String;
    firstEdgeOverride: String[];
    lastEdgeOverride: String[];

    /**
     * Progress bar in it's string form.
     */
    bar: String;

    /**
     * Progress bar in it's array form
     */
    barArray: String[];

    /**
     * @param {Integer} percentage How much of the progress bar should be filled. (A number between 1 and 100)
     * @param {Integer} barWidth How long should the bar be?
     * @param {String} emptyChars What should be displayed for parts of the bar that are empty.
     * @param {String} fullChars What should be displayed for parts of the bar that is filled.
     * @param {String[]} firstEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
     * @param {String[]} lastEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
     *
     */
    constructor(
        percentage: number,
        barWidth: number,
        emptyChars: String,
        fullChars: String,
        firstEdgeOverride?: String[],
        lastEdgeOverride?: String[]
    ) {
        // (Percent of the bar you want full (out of 100), Amount of units in the bar)
        // checks
        if (
            (percentage > 100 ||
                percentage < 0 ||
                typeof percentage !== "number") &&
            !Number.isInteger(percentage)
        ) {
            let out: String = ``;
            percentage > 100
                ? (out = `${percentage} > 100`)
                : percentage < 0
                ? (out = `${percentage} < 0`)
                : (out = `percentage is currently a ${typeof percentage}`);

            throw new TypeError(
                `percentage should be a valid integer/float between 0 and 100.` +
                    "\n" +
                    out
            );
        }

        if (typeof barWidth !== "number") {
            throw new TypeError(`Barwidth should be a valid Int`);
        }

        if (typeof fullChars !== "string" || typeof emptyChars !== "string") {
            throw new TypeError(
                `emptyChar (param 3) and fullChar (param 4) should be of type String`
            );
        }

        if (
            firstEdgeOverride !== undefined &&
            firstEdgeOverride.length !== lastEdgeOverride.length
        ) {
            throw new TypeError(`Overrides should only be 2 elements long.`);
        }

        this._percentage = percentage;
        this._barWidth = barWidth;
        this.emptyChars = emptyChars;
        this.fullChars = fullChars;
        this.firstEdgeOverride = firstEdgeOverride;
        this.lastEdgeOverride = lastEdgeOverride;

        this.updateBar();
    }

    /**
     * Update the bar
     */
    updateBar() {
        // logic
        var units: number = Math.floor(
            (this._percentage / 100) * this._barWidth
        ); // Amount of units that will be shaded (Do Not Edit)
        var bar: String[] = [];
        let empty: String = "",
            filled: String = "";

        for (let i = 0; i < this._barWidth; i++) {
            if (this.emptyChars == undefined && this.fullChars == undefined) {
                (empty = "empty"), (filled = "filled");
            } else {
                (empty = this.emptyChars), (filled = this.fullChars);
            }

            if (i < units) {
                // push the filled char
                if (
                    typeof this.firstEdgeOverride !== "undefined" &&
                    typeof this.lastEdgeOverride !== "undefined"
                ) {
                    i == 0
                        ? bar.push(this.firstEdgeOverride[1])
                        : i == this._barWidth - 1
                        ? bar.push(this.lastEdgeOverride[1])
                        : bar.push(filled);
                } else {
                    bar.push(filled);
                }
            } else {
                // push the empty char
                if (
                    typeof this.firstEdgeOverride !== "undefined" &&
                    typeof this.lastEdgeOverride !== "undefined"
                ) {
                    i == 0
                        ? bar.push(this.firstEdgeOverride[0])
                        : i == this._barWidth - 1
                        ? bar.push(this.lastEdgeOverride[0])
                        : bar.push(empty);
                } else {
                    bar.push(empty);
                }
            }
        }

        this.bar = bar.join("");
        this.barArray = bar;
    }

    set percentage(percentage) {
        if (
            (percentage > 100 ||
                percentage < 0 ||
                typeof percentage !== "number") &&
            !Number.isInteger(percentage)
        ) {
            let out: String = ``;
            percentage > 100
                ? (out = `${percentage} > 100`)
                : percentage < 0
                ? (out = `${percentage} < 0`)
                : (out = `percentage is currently a ${typeof percentage}`);

            throw new TypeError(
                `percentage should be a valid integer/float between 0 and 100.` +
                    "\n" +
                    out
            );
        }
        this._percentage = percentage;
        this.updateBar();
    }

    get percentage() {
        return this._percentage;
    }

    /**
     * @param {number} barWidth
     */
    set barWidth(barWidth) {
        if (typeof barWidth !== "number") {
            throw new TypeError(`Barwidth should be a valid Int`);
        }
        this._barWidth = barWidth;
        this.updateBar();
    }

    get barWidth() {
        return this._barWidth;
    }
}

export { ProgressBar };
