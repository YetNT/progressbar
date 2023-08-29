/**
 * @class ProgresBar
 * @classdesc Editable string progress bar.
 */
declare class ProgressBar {
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
    constructor(percentage: number, barWidth: number, emptyChars: String, fullChars: String, firstEdgeOverride: String[], lastEdgeOverride: String[]);
    /**
     * Update the bar
     */
    updateBar(): void;
    set percentage(percentage: number);
    get percentage(): number;
    /**
     * @param {number} barWidth
     */
    set barWidth(barWidth: number);
    get barWidth(): number;
}
export { ProgressBar };
