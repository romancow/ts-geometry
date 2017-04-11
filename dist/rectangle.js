"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./utilities");
const size_1 = require("./size");
const scale_1 = require("./scale");
class Rectangle {
    constructor(props) {
        this.top = props.top;
        this.left = props.left;
        this.width = props.width;
        this.height = props.height;
        this.right = Rectangle.calcRight(props);
        this.bottom = Rectangle.calcBottom(props);
    }
    get origin() {
        return { x: this.left, y: this.top };
    }
    intersect(rect) {
        return Rectangle.intersect(this, rect);
    }
    offset(offset) {
        return Rectangle.offset(this, offset);
    }
    inflate(size) {
        return Rectangle.inflate(this, size);
    }
    scale(scale) {
        return Rectangle.scale(this, scale);
    }
    round(precision = 0) {
        return Rectangle.round(this, precision);
    }
    addBorders(borders) {
        return bordered_rectangle_1.default.addBorders(this, borders);
    }
    static intersect(rect1, rect2) {
        const top = Math.max(rect1.top, rect2.top);
        const left = Math.max(rect1.left, rect2.left);
        const [right, bottom] = [this.calcRight, this.calcBottom].map((calc) => {
            return Math.min(calc(rect1), calc(rect2));
        });
        return new Rectangle({ top: top, left: left, width: right - left, height: bottom - top });
    }
    static offset(rect, offset) {
        const { width, height } = utilities_1.default.isNumber(offset) ?
            { width: offset, height: offset } : offset;
        return new Rectangle({
            top: rect.top + height,
            left: rect.left + width,
            width: rect.width,
            height: rect.height
        });
    }
    static inflate(rect, size) {
        const { width, height } = utilities_1.default.isNumber(size) ?
            { width: size, height: size } : size;
        return new Rectangle({
            top: rect.top,
            left: rect.left,
            width: rect.width + width,
            height: rect.height + height
        });
    }
    static scale(rect, scale) {
        const size = size_1.default.scale(rect, scale);
        const { x: scaleX, y: scaleY } = scale_1.default.forceXY(scale);
        const origin = {
            x: rect.left * scaleX,
            y: rect.top * scaleY
        };
        return Rectangle.from(origin, size);
    }
    static round(rect, precision = 0) {
        const select = ['left', 'top', 'width', 'height'];
        const rounder = (val) => utilities_1.default.round(val, precision);
        const rounded = utilities_1.default.selectMap(rect, select, rounder);
        return new Rectangle(rounded);
    }
    static from(origin, size) {
        const { width, height } = this.ensureSize(size);
        return new Rectangle({
            left: origin.x + Math.min(width, 0),
            top: origin.y + Math.min(height, 0),
            width: Math.abs(width),
            height: Math.abs(height)
        });
    }
    static center(center, size) {
        const { width, height } = size_1.default.abs(this.ensureSize(size));
        return new Rectangle({
            left: center.x - (width / 2),
            top: center.y - (height / 2),
            width: width,
            height: height
        });
    }
    static calcRight(rect) {
        return (rect.right != null) ? rect.right : rect.left + rect.width;
    }
    static calcBottom(rect) {
        return (rect.bottom != null) ? rect.bottom : rect.top + rect.height;
    }
    static ensureSize(size) {
        return utilities_1.default.isNumber(size) ? { width: size, height: size } : size;
    }
}
exports.default = Rectangle;
const bordered_rectangle_1 = require("./bordered-rectangle");
//# sourceMappingURL=rectangle.js.map