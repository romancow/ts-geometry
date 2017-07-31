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

	cordon: function(obj: Object) {
		const clone: any = new Object()
		if (obj != null) {
			for (var key in obj) {
				// Avoid bugs when hasOwnProperty is shadowed
          		if (Object.prototype.hasOwnProperty.call(obj, key))
					  clone[key] = (obj as any)[key]
			}
		}
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
