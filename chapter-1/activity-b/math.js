const _ = require('lodash');

function sumArray() {
    let arr = arguments[0];

    if (arguments.length > 1) {
        arr = _.concat(...arguments);
    }

    return [...arr].reduce((a, b) => a + b, 0);
}

module.exports = {
    sumArray
};