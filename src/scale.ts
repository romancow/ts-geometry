import Utilities from './utilities'

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
}

export default Scale
