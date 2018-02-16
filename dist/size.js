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
    function equals(size1, size2) {
        return utilities_1.default.propsEqual(size1, size2, ['width', 'height']);
    }
    Size.equals = equals;
    function diff(size1, size2) {
        return {
            width: size2.width - size1.width,
            height: size2.height - size1.height
        };
    }
    Size.diff = diff;
    function max(size1, size2) {
        var props = ['width', 'height'];
        if (props.every(function (p) { return size1[p] >= size2[p]; }))
            return size1;
        else if (props.every(function (p) { return size1[p] <= size2[p]; }))
            return size2;
        else
            return utilities_1.default.mapToObject(props, function (p) { return Math.max(size1[p], size2[p]); });
    }
    Size.max = max;
})(Size || (Size = {}));
exports.default = Size;
//# sourceMappingURL=size.js.map