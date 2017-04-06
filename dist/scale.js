"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_helpers_1 = require("./object-helpers");
var Scale;
(function (Scale) {
    function forceXY(scale) {
        return object_helpers_1.default.isNumber(scale) ? { x: scale, y: scale } : scale;
    }
    Scale.forceXY = forceXY;
    function invert(scale) {
        return object_helpers_1.default.isNumber(scale) ?
            1 / scale : { x: 1 / scale.x, y: 1 / scale.y };
    }
    Scale.invert = invert;
})(Scale || (Scale = {}));
exports.default = Scale;
//# sourceMappingURL=scale.js.map