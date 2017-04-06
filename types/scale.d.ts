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
}
export default Scale;
