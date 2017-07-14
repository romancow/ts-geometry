"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./utilities");
var Point;
(function (Point) {
    function diff(point1, point2) {
        return {
            width: point2.x - point1.x,
            height: point2.y - point1.y
        };
    }
    Point.diff = diff;
    function offset(point, offset) {
        const size = utilities_1.default.ensureSize(offset);
        return {
            x: point.x + size.width,
            y: point.y + size.height
        };
    }
    Point.offset = offset;
})(Point || (Point = {}));
exports.default = Point;
//# sourceMappingURL=point.js.map