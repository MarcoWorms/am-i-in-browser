`npm install is-browser --save`

```javascript
const isBrowser = require('isbrowser')

if (isBrowser()) {
  console.log('you are running this in a browser!')
} else {
  console.log('you are running this in node!')
}
```
