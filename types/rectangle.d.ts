import Size from './size';
import Point from './point';
import Scale from './scale';
import Borders from './borders';
export interface Rectangular extends Size {
    readonly left: number;
    readonly top: number;
    readonly bottom?: number;
    readonly right?: number;
}
export default class Rectangle implements Rectangular {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
    constructor(props: Rectangular);
    readonly origin: Point;
    intersect(rect: Rectangular): Rectangle;
    offset(offset: Size | number): Rectangle;
    inflate(size: Size | number): Rectangle;
    scale(scale: Scale): Rectangle;
    round(precision?: number): Rectangle;
    addBorders(borders: Borders): BorderedRectangle;
    static intersect(rect1: Rectangular, rect2: Rectangular): Rectangle;
    static offset(rect: Rectangular, offset: Size | number): Rectangle;
    static inflate(rect: Rectangular, size: Size | number): Rectangle;
    static scale(rect: Rectangular, scale: Scale): Rectangle;
    static round(rect: Rectangular, precision?: number): Rectangle;
    static from(origin: Point, size: Size | number): Rectangle;
    static center(center: Point, size: Size | number): Rectangle;
    private static calcRight(rect);
    private static calcBottom(rect);
    private static ensureSize(size);
}
import BorderedRectangle from './bordered-rectangle';
