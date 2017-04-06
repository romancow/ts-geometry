import ObjectExt from './object-helpers'
import Size from './size'
import Point from './point'
import Scale from './scale'
import Borders from './borders'
import BorderedRectangle from './bordered-rectangle'

export interface Rectangular extends Size {
	readonly left: number
	readonly top: number
	readonly bottom?: number
	readonly right?: number
}

export default class Rectangle implements Rectangular {
	readonly bottom: number
	readonly height: number
	readonly left: number
	readonly right: number
	readonly top: number
	readonly width: number

	constructor(props: Rectangular) {
		this.top = props.top
		this.left = props.left
		this.width = props.width
		this.height = props.height
		this.right = Rectangle.calcRight(props)
		this.bottom = Rectangle.calcBottom(props)
	}

	get origin(): Point {
		return {x: this.left, y: this.top}
	}

	intersect(rect: Rectangular) {
		return Rectangle.intersect(this, rect)
	}

	offset(offset: Size | number) {
		return Rectangle.offset(this, offset)
	}

	inflate(size: Size | number) {
		return Rectangle.inflate(this, size)
	}

	scale(scale: Scale) {
		return Rectangle.scale(this, scale)
	}

	round(precision: number = 0) {
		return Rectangle.round(this, precision)
	}

	addBorders(borders: Borders) {
		return BorderedRectangle.addBorders(this, borders)
	}

	static intersect(rect1: Rectangular, rect2: Rectangular) {
		const top = Math.max(rect1.top, rect2.top)
		const left = Math.max(rect1.left, rect2.left)
		const [right, bottom] = [this.calcRight, this.calcBottom].map((calc) => {
			return Math.min(calc(rect1), calc(rect2))
		})
		return new Rectangle({top: top, left: left, width: right - left, height: bottom - top})
	}

	static offset(rect: Rectangular, offset: Size | number) {
		const {width, height} = ObjectExt.isNumber(offset) ?
			{width: offset, height: offset} : offset
		return new Rectangle({
			top: rect.top + height, 
			left: rect.left + width, 
			width: rect.width,
			height: rect.height
		})
	}

	static inflate(rect: Rectangular, size: Size | number) {
		const {width, height} = ObjectExt.isNumber(size) ?
			{width: size, height: size} : size
		return new Rectangle({
			top: rect.top, 
			left: rect.left, 
			width: rect.width + width,
			height: rect.height + height
		})
	}

	static scale(rect: Rectangular, scale: Scale) {
		const size = Size.scale(rect, scale)
		const {x: scaleX, y: scaleY} = Scale.forceXY(scale)
		const origin = {
			x: rect.left * scaleX,
			y: rect.top * scaleY
		}
		return Rectangle.from(origin, size)
	}

	static round(rect: Rectangular, precision: number = 0) {
		const select = ['left', 'top', 'width', 'height']
		return new Rectangle(
			<Rectangular> <any> ObjectExt.selectMap(<any>rect, select, (val: number) => {
				let multiplier = Math.pow(10, Math.abs(precision || 0))
				if (precision < 0) multiplier = 1 / multiplier
				return Math.round(val * multiplier) / multiplier
			})
		)
	}
	
	static from(origin: Point, size: Size | number) {
		const {width, height} = this.ensureSize(size)
		return new Rectangle({
			left: origin.x + Math.min(width, 0),
			top: origin.y + Math.min(height, 0),
			width: Math.abs(width),
			height: Math.abs(height)
		})
	}

	static center(center: Point, size: Size | number) {
		const {width, height} = Size.abs(this.ensureSize(size))
		return new Rectangle({
			left: center.x - (width / 2),
			top: center.y - (height / 2),
			width: width,
			height: height
		})
	}

	private static calcRight(rect: Rectangular) {
		return (rect.right != null) ? rect.right :  rect.left + rect.width
	}

	private static calcBottom(rect: Rectangular) {
		return (rect.bottom != null) ? rect.bottom : rect.top + rect.height	
	}

	private static ensureSize(size: Size | number) {
		return ObjectExt.isNumber(size) ? {width: size, height: size} : size
	}
}
