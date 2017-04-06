"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point;
(function (Point) {
    function diff(point1, point2) {
        return {
            width: point2.x - point1.x,
            height: point2.y - point1.y
        };
    }
    Point.diff = diff;
})(Point || (Point = {}));
exports.default = Point;
//# sourceMappingURL=point.js.map