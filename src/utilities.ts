function isClass(obj: Object, className: string) {
	const type = typeof obj
	const strFn = Object.prototype.toString
	return (type === className) ||
		   (type === 'object') &&
		   (strFn.call(obj) === `[object ${className}]`)
}

export default {

	/* Object utility methods */

	isNumber: function (obj: Object): obj is number {
		return isClass(obj, 'number')
	},

	cordon: function <T>(obj: T) {
		return Object.freeze(Object.assign({}, obj))
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
	}
}
