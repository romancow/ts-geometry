import ObjectExt from './object-helpers'
import Scale from './scale'

interface Size {
	readonly width: number
	readonly height: number
}

namespace Size {
	export function scale(size: Size | number, scale: Scale): Size {
		const { width, height } = ObjectExt.isNumber(size) ?
			{ width: size, height: size } : size
		const { x: scaleX, y: scaleY } = Scale.forceXY(scale)
		return {
			width: width * scaleX,
			height: height * scaleY
		}
	}

	export function abs(size: Size): Size {
		return {
			width: Math.abs(size.width),
			height: Math.abs(size.height)
		}
	}
}

export default Size
