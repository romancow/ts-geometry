type Borders = {
	top: number
	right: number
	bottom: number
	left: number
}

namespace Borders {
	export function create(topBottom: number, leftRight: number = topBottom): Borders {
		return {
			top: topBottom,
			right: leftRight,
			bottom: topBottom,
			left: leftRight
		}
	}
}

export default Borders
