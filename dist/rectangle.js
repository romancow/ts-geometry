"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./utilities");
var size_1 = require("./size");
var point_1 = require("./point");
var scale_1 = require("./scale");
var Rectangular;
(function (Rectangular) {
    function isRectangular(obj) {
        return ['left', 'top', 'width', 'height'].every(function (prop) { return prop in obj; });
    }
    Rectangular.isRectangular = isRectangular;
    function ensure(rect) {
        return Rectangular.isRectangular(rect) ? rect : Rectangle.fromSVGRect(rect);
    }
    Rectangular.ensure = ensure;
})(Rectangular || (Rectangular = {}));
var Rectangle = (function () {
    function Rectangle(props) {
        var rect = Rectangular.ensure(props);
        this.top = rect.top;
        this.left = rect.left;
        this.width = rect.width;
        this.height = rect.height;
        this.right = Rectangle.calcRight(rect);
        this.bottom = Rectangle.calcBottom(rect);
    }
    Object.defineProperty(Rectangle.prototype, "origin", {
        get: function () {
            return { x: this.left, y: this.top };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "center", {
        get: function () {
            return {
                x: this.left + (this.width / 2),
                y: this.top + (this.height / 2)
            };
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.intersect = function (rect) {
        return Rectangle.intersect(this, rect);
    };
    Rectangle.prototype.offset = function (offset) {
        return Rectangle.offset(this, offset);
    };
    Rectangle.prototype.inflate = function (size) {
        return Rectangle.inflate(this, size);
    };
    Rectangle.prototype.scale = function (scale) {
        return Rectangle.scale(this, scale);
    };
    Rectangle.prototype.round = function (precision) {
        if (precision === void 0) { precision = 0; }
        return Rectangle.round(this, precision);
    };
    Rectangle.prototype.addBorders = function (borders) {
        return bordered_rectangle_1.default.addBorders(this, borders);
    };
    Rectangle.intersect = function (rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top);
        var left = Math.max(rect1.left, rect2.left);
        var _a = [this.calcRight, this.calcBottom].map(function (calc) {
            return Math.min(calc(rect1), calc(rect2));
        }), right = _a[0], bottom = _a[1];
        return new Rectangle({ top: top, left: left, width: right - left, height: bottom - top });
    };
    Rectangle.offset = function (rect, offset) {
        var size = utilities_1.default.ensureSize(offset);
        var origin = point_1.default.offset({ x: rect.left, y: rect.top }, size);
        return Rectangle.from(origin, rect);
    };
    Rectangle.inflate = function (rect, size) {
        var _a = utilities_1.default.isNumber(size) ?
            { width: size, height: size } : size, width = _a.width, height = _a.height;
        return new Rectangle({
            top: rect.top,
            left: rect.left,
            width: rect.width + width,
            height: rect.height + height
        });
    };
    Rectangle.scale = function (rect, scale) {
        var size = size_1.default.scale(rect, scale);
        var _a = scale_1.default.forceXY(scale), scaleX = _a.x, scaleY = _a.y;
        var origin = {
            x: rect.left * scaleX,
            y: rect.top * scaleY
        };
        return Rectangle.from(origin, size);
    };
    Rectangle.round = function (rect, precision) {
        if (precision === void 0) { precision = 0; }
        var select = ['left', 'top', 'width', 'height'];
        var rounder = function (val) { return utilities_1.default.round(val, precision); };
        var rounded = utilities_1.default.selectMap(rect, select, rounder);
        return new Rectangle(rounded);
    };
    Rectangle.equals = function (rect1, rect2) {
        return utilities_1.default.propsEqual(rect1, rect2, ['top', 'left', 'width', 'height']);
    };
    Rectangle.from = function (origin, size) {
        var _a = utilities_1.default.ensureSize(size), width = _a.width, height = _a.height;
        return new Rectangle({
            left: origin.x + Math.min(width, 0),
            top: origin.y + Math.min(height, 0),
            width: Math.abs(width),
            height: Math.abs(height)
        });
    };
    Rectangle.fromSVGRect = function (svgRect) {
        return Rectangle.from(svgRect, svgRect);
    };
    Rectangle.center = function (center, size) {
        var _a = size_1.default.abs(utilities_1.default.ensureSize(size)), width = _a.width, height = _a.height;
        return new Rectangle({
            left: center.x - (width / 2),
            top: center.y - (height / 2),
            width: width,
            height: height
        });
    };
    Rectangle.calcRight = function (rect) {
        return (rect.right != null) ? rect.right : rect.left + rect.width;
    };
    Rectangle.calcBottom = function (rect) {
        return (rect.bottom != null) ? rect.bottom : rect.top + rect.height;
    };
    return Rectangle;
}());
exports.default = Rectangle;
var bordered_rectangle_1 = require("./bordered-rectangle");
//# sourceMappingURL=rectangle.js.map