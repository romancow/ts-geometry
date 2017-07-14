import Utilities from './utilities'
import Size from './size'
import Point from './point'
import Scale from './scale'
import Borders from './borders'

export interface Rectangular extends Size {
	readonly left: number
	readonly top: number
	readonly bottom?: number
	readonly right?: number
}

namespace Rectangular {
	export function isRectangular(obj: any): obj is Rectangular {
		return ['left', 'top', 'width', 'height'].every((prop) => prop in obj)
	}

	export function fromSVGRect(svgRect: SVGRect): Rectangular {
		return {
			top: svgRect.y,
			left: svgRect.x,
			width: svgRect.width,
			height: svgRect.height
		}
	}

	export function ensure(rect: Rectangular | SVGRect) {
		return Rectangular.isRectangular(rect) ? rect : Rectangular.fromSVGRect(rect)
	}
}

export default class Rectangle implements Rectangular {
	readonly bottom: number
	readonly height: number
	readonly left: number
	readonly right: number
	readonly top: number
	readonly width: number

	constructor(props: Rectangular | SVGRect) {
		const rect = Rectangular.ensure(props)
		this.top = rect.top
		this.left = rect.left
		this.width = rect.width
		this.height = rect.height
		this.right = Rectangle.calcRight(rect)
		this.bottom = Rectangle.calcBottom(rect)
	}

	get origin(): Point {
		return {x: this.left, y: this.top}
	}

	get center(): Point {
		return {
			x: this.left + (this.width / 2),
			y: this.top + (this.height / 2)
		}
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
		const {width, height} = Utilities.isNumber(offset) ?
			{width: offset, height: offset} : offset
		return new Rectangle({
			top: rect.top + height, 
			left: rect.left + width, 
			width: rect.width,
			height: rect.height
		})
	}

	static inflate(rect: Rectangular, size: Size | number) {
		const {width, height} = Utilities.isNumber(size) ?
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
		const rounder = (val: number) => Utilities.round(val, precision)
		const rounded = Utilities.selectMap(<any>rect, select, rounder)
		return new Rectangle(<Rectangular> <any> rounded)
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
		return Utilities.isNumber(size) ? {width: size, height: size} : size
	}
}

import BorderedRectangle from './bordered-rectangle'
