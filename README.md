# jquery-fastdom [![](https://travis-ci.org/wilsonpage/jquery-fastdom.png)](https://travis-ci.org/wilsonpage/jquery-fastdom)

Wraps jQuery DOM APIs with [FastDOM](http://github.com/wilsonpage/fastdom) to eliminate layout thrashing.

```js
// Write
$('div').html('foo', function() {

  // Read
  $('div').html(function(result) {
    result; //=> 'foo'
  });
});
```

## Implemented APIs

- $.fn.addClass
- $.fn.after
- $.fn.append
- $.fn.appendTo
- $.fn.prependTo
- $.fn.before
- $.fn.insertBefore
- $.fn.html
- $.fn.replaceWith

## Author

- **Wilson Page** - [@wilsonpage](http://twitter.com/wilsonpage)

## License

(The MIT License)

Copyright (c) 2013 Wilson Page <wilsonpage@me.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
