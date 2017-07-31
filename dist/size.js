"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./utilities");
var scale_1 = require("./scale");
var Size;
(function (Size) {
    function scale(size, scale) {
        var _a = utilities_1.default.isNumber(size) ?
            { width: size, height: size } : size, width = _a.width, height = _a.height;
        var _b = scale_1.default.forceXY(scale), scaleX = _b.x, scaleY = _b.y;
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