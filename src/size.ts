import Scale from './scale'

interface Size {
	readonly width: number
	readonly height: number
}

namespace Size {
	export function scale(size: Size, scale: Scale): Size {
		const {x: scaleX, y: scaleY} = Scale.forceXY(scale)
		return {
			width: size.width * scaleX,
			height: size.height * scaleY
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
