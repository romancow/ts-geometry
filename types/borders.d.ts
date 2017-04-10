import Scale from './scale';
declare type Borders = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
declare namespace Borders {
    function create(topBottom: number, leftRight?: number): Borders;
    function scale(borders: Borders, scale: Scale): Borders;
}
export default Borders;
