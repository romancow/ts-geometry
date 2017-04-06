declare type Borders = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
declare namespace Borders {
    function create(topBottom: number, leftRight?: number): Borders;
}
export default Borders;
