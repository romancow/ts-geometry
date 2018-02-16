import Scale from './scale';
import Size from './size';
declare type Borders = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
declare namespace Borders {
    function create(topBottom: number, leftRight?: number): Borders;
    function fromInset(outer: Size, inner: Size): Borders;
    function scale(borders: Borders, scale: Scale): Borders;
    function equals(borders1: Borders, borders2: Borders): boolean;
}
export default Borders;
