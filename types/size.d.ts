import Scale from './scale';
interface Size {
    readonly width: number;
    readonly height: number;
}
declare namespace Size {
    function scale(size: Size | number, scale: Scale): Size;
    function abs(size: Size): Size;
    function equals(size1: Size, size2: Size): boolean;
    function diff(size1: Size, size2: Size): Size;
    function max(size1: Size, size2: Size): Size;
}
export default Size;
