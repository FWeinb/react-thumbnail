# react-thumbnail

> Include a static version of a webpage or your react element

## Install

```
$ npm install react-thumbnail --save
```

## Usage

```js
import React from 'react';
import Thumbnail from 'react-thumbnail';

React.render(
  <Thumbnail width={250}
             height={250}
             page="https://facebook.github.io/react/docs/getting-started.html"
             scale={4} />,
  document.getElementById('root')
)
/>
```

## Examples

See [examples](http://fweinb.github.io/react-thumbnail/) for more examples.

## License

MIT © Fabrice Weinberg