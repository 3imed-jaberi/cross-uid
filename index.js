/**
 * Generate an Unique Id ..
 *
 * @param {Number} length The number of chars of the uid.
 * @returns {String} The Unique Id.
 */

module.exports = function uid (length) {
  // Polyfill aka support Browser + Node.js.
  const randomBytes = require('randombytes');
  // Default length is 12.
  length = length || 12;
  // 64 characters in the ascii range that can be used in URLs without special encoding.
  const BASE_UID = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  // Generate an some random bytes.
  const bytes = randomBytes(length);
  // From buffer to String.
  let toStr = [];
  for (const byte of bytes) {
    toStr = [
      ...toStr,
      BASE_UID[byte % 64]
    ];
  }
  toStr = toStr.join('');
  
  // result ...
  return toStr;
};
