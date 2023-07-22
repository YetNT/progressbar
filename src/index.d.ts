/**
 * @param {Range<0, 100>} percentage How much of the progress bar should be filled. (A number between 1 and 100)
 * @param {Integer} barWidth How long should the bar be?
 * @param {String} emptyChars What should be displayed for parts of the bar that are empty.
 * @param {String} fullChars What should be displayed for parts of the bar that is filled.
 * @param {Boolean} returnAr Return an array in stead of a string
 * @param {String[]} firstEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
 * @param {String[]} lastEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
 *
 * @returns Array or String when `returnAr` is specified
 */
declare function progressBar(
    percentage: Range<0, 100>,
    barWidth: number,
    emptyChars: string,
    fullChars: string,
    returnAr?: boolean,
    firstEdgeOverride?: string[],
    lastEdgeOverride?: string[]
): string | string[];

declare class ProgressBar {
    /**
     * To return the bar, use `ProgressBar`.bar or `ProgressBar`.barArray
     *
     * @param {Range<0, 100>} percentage How much of the progress bar should be filled. (A number between 1 and 100)
     * @param {Integer} barWidth How long should the bar be?
     * @param {String} emptyChars What should be displayed for parts of the bar that are empty.
     * @param {String} fullChars What should be displayed for parts of the bar that is filled.
     * @param {String[]} firstEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
     * @param {String[]} lastEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
     */
    constructor(
        percentage: Range<0, 100>,
        barWidth: number,
        emptyChars: string,
        fullChars: string,
        firstEdgeOverride?: string[],
        lastEdgeOverride?: string[]
    );

    /**
     * @property Return the bar as a string
     *
     */
    bar: string;

    /**
     * @property Return the bar as an array
     */
    barArray: string[];

    set percentage(percentage: Range<0, 100>): void;
    get percentage(): number;

    set barWidth(barWidth: number): void;
    get barWidth(): number;
}

type Enumerate<
    N extends number,
    Acc extends number[] = []
> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
    Enumerate<T>,
    Enumerate<F>
>;

export = { progressBar, ProgressBar };
