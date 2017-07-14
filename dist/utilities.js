"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isClass(obj, className) {
    const type = typeof obj;
    const strFn = Object.prototype.toString;
    return (type === className) ||
        (type === 'object') &&
            (strFn.call(obj) === `[object ${className}]`);
}
const Utilities = {
    isNumber: function (obj) {
        return isClass(obj, 'number');
    },
    cordon: function (obj) {
        return Object.freeze(Object.assign({}, obj));
    },
    selectMap: function (obj, select, map) {
        const result = {};
        select.forEach((key, index) => {
            const mapped = map(obj[key], key, index);
            if (mapped !== undefined)
                result[key] = mapped;
        });
        return result;
    },
    round: function (value, precision = 0) {
        let multiplier = Math.pow(10, Math.abs(precision || 0));
        if (precision < 0)
            multiplier = 1 / multiplier;
        return Math.round(value * multiplier) / multiplier;
    },
    ensureSize: function (size) {
        return Utilities.isNumber(size) ? { width: size, height: size } : size;
    }
};
exports.default = Utilities;
//# sourceMappingURL=utilities.js.map