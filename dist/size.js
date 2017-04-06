"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scale_1 = require("./scale");
var Size;
(function (Size) {
    function scale(size, scale) {
        const { x: scaleX, y: scaleY } = scale_1.default.forceXY(scale);
        return {
            width: size.width * scaleX,
            height: size.height * scaleY
        };
    }
    Size.scale = scale;
    function abs(size) {
        return {
            width: Math.abs(size.width),
            height: Math.abs(size.height)
        };
    }
    Size.abs = abs;
})(Size || (Size = {}));
exports.default = Size;
//# sourceMappingURL=size.js.map