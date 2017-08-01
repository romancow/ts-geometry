declare const Utilities: {
    isNumber: (obj: Object) => obj is number;
    merge: <T, S>(target: T | null, source: S) => T & S;
    cordon: <T>(obj: T) => T;
    selectMap: <T, U>(obj: {
        [key: string]: T;
    }, select: string[], map: (val: T, key: string, index: number) => U) => {
        [key: string]: U;
    };
    round: (value: number, precision?: number) => number;
    ensureSize: (size: number | Size) => Size;
};
export default Utilities;
import Size from './size';
