# Unique Id
---

[![Build Status][travis-img]][travis-url] &nbsp;&nbsp;
[![Coverage Status][coverage-img]][coverage-url] &nbsp;&nbsp;
[![NPM version][npm-badge]][npm-url] &nbsp;&nbsp;
[![License][license-badge]][license-url] &nbsp;&nbsp;
![Code Size][code-size-badge] &nbsp;&nbsp;
[![Code of Conduct][coc-badge]][coc-url]

<!-- ***************** -->

[travis-img]: https://travis-ci.org/3imed-jaberi/u-id.svg?branch=master
[travis-url]: https://travis-ci.org/3imed-jaberi/u-id
[coverage-img]: https://coveralls.io/repos/github/3imed-jaberi/u-id/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/3imed-jaberi/u-id?branch=master
[npm-badge]: https://img.shields.io/npm/v/u-id.svg?style=flat
[npm-url]: https://www.npmjs.com/package/u-id
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: https://github.com/3imed-jaberi/u-id/blob/master/LICENSE
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/u-id
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc-url]: https://github.com/3imed-jaberi/u-id/blob/master/CODE_OF_CONDUCT.md

<!-- ***************** -->

Generate a randomize identifer with fixed length ⚡.

- 🔥 Blaze, Simple and lightweight.
- ✨ Polyfill Unique Id (Browser + Node.js).
- ⚖️ Tiny Size.

### `Installation`

```bash
# npm ..
$ npm install u-id
# yarn ..
$ yarn add u-id
```


### `Usage`

This is a practical example of how to use.

```javascript
  const uid = require ('u-id');

  // you can pass a optional length arg to this func.
  // the default value of length is 12.
  // const myUniqueId = uid();
  const myUniqueId = uid(15);

  // Result: 
  //  console.log(myUniqueId);
  //  Treminal
  //  $your_pc_name_with_your_directory
  //  'xxxxxxxxxx'
```

> __Important: Your risk of collisions decreases with longer strings!__


#### License
---

[MIT](LICENSE)