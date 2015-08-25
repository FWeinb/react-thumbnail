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

You can find some more examples [here](http://fweinb.github.io/react-thumbnail/).

## License

MIT © Fabrice Weinberg