require('mocha');
const assert = require('assert');

const uid = require('.');

describe('Unique Id', () => {

  it('default length === 12 ===', () => assert(uid().length === 12));

  it('provide length as input === 60 ===', () => assert(uid(60).length === 60));

  // If you provide big length as input like this: uid(10000000000).
  // Should see an error (ERR_OUT_OF_RANGE: It must be >= 0 && <= 2147483647).
});
