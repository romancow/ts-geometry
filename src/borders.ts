import Scale from './scale'
import Size from './size'
import Utilities from './utilities';

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

	export function fromInset(outer: Size, inner: Size) {
		const topBottom = (outer.height - inner.height) / 2
		const leftRight = (outer.width - inner.width) / 2
		return Borders.create(topBottom, leftRight)
	}

	export function scale(borders: Borders, scale: Scale): Borders {
		const {x: scaleX, y: scaleY} = Scale.forceXY(scale)
		return {
			top: borders.top * scaleY,
			right: borders.right * scaleX,
			bottom: borders.bottom * scaleY,
			left: borders.left * scaleX
		}
	}

	export function equals(borders1: Borders, borders2: Borders) {
		return Utilities.propsEqual(borders1, borders2, ['top', 'left', 'bottom', 'right'])
	}
}

export default Borders
