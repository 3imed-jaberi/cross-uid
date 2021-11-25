/**
 * Generate an Unique Id ..
 *
 * @param {Number} length The number of chars of the uid.
 * @returns {String} The Unique Id.
 */

module.exports = function uid(length) {
  // polyfill aka support Browser + Node.js.
  const randomBytes = require('randombytes');
  // default length is 12.
  length = length || 12;
  // 64 characters in the ascii range that can be used in URLs without special encoding.
  const BASE_UID = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  // generate an some random bytes.
  const bytes = randomBytes(length);
  // from buffer to string.
  const str = bytes.map(byte => BASE_UID[byte % 64]).join('');

  // result.
  return str;
};
