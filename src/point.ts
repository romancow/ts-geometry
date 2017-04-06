import Size from './size'

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
}

export default Point
