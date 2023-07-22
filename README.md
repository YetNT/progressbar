# progressbar.js

A progress bar creator in javascript!

# Installation

```bash
npm i @yetnt/progressbar
```

# Usage (examples below this)

```js
const { progressBar, ProgressBar } = require('@yetnt/progressbar')

progressBar(percentage, barWidth, emptyChars, fullChars, returnAr?, firstEdgeOverride?, lastEdgeOverride?)

percentage = 45 // How much of the bar is full. If 100% the whole thing is full. If 0 everything is empty.
barWidth = 10 // Width of the bar. If 10 it's 10 characters long
emptyChars = "□" // Empty character to display for parts of the bar that aren't filled.
fullChars = "■" // Full character to display for parts of the bar that  are filled.
returnAr = false // (optional) Return an array or not
firstEdgeOverride = ["◁", "◀"] // (optional) Overrides the first edge with the elements
lastEdgeOverride = ["▷", "▶"] // (optional) Overrides the last edge with elements

// This is exactly the same for class, but returnAr is not a parameter

let bar = new ProgressBar(percentage, barWidth, emptyChars, fullChars, firstEdgeOverride?, lastEdgeOverride?)
```

or if you don't want to deconstruct the function (for some reason)

```js
const pb = require("@yetnt/progressbar");
pb.progressBar();
// or
new pb.ProgressBar();
```

## A Simple bar

### Function

```js
progressBar(45, 10, "□", "■");
```

### Class

```js
let bar = new ProgressBar(45, 10, "□", "■");
bar.bar;
```

### Output

```js
"■■■■□□□□□□";
```

## Return Array

### Function

```js
progressBar(45, 10, "□", "■", true);
```

### Class

```js
let bar = new ProgressBar(45, 10, "□", "■", true);
bar.barArray;
```

### Output

```js
["■", "■", "■", "■", "□", "□", "□", "□", "□", "□"];
```

## Edge overrides

If you'd like you can also change the first bar element and the last bar element so you can edge it with emojis or something else.

### Edge Syntax

```js
["emptyChar", "filledChar"];
```

### Edge Use

#### Function

```js
progressBar(56, 30, "▢", "▧", false, ["◁", "◀"], ["▷", "▶"]);
```

#### Class

```js
let bar = new ProgressBar(56, 30, "▢", "▧", ["◁", "◀"], ["▷", "▶"]);
bar.bar;
```

#### Output

```js
"◀▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▢▢▢▢▢▢▢▢▢▢▢▢▢▷";
```

## Differences

The main difference between the function and the class (apart from one being a class and the other a function), is that when you update the barWidth/percentage properties in the class, the bar also updates.

### Example
```js
let bar = new ProgressBar(56, 30, "▢", "▧", ["◁", "◀"], ["▷", "▶"]);
bar.bar // ◀▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▢▢▢▢▢▢▢▢▢▢▢▢▢▷
bar.barWidth = 20
bar.bar // ◀▧▧▧▧▧▧▧▧▧▧▢▢▢▢▢▢▢▢▷
bar.percentage = 80
bar.bar // ◀▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▢▢▢▷
```

Warning : Bar may not work properly if you edit any other properties that aren't meant to be edited.

# Links

[Math on a progress bar](https://stackoverflow.com/a/40323549/16618019, "Takes you to stackoverflow")

[Github](https://github.com/Yetity/progressBar.js/tree/main "Where do you think this takes you?")
