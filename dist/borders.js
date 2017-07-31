"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scale_1 = require("./scale");
var Borders;
(function (Borders) {
    function create(topBottom, leftRight) {
        if (leftRight === void 0) { leftRight = topBottom; }
        return {
            top: topBottom,
            right: leftRight,
            bottom: topBottom,
            left: leftRight
        };
    }
    Borders.create = create;
    function fromInset(outer, inner) {
        var topBottom = (outer.height - inner.height) / 2;
        var leftRight = (outer.width - inner.width) / 2;
        return Borders.create(topBottom, leftRight);
    }
    Borders.fromInset = fromInset;
    function scale(borders, scale) {
        var _a = scale_1.default.forceXY(scale), scaleX = _a.x, scaleY = _a.y;
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