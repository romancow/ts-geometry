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
    merge: function (target, source) {
        var obj = new Object(target);
        if (source != null) {
            var indexObj_1 = obj;
            var indexSrc_1 = source;
            Object.keys(source).forEach(function (key) { return indexObj_1[key] = indexSrc_1[key]; });
        }
        return obj;
    },
    cordon: function (obj) {
        if (Object.isFrozen(obj))
            return obj;
        var clone = Utilities.merge(null, obj);
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
    propsEqual: function (obj1, obj2, props) {
        return props.every(function (prop) { return obj1[prop] === obj2[prop]; });
    },
    round: function (value, precision) {
        if (precision === void 0) { precision = 0; }
        var multiplier = Math.pow(10, Math.abs(precision || 0));
        if (precision < 0)
            multiplier = 1 / multiplier;
        return Math.round(value * multiplier) / multiplier;
    },
    mapToObject: function (keys, map) {
        var obj = {};
        keys.forEach(function (k) {
            var val = map(k);
            if (val !== undefined)
                obj[k] = val;
        });
        return obj;
    },
    ensureSize: function (size) {
        return Utilities.isNumber(size) ? { width: size, height: size } : size;
    }
};
exports.default = Utilities;
//# sourceMappingURL=utilities.js.map