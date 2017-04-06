import Size from './size';
declare type Point = {
    x: number;
    y: number;
};
declare namespace Point {
    function diff(point1: Point, point2: Point): Size;
}
export default Point;
