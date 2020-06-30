const closures = require('../../Design_patterns/closures');

describe('Closures tests', () => {
  test('should ', (assert) => {
    const msg = '.get() should have access to the closure.';
    const expected = 1;
    const obj = closures.getSecret(1);

    const actual = obj.get();

    try {
      assert.ok(secret, 'This throws an error.');
    } catch (e) {
      assert.ok(
        true,
        `The secret var is only available
        to privileged methods.`
      );
    }

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
