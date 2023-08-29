/**
 * @param {Integer} percentage How much of the progress bar should be filled. (A number between 1 and 100)
 * @param {Integer} barWidth How long should the bar be?
 * @param {String} emptyChars What should be displayed for parts of the bar that are empty.
 * @param {String} fullChars What should be displayed for parts of the bar that is filled.
 * @param {Boolean} returnAr Return an array in stead of a string
 * @param {String[]} firstEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
 * @param {String[]} lastEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
 *
 * @returns Array or String when `returnAr` is specified
 */
declare function progressBar(percentage: number, barWidth: number, emptyChars: String, fullChars: String, returnAr?: boolean, firstEdgeOverride?: String[], lastEdgeOverride?: String[]): String | String[];
export { progressBar };
