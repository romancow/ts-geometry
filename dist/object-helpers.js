"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isClass(obj, className) {
    const type = typeof obj;
    const strFn = Object.prototype.toString;
    return (type === className) ||
        (type === 'object') &&
            (strFn.call(obj) === `[object ${className}]`);
}
exports.default = {
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
    }
};
//# sourceMappingURL=object-helpers.js.map