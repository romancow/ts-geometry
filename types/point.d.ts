import Size from './size';
declare type Point = {
    x: number;
    y: number;
};
declare namespace Point {
    function diff(point1: Point, point2: Point): Size;
    function offset(point: Point, offset: Size | number): Point;
    function equals(point1: Point, point2: Point): boolean;
}
export default Point;
