"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./utilities");
const scale_1 = require("./scale");
var Size;
(function (Size) {
    function scale(size, scale) {
        const { width, height } = utilities_1.default.isNumber(size) ?
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