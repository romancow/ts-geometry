"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isClass(obj, className) {
    var type = typeof obj;
    var strFn = Object.prototype.toString;
    return (type === className) ||
        (type === 'object') &&
            (strFn.call(obj) === "[object " + className + "]");
}
var Utilities = {
    isNumber: function (obj) {
        return isClass(obj, 'number');
    },
    cordon: function (obj) {
        var clone = new Object();
        if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                    clone[key] = obj[key];
            }
        }
        return Object.freeze(clone);
    },
    selectMap: function (obj, select, map) {
        var result = {};
        select.forEach(function (key, index) {
            var mapped = map(obj[key], key, index);
            if (mapped !== undefined)
                result[key] = mapped;
        });
        return result;
    },
    round: function (value, precision) {
        if (precision === void 0) { precision = 0; }
        var multiplier = Math.pow(10, Math.abs(precision || 0));
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