"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./utilities");
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
})(Scale || (Scale = {}));
exports.default = Scale;
//# sourceMappingURL=scale.js.map