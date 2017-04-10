"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_helpers_1 = require("./object-helpers");
const scale_1 = require("./scale");
var Size;
(function (Size) {
    function scale(size, scale) {
        const { width, height } = object_helpers_1.default.isNumber(size) ?
            { width: size, height: size } : size;
        const { x: scaleX, y: scaleY } = scale_1.default.forceXY(scale);
        return {
            width: width * scaleX,
            height: height * scaleY
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