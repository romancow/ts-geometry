import Scale from './scale';
interface Size {
    readonly width: number;
    readonly height: number;
}
declare namespace Size {
    function scale(size: Size, scale: Scale): Size;
    function abs(size: Size): Size;
}
export default Size;
