// Define colors for tooltip text
const colorOrange = 0xc7954b;
const colorYellow = 0xeeda78;

ItemEvents.tooltip((event) => {
  global.TOOLTIPS.forEach((tooltipItem) => {
    event.addAdvanced(tooltipItem.item, (item, advanced, text) => {

      // Remove all tooltip text except item name
      if (tooltipItem.keepOriginal != true) {
        let nameLine = text.get(0)
        text.removeIf((name) => name != nameLine)
      }
      let lineNumber = 1

      // Add hints to press SHIFT or CTRL to view text
      if (tooltipItem.hasOwnProperty('summary')) {
        if (!event.shift) {
          text.add(lineNumber, [
            Text.of('Hold [').darkGray(),
            Text.of('Shift').gray(),
            Text.of('] for Summary').darkGray(),
          ])
        } else {
          text.add(lineNumber, [
            Text.of('Hold [').darkGray(),
            Text.of('Shift').white(),
            Text.of('] for Summary').darkGray(),
          ])
        }
        lineNumber++
      }
      if (tooltipItem.hasOwnProperty('controls')) {
        if (!event.ctrl) {
          text.add(lineNumber, [
            Text.of('Hold [').darkGray(),
            Text.of('Ctrl').gray(),
            Text.of('] for Controls').darkGray(),
          ])
        } else {
          text.add(lineNumber, [
            Text.of('Hold [').darkGray(),
            Text.of('Ctrl').white(),
            Text.of('] for Controls').darkGray(),
          ])
        }
        lineNumber++
      }

      // Display SUMMARY text when SHIFT is pressed
      if (tooltipItem.hasOwnProperty('summary') && event.shift) {
        text.add(lineNumber, [])
        lineNumber++
        tooltipItem.summary.forEach((line) => {
          text.add(lineNumber, createFormattedTextObjectArray(line))
          lineNumber++
        })
      }

      // Display CONTROLS text when CTRL is pressed
      if (tooltipItem.hasOwnProperty('controls') && event.ctrl) {
        tooltipItem.controls.forEach((control) => {
          text.add(lineNumber, [])
          lineNumber++
          text.add(lineNumber, [
            Text.of(control.requiresHold ? 'Hold ' : 'When ').gray(),
            Text.of(control.control).gray(),
          ])
          lineNumber++
          control.text.forEach((line) => {
            let formattedTextObjectArray =
              createFormattedTextObjectArray(line)
            // Add a space before each line
            formattedTextObjectArray.unshift(" ")
            // Add the line to the tooltip
            text.add(lineNumber, formattedTextObjectArray)
            lineNumber++
          })
        })
      }
    })
  })
})

/**
 *
 * A function to create a formatted text object array
 * Seperates the text by $ characters and then sets any text inside $ pairs to be orange
 *
 * @param {line} A string of text to be formatted
 * @returns {textObjects} An array of text objects
 */
function createFormattedTextObjectArray(line) {
  // check if the first character is a $, if it is, the summary starts with a yellow text
  let startsInYellow = line.startsWith("$")
  // remove the $ if it does
  if (startsInYellow) {
    line = line.substring(1)
  }
  // get the summary line and split it into an array
  let lineContents = line.split("$")
  // define an interator for the for each loop
  let i = 0
  // Create an empty array for text objects to be added to
  let textObjects = []
  lineContents.forEach((textComponent) => {
    // Every other text component is orange
    let textColor = i % 2 == 0 ? colorOrange : colorYellow
    // Unless the summary starts with yellow
    if (startsInYellow) {
      textColor = i % 2 == 0 ? colorYellow : colorOrange
    }
    // Add the text component and color it
    let textObject = new Text().of(textComponent)
    textObject.color(textColor)
    textObjects.push(textObject)
    i++
  })
  return textObjects
}
