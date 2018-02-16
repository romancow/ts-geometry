function isClass(obj: Object, className: string) {
	const type = typeof obj
	const strFn = Object.prototype.toString
	return (type === className) ||
		   (type === 'object') &&
		   (strFn.call(obj) === `[object ${className}]`)
}

const Utilities = {

	/* Object utility methods */

	isNumber(obj: Object): obj is number {
		return isClass(obj, 'number')
	},

	merge<T, S>(target: T | null, source: S) {
		const obj = new Object(target) as T & S
		if (source != null) {
			const indexObj = obj as { [key: string]: any }
			const indexSrc = source as { [key: string]: any }
			Object.keys(source).forEach(key => indexObj[key] = indexSrc[key])
		}
		return obj
	},

	cordon<T>(obj: T) {
		if (Object.isFrozen(obj))
			return obj

		const clone: T = Utilities.merge(null, obj)
		return Object.freeze(clone)
	},

	selectMap<T, U>(obj: {[key: string]: T}, select: string[], map: (val:T, key:string, index:number) => U) {
		const result: {[key: string]: U} = {}
		select.forEach((key, index) => {
			const mapped = map(obj[key], key, index)
			if (mapped !== undefined)
				result[key] = mapped
		})
		return result
	},

	propsEqual<T>(obj1: T, obj2: T, props: (keyof T)[]) {
		return props.every(prop => obj1[prop] === obj2[prop])
	},

	/* Number utility methods */

	round(value: number, precision: number = 0) {
		let multiplier = Math.pow(10, Math.abs(precision || 0))
		if (precision < 0) multiplier = 1 / multiplier
		return Math.round(value * multiplier) / multiplier
	},

	/* Array utility methods */

	mapToObject<T extends {}, K extends keyof T>(keys: K[], map: (key: K) => T[K]): T {
		const obj = <T>{}
		keys.forEach(k => {
			const val = map(k)
			if (val !== undefined)
				obj[k] = val
		})
		return obj
	},

	/* Size utility methods */

	ensureSize(size: Size | number) {
		return Utilities.isNumber(size) ? { width: size, height: size } : size
	}
}

export default Utilities

import Size from './size'
