function isClass(obj: Object, className: string) {
	const type = typeof obj
	const strFn = Object.prototype.toString
	return (type === className) ||
		   (type === 'object') &&
		   (strFn.call(obj) === `[object ${className}]`)
}

const Utilities = {

	/* Object utility methods */

	isNumber: function (obj: Object): obj is number {
		return isClass(obj, 'number')
	},

	merge: function<T, S>(target: T | null, source: S) {
		const obj = new Object(target) as T & S
		if (source != null) {
			const indexObj = obj as { [key: string]: any }
			const indexSrc = source as { [key: string]: any }
			Object.keys(source).forEach(key => indexObj[key] = indexSrc[key])
		}
		return obj
	},

	cordon: function<T>(obj: T) {
		if (Object.isFrozen(obj))
			return obj
			
		const clone: T = Utilities.merge(null, obj)
		return Object.freeze(clone)
	},

	selectMap: function <T, U>(obj: {[key: string]: T}, select: string[], map: (val:T, key:string, index:number) => U) {
		const result: {[key: string]: U} = {}
		select.forEach((key, index) => {
			const mapped = map(obj[key], key, index)
			if (mapped !== undefined)
				result[key] = mapped
		})
		return result
	},

	/* Number utility methods */

	round: function(value: number, precision: number = 0) {
		let multiplier = Math.pow(10, Math.abs(precision || 0))
		if (precision < 0) multiplier = 1 / multiplier
		return Math.round(value * multiplier) / multiplier
	},

	/* Size utility methods */

	ensureSize: function(size: Size | number) {
		return Utilities.isNumber(size) ? { width: size, height: size } : size
	}
}

export default Utilities

import Size from './size'
