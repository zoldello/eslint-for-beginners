/**
 * SHOWN TO EXPOSE YOU TO THE CONCEPTS OF BY-PASSING THE ESLint RULES
 *
 * - NEVER NEED TO USE THEM
 * - Talk to UI Developer if you have problems (will give you a workaround)
*/

/**
 *  Disabling a single line error
 */
console.assert.equal((1, 2), 3);

// eslint-disable-next-line no-console
console.assert.equal((1, 2), 3);

// ------------------------------

// (2) Disabling in config (var permitted)
const x = () => {
    var a = 0;
    const b = a + 1;

    return b;
};

const y = x();
console.assert.equal(y === 1);

// ------------------------------
