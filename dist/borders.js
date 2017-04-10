"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scale_1 = require("./scale");
var Borders;
(function (Borders) {
    function create(topBottom, leftRight = topBottom) {
        return {
            top: topBottom,
            right: leftRight,
            bottom: topBottom,
            left: leftRight
        };
    }
    Borders.create = create;
    function scale(borders, scale) {
        const { x: scaleX, y: scaleY } = scale_1.default.forceXY(scale);
        return {
            top: borders.top * scaleY,
            right: borders.right * scaleX,
            bottom: borders.bottom * scaleY,
            left: borders.left * scaleX
        };
    }
    Borders.scale = scale;
})(Borders || (Borders = {}));
exports.default = Borders;
//# sourceMappingURL=borders.js.map