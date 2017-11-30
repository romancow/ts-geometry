import Utilities from './utilities'
import Size from './size'

type Scale = number | {
	x: number
	y: number
}

namespace Scale {
	export function forceXY(scale: Scale): {x: number, y: number} {
		return Utilities.isNumber(scale) ? {x: scale, y: scale} : scale
	}

	export function invert(scale: Scale): Scale {
		return Utilities.isNumber(scale) ?
			1/scale : {x: 1/scale.x, y: 1/scale.y}
	}

	export function calculate(from: Size, to: Size): Scale {
		return {
			x: to.width / (from.width || 1),
			y: to.height / (from.height || 1),
		}
	}

	export function equals(scale1: Scale, scale2: Scale) {
		const {x: x1, y: y1} = Scale.forceXY(scale1)
		const {x: x2, y: y2} = Scale.forceXY(scale2)
		return (x1 === x2) && (y1 === y2)
	}
}

export default Scale
