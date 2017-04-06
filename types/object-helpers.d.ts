declare var _default: {
    isNumber: (obj: Object) => obj is number;
    cordon: <T>(obj: T) => Readonly<{} & T>;
    selectMap: <T, U>(obj: {
        [key: string]: T;
    }, select: string[], map: (val: T, key: string, index: number) => U) => {
        [key: string]: U;
    };
};
export default _default;
