/**
 * @class ProgresBar
 * @classdesc Editable string progress bar.
 */
class ProgressBar {
    private _units: number;

    private _percentage: number;
    private _barWidth: number;
    private _emptyChar: String;
    private _fullChar: String;
    private _firstEdgeOverride: String[];
    private _lastEdgeOverride: String[];
    split: {
        isCharSplit: boolean;
        char: String;
    } = {
        isCharSplit: false,
        char: "",
    };

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
     * @param {String} emptyChar What should be displayed for parts of the bar that are empty.
     * @param {String} fullChar What should be displayed for parts of the bar that is filled.
     * @param {String[]} firstEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
     * @param {String[]} lastEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
     *
     */
    constructor(
        percentage: number,
        barWidth: number,
        emptyChar: String,
        fullChar: String,
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

        if (typeof fullChar !== "string" || typeof emptyChar !== "string") {
            throw new TypeError(
                `emptyChar (param 3) and fullChar (param 4) should be of type String`
            );
        }

        if (
            firstEdgeOverride !== undefined &&
            firstEdgeOverride.length !== lastEdgeOverride.length
        ) {
            throw new RangeError(`Overrides should only be 2 elements long.`);
        }

        this._percentage = percentage;
        this._barWidth = barWidth;
        this._emptyChar = emptyChar;
        this._fullChar = fullChar;
        this._firstEdgeOverride = firstEdgeOverride;
        this._lastEdgeOverride = lastEdgeOverride;

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
        this._units = units;
        var bar: String[] = [];
        let empty: String = "",
            filled: String = "";

        for (let i = 0; i < this._barWidth; i++) {
            if (this._emptyChar == undefined && this._fullChar == undefined) {
                (empty = "empty"), (filled = "filled");
            } else {
                (empty = this._emptyChar), (filled = this._fullChar);
            }

            if (i < units) {
                // push the filled char
                if (
                    (typeof this._firstEdgeOverride !== "undefined" &&
                        typeof this._lastEdgeOverride !== "undefined") ||
                    (this._firstEdgeOverride.length !== 0 &&
                        this._lastEdgeOverride.length !== 0)
                ) {
                    i == 0
                        ? bar.push(this._firstEdgeOverride[1])
                        : i == this._barWidth - 1
                        ? bar.push(this._lastEdgeOverride[1])
                        : bar.push(filled);
                } else {
                    bar.push(filled);
                }
            } else {
                // push the empty char
                if (
                    (typeof this._firstEdgeOverride !== "undefined" &&
                        typeof this._lastEdgeOverride !== "undefined") ||
                    (this._firstEdgeOverride.length !== 0 &&
                        this._lastEdgeOverride.length !== 0)
                ) {
                    i == 0
                        ? bar.push(this._firstEdgeOverride[0])
                        : i == this._barWidth - 1
                        ? bar.push(this._lastEdgeOverride[0])
                        : bar.push(empty);
                } else {
                    bar.push(empty);
                }
            }
        }

        if (this.split.isCharSplit) {
            // there is no use showing the split if there is an edge override and its 100%
            this.charSplit(this.split.char);
        }

        this.bar = bar.join("");
        this.barArray = bar;
    }

    /**
     *
     * @param char Change the last filled character to something else. Has no effect if percentage is 100% and there is edge overrides.
     */
    charSplit(char: String): void {
        if (
            typeof this._lastEdgeOverride !== "undefined" &&
            this.percentage == 100
        )
            return;

        if (!this.split.isCharSplit) {
            this.split.isCharSplit = true;
            this.split.char = char;
        }
        if (char !== this.split.char) this.split.char = char;

        this.barArray[this._units - 1] = char;
        this.bar = this.barArray.join("");
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

    set emptyChar(emptyChar) {
        if (typeof emptyChar !== "string") {
            throw new TypeError(`emptyChar should be of type String`);
        }
        this._emptyChar = emptyChar;
        this.updateBar();
    }
    get emptyChar() {
        return this._emptyChar;
    }

    set fullChar(fullChar) {
        if (typeof fullChar !== "string") {
            throw new TypeError(`fullChar should be of type String`);
        }
        this._fullChar = fullChar;
        this.updateBar();
    }
    get fullChar() {
        return this._fullChar;
    }

    set firstEdgeOverride(firstEdgeOverride) {
        if (firstEdgeOverride !== undefined && firstEdgeOverride.length !== 2) {
            throw new RangeError(`Overrides should only be 2 elements long.`);
        }

        this._firstEdgeOverride =
            firstEdgeOverride.length == 0 ? [] : firstEdgeOverride;

        this.updateBar();
    }
    get firstEdgeOverride() {
        return this._firstEdgeOverride;
    }

    set lastEdgeOverride(lastEdgeOverride) {
        if (lastEdgeOverride !== undefined && lastEdgeOverride.length !== 2) {
            throw new RangeError(`Overrides should only be 2 elements long.`);
        }

        this._lastEdgeOverride =
            lastEdgeOverride.length == 0 ? [] : lastEdgeOverride;

        this.updateBar();
    }
    get lastEdgeOverride() {
        return this._lastEdgeOverride;
    }
}

export { ProgressBar };
