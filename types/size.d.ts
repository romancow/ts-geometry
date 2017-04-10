import Scale from './scale';
interface Size {
    readonly width: number;
    readonly height: number;
}
declare namespace Size {
    function scale(size: Size | number, scale: Scale): Size;
    function abs(size: Size): Size;
}
export default Size;
