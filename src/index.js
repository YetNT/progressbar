/**
 * @param {Integer} percentage How much of the progress bar should be filled. (A number between 1 and 100)
 * @param {Integer} MAX How long should the bar be?
 * @param {String} a What should be displayed for parts of the bar that are filled.
 * @param {String} b What should be displayed for parts of the bar that is empty.
 */
const bar = (percentage, MAX, a, b) => { // (Percent of the bar you want full (out of 100), Amount of units in the bar)

  if (typeof percentage !== "number" || (typeof MAX !== "number" && MAX >= 100)) {
    console.error("error")
    return;
  }

  var units = (percentage / 100) * MAX // Amount of units that will be shaded (Do Not Edit)
  var bar = []
  let empty = null, filled = null;
  
  for ( i = 0; i < MAX; i++) {

    if (a == undefined && b == undefined) {
      empty = "empty", filled = "filled"
    } else {
      empty = a, filled = b
    }
    
    if ( i < units) {
      bar.push(filled)
    } else {
      bar.push(empty)
    }
  }
  return bar

}

module.exports = { bar }
