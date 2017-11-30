"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./utilities");
var Scale;
(function (Scale) {
    function forceXY(scale) {
        return utilities_1.default.isNumber(scale) ? { x: scale, y: scale } : scale;
    }
    Scale.forceXY = forceXY;
    function invert(scale) {
        return utilities_1.default.isNumber(scale) ?
            1 / scale : { x: 1 / scale.x, y: 1 / scale.y };
    }
    Scale.invert = invert;
    function calculate(from, to) {
        return {
            x: to.width / (from.width || 1),
            y: to.height / (from.height || 1),
        };
    }
    Scale.calculate = calculate;
    function equals(scale1, scale2) {
        var _a = Scale.forceXY(scale1), x1 = _a.x, y1 = _a.y;
        var _b = Scale.forceXY(scale2), x2 = _b.x, y2 = _b.y;
        return (x1 === x2) && (y1 === y2);
    }
    Scale.equals = equals;
})(Scale || (Scale = {}));
exports.default = Scale;
//# sourceMappingURL=scale.js.map