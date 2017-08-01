import Rectangle, { Rectangular } from './rectangle';
import Borders from './borders';
import Size from './size';
import Scale from './scale';
export default class BorderedRectangle extends Rectangle {
    private static defaultBorders;
    readonly borders: Readonly<Borders>;
    private _interior;
    constructor(rect: Rectangular | SVGRect, borders?: Borders);
    readonly interior: Rectangle;
    offset(offset: Size | number): BorderedRectangle;
    inflate(size: Size | number): BorderedRectangle;
    scale(scale: Scale): BorderedRectangle;
    round(precision?: number): BorderedRectangle;
    static addBorders(rect: Rectangular, borders: Borders): BorderedRectangle;
    private static applyBorders(rect, borders, multiplier?);
}
