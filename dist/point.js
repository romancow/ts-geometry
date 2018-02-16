"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./utilities");
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
        var size = utilities_1.default.ensureSize(offset);
        return {
            x: point.x + size.width,
            y: point.y + size.height
        };
    }
    Point.offset = offset;
    function equals(point1, point2) {
        return utilities_1.default.propsEqual(point1, point2, ['x', 'y']);
    }
    Point.equals = equals;
})(Point || (Point = {}));
exports.default = Point;
//# sourceMappingURL=point.js.map