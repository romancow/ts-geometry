import Size from './size';
declare type Scale = number | {
    x: number;
    y: number;
};
declare namespace Scale {
    function forceXY(scale: Scale): {
        x: number;
        y: number;
    };
    function invert(scale: Scale): Scale;
    function calculate(from: Size, to: Size): Scale;
}
export default Scale;
