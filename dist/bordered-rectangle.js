"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = require("./rectangle");
const borders_1 = require("./borders");
const object_helpers_1 = require("./object-helpers");
class BorderedRectangle extends rectangle_1.default {
    constructor(rect, borders = BorderedRectangle.defaultBorders) {
        super(rect);
        this.borders = object_helpers_1.default.cordon(borders);
    }
    get interior() {
        if (this._interior == null)
            this._interior = new rectangle_1.default(BorderedRectangle.applyBorders(this, this.borders, -1));
        return this._interior;
    }
    scale(scale) {
        const scaledRect = super.scale(scale);
        const scaledBorders = borders_1.default.scale(this.borders, scale);
        return new BorderedRectangle(scaledRect, scaledBorders);
    }
    static addBorders(rect, borders) {
        return new BorderedRectangle(BorderedRectangle.applyBorders(rect, borders), borders);
    }
    static applyBorders(rect, borders, multiplier = 1) {
        return {
            left: rect.left - borders.left * multiplier,
            top: rect.top - borders.top * multiplier,
            width: rect.width + (borders.left + borders.right) * multiplier,
            height: rect.height + (borders.top + borders.bottom) * multiplier
        };
    }
}
BorderedRectangle.defaultBorders = { top: 0, right: 0, bottom: 0, left: 0 };
exports.default = BorderedRectangle;
//# sourceMappingURL=bordered-rectangle.js.map