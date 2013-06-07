# angular-esthetic-adapter [![Build Status](https://travis-ci.org/PascalPrecht/angular-esthetic-adapter.png?branch=master)](https://travis-ci.org/PascalPrecht/angular-esthetic-adapter) [![Build Status](https://travis-ci.org/PascalPrecht/angular-esthetic-adapter.png?branch=canary)](https://travis-ci.org/PascalPrecht/angular-esthetic-adapter) [![Dependency Status](https://gemnasium.com/PascalPrecht/angular-esthetic-adapter.png)](https://gemnasium.com/PascalPrecht/angular-esthetic-adapter)

> Angular adapter module for esthetic

You can use this adapter to bring @johannestroeger awesome [esthetic plugin](https://github.com/johannestroeger/esthetic) to Angular world!

## Quick Start

Install via Bower:

```
$ bower install angular-esthetic-adapter
```

Embed in your HTML document:

```html
<script src="path/to/zepto/or/jquery.js"></script>
<script src="path/to/esthetic.js"></script>

<script src="path/to/angular.js"></script>
<script src="path/to/angular-esthetic-adapter.js"></script>
```

And then use the esthetic directive on a select element in your HTML:

```html
<select esthetic>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
</select>
```

To pass options to esthetic plugin, simply add them as object literal as attribute value like this:

```html
<select esthetic="{ btnClass: 'foo', activeClass: 'bar'">
  <option value="foo">foo</option>
  <option value="bar">bar</option>
</select>
```

[![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://wtfpl.net)
