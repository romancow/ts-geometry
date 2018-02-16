import Utilities from './utilities'
import Scale from './scale'

interface Size {
	readonly width: number
	readonly height: number
}

namespace Size {
	export function scale(size: Size | number, scale: Scale): Size {
		const { width, height } = Utilities.isNumber(size) ?
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

	export function equals(size1: Size, size2: Size): boolean {
		return Utilities.propsEqual(size1, size2, ['width', 'height'])
	}

	export function diff(size1: Size, size2: Size): Size {
		return {
			width: size2.width - size1.width,
			height: size2.height - size1.height
		}
	}

	export function max(size1: Size, size2: Size): Size {
		const props: (keyof Size)[] = ['width', 'height']
		if (props.every(p => size1[p] >= size2[p]))
			return size1
		else if (props.every(p => size1[p] <= size2[p]))
			return size2
		else return Utilities.mapToObject(props, p => Math.max(size1[p], size2[p]))
	}
}

export default Size
