"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
var borders_1 = require("./borders");
var utilities_1 = require("./utilities");
var BorderedRectangle = (function (_super) {
    __extends(BorderedRectangle, _super);
    function BorderedRectangle(rect, borders) {
        if (borders === void 0) { borders = BorderedRectangle.defaultBorders; }
        var _this = _super.call(this, rect) || this;
        _this.borders = utilities_1.default.cordon(borders);
        return _this;
    }
    Object.defineProperty(BorderedRectangle.prototype, "interior", {
        get: function () {
            if (this._interior == null)
                this._interior = new rectangle_1.default(BorderedRectangle.applyBorders(this, this.borders, -1));
            return this._interior;
        },
        enumerable: true,
        configurable: true
    });
    BorderedRectangle.prototype.offset = function (offset) {
        var offsetRect = _super.prototype.offset.call(this, offset);
        return new BorderedRectangle(offsetRect, this.borders);
    };
    BorderedRectangle.prototype.inflate = function (size) {
        var inflatedRect = _super.prototype.inflate.call(this, size);
        return new BorderedRectangle(inflatedRect, this.borders);
    };
    BorderedRectangle.prototype.scale = function (scale) {
        var scaledRect = _super.prototype.scale.call(this, scale);
        var scaledBorders = borders_1.default.scale(this.borders, scale);
        return new BorderedRectangle(scaledRect, scaledBorders);
    };
    BorderedRectangle.prototype.round = function (precision) {
        if (precision === void 0) { precision = 0; }
        var roundedRect = _super.prototype.round.call(this, precision);
        var select = ['top', 'right', 'bottom', 'left'];
        var rounder = function (val) { return utilities_1.default.round(val, precision); };
        var roundedBorders = utilities_1.default.selectMap(this.borders, select, rounder);
        return new BorderedRectangle(roundedRect, roundedBorders);
    };
    BorderedRectangle.addBorders = function (rect, borders) {
        return new BorderedRectangle(BorderedRectangle.applyBorders(rect, borders), borders);
    };
    BorderedRectangle.applyBorders = function (rect, borders, multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        return {
            left: rect.left - borders.left * multiplier,
            top: rect.top - borders.top * multiplier,
            width: rect.width + (borders.left + borders.right) * multiplier,
            height: rect.height + (borders.top + borders.bottom) * multiplier
        };
    };
    return BorderedRectangle;
}(rectangle_1.default));
BorderedRectangle.defaultBorders = { top: 0, right: 0, bottom: 0, left: 0 };
exports.default = BorderedRectangle;
//# sourceMappingURL=bordered-rectangle.js.map