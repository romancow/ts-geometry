import Utilities from './utilities'
import Size from './size'
import Scale from './scale'

type Point = {
	x: number
	y: number
}

namespace Point {
	export function diff(point1: Point, point2: Point): Size {
		return {
			width: point2.x - point1.x,
			height: point2.y - point1.y
		}
	}

	export function offset(point: Point, offset: Size | number): Point {
		const size = Utilities.ensureSize(offset)
		return {
			x: point.x + size.width,
			y: point.y + size.height
		}
	}

	export function equals(point1: Point, point2: Point): boolean {
		return Utilities.propsEqual(point1, point2, ['x', 'y'])
	}

	export function scale({ x, y }: Point, scale: Scale) {
		const { x: scaleX, y: scaleY } = Scale.forceXY(scale)
		return {
			x: x * scaleX,
			y: y * scaleY
		}
	}

	export const Zero: Point = Object.freeze({ x: 0, y: 0 })
}

export default Point
