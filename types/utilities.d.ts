declare const Utilities: {
    isNumber(obj: Object): obj is number;
    merge<T, S>(target: T | null, source: S): T & S;
    cordon<T>(obj: T): T;
    selectMap<T, U>(obj: {
        [key: string]: T;
    }, select: string[], map: (val: T, key: string, index: number) => U): {
        [key: string]: U;
    };
    propsEqual<T>(obj1: T, obj2: T, props: (keyof T)[]): boolean;
    round(value: number, precision?: number): number;
    mapToObject<T extends {}, K extends keyof T>(keys: K[], map: (key: K) => T[K]): T;
    ensureSize(size: number | Size): Size;
};
export default Utilities;
import Size from './size';
