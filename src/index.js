/**
 * @param {Integer} percentage How much of the progress bar should be filled. (A number between 1 and 100)
 * @param {Integer} barAmount How long should the bar be?
 * @param {String} emptyChars What should be displayed for parts of the bar that are empty.
 * @param {String} fullChars What should be displayed for parts of the bar that is filled.
 * @param {Boolean} returnAr Return an array in stead of a string
 * @param {String[]} firstEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
 * @param {String[]} lastEdgeOverride Override first bar char with something else. Make sure it is similar to this ```["emptyChar", "fullChar"]```.
 * 
 * @returns Array or String when `returnAr` is specified
 */
const progressBar = (percentage, barAmount, emptyChars, fullChars, returnAr = false, firstEdgeOverride, lastEdgeOverride) => { // (Percent of the bar you want full (out of 100), Amount of units in the bar)

  if (typeof percentage !== "number" || (typeof barAmount !== "number" && barAmount >= 100)) {
    console.error("error")
    return;
  }

  var units = (percentage / 100) * barAmount // Amount of units that will be shaded (Do Not Edit)
  var bar = []
  let empty = null, filled = null;
  
  for ( i = 0; i < barAmount; i++) {

    if (emptyChars == undefined && fullChars == undefined) {
      empty = "empty", filled = "filled"
    } else {
      empty = emptyChars, filled = fullChars
    }
    
    if ( i < units) { // push the filled char
      if (typeof firstEdgeOverride !== "undefined" && typeof lastEdgeOverride !== "undefined") {
        i == 0 ? bar.push(firstEdgeOverride[1]) : i == barAmount - 1 ? bar.push(lastEdgeOverride[1]) : bar.push(filled)
      } else {
        bar.push(filled)
      }
    } else { // push the empty char
      if (typeof firstEdgeOverride !== "undefined" && typeof lastEdgeOverride !== "undefined") {
        i == 0 ? bar.push(firstEdgeOverride[0]) : i == barAmount - 1 ? bar.push(lastEdgeOverride[0]) : bar.push(empty)
      } else {
        bar.push(empty)
      }
    }
  }

  if (returnAr == true) {
    return bar
  } else {
    return bar.join("")
  }

}

module.exports = { progressBar }
