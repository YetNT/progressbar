# progressbar

A progress bar creator in ~~javascript~~ typescript!

NOTE: All examples and explanations are in javascript.

# Installation

```bash
npm install @yetnt/progressbar
sudo npm install @yetnt/progressbar
yarn add @yetnt/progressbar
```

## (Jump To)

-   [A Simple Bar](#a-simple-bar)
-   [Seperated Bar](#seprated-bar-charsplit-method)
-   [Discord.js Example](#discordjs-example)

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

or if you don't want to deconstruct them (for some reason)

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
## Discord.js example
__Code might need to be modified depending on your command handler, if you are using [Under Ctrl's Command Handler](https://youtu.be/JEEcbVjLyr0) it should work perfectly!__
```js
const { ProgressBar, progressBar } = require("@yetnt/progressbar") // deconstructing
module.exports = {
    name: "progressbar",
    description: "usefull npm package made by yet",
    callback: async (client, interaction) => {
        const progressBar = new ProgressBar(55,10,"▢","▧")

        interaction.reply({
            content: progressBar.bar,
            ephemeral: true
        })
    }
}
```
### Output
<img src="/imgs/dbe.png">


## Differences

### Dynamic Bar

Unlike the [function](#function), If you update the `percentage` or `barWidth` property of the ProgessBar object, the bar updates.

```js
let bar = new ProgressBar(56, 30, "▢", "▧", ["◁", "◀"], ["▷", "▶"]);
bar.bar; // ◀▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▢▢▢▢▢▢▢▢▢▢▢▢▢▷
bar.barWidth = 20;
bar.bar; // ◀▧▧▧▧▧▧▧▧▧▧▢▢▢▢▢▢▢▢▷
bar.percentage = 80;
bar.bar; // ◀▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▢▢▢▷
```

Warning : Bar may not work properly if you edit any other properties that aren't meant to be edited.

### Seprated Bar (charsplit method)

To seprate a bar with some value (Replace the last filled char), you can use the `charSplit()` method.

```js
let bar = new ProgressBar(56, 30, "▢", "▧");
bar.bar; // ▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▢▢▢▢▢▢▢▢▢▢▢▢▢▢
bar.charSplit("▶");
bar.bar; // ▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▶▢▢▢▢▢▢▢▢▢▢▢▢▢▢
```

The bar will NOT charSplit if :

> 1. [Last Edge Override](#edge-overrides) is provided
>
>     AND
>
> 2. Bar's percentage is 100%


# Links

[NPM](https://www.npmjs.com/package/@yetnt/progressbar, "takes you to node package manager registery")

[Math on a progress bar](https://stackoverflow.com/a/40323549/16618019, "Takes you to stackoverflow")

[Github](https://github.com/Yetity/progressBar.js/tree/main "Where do you think this takes you?")
