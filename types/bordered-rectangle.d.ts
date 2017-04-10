import Rectangle, { Rectangular } from './rectangle';
import Borders from './borders';
import Scale from './scale';
export default class BorderedRectangle extends Rectangle {
    private static defaultBorders;
    readonly borders: Borders;
    private _interior;
    constructor(rect: Rectangular, borders?: Borders);
    readonly interior: Rectangle;
    scale(scale: Scale): BorderedRectangle;
    static addBorders(rect: Rectangular, borders: Borders): BorderedRectangle;
    private static applyBorders(rect, borders, multiplier?);
}
