# progressbar.js
A progress bar creator in javascript!

# Installation
```js
npm i @yetnt/progressBar
```

# Usage
```js
const { progressBar } = require('@yetnt/progressBar')
```
## A Simple bar

```js
progressBar(45, 10, "□", "■")
```
 Output
```js
"■■■■□□□□□□"
```

## Return Array

```js
progressBar(45, 10, "□", "■", true)
```
Output
```js
[
  '■', '■', '■', '■',
  '□', '□', '□', '□',
  '□', '□'
]
```

## Edge overrides

If you'd like you can also change the first bar element and the last bar element so you can edge it with emojis or something else.

### Edge Syntax

```js
["emptyChar", "filledChar"]
```

### Edge Use

```js
progressBar(56, 30, "▢", "▧", false, ["◁", "◀"], ["▷", "▶"])
```
Output
```js
"◀▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▢▢▢▢▢▢▢▢▢▢▢▢▢▷"
```

# Links

[Math on a progress bar](https://stackoverflow.com/a/40323549/16618019, "Takes you to stackoverflow")

[Github](https://github.com/Yetity/progressBar.js/tree/main "Where do you think this takes you?")

