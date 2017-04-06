"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
})(Borders || (Borders = {}));
exports.default = Borders;
//# sourceMappingURL=borders.js.map