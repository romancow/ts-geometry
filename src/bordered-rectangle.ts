import Rectangle, { Rectangular } from './rectangle'
import Borders from './borders'
import Size from './size'
import Scale from './scale'
import Utilities from './utilities'

export default class BorderedRectangle extends Rectangle {
	private static defaultBorders: Borders = {top: 0, right: 0, bottom: 0, left: 0}
	
	readonly borders: Readonly<Borders>
	private _interior: Rectangle

	constructor(rect: Rectangular | SVGRect, borders: Borders = BorderedRectangle.defaultBorders) {
		super(rect)
		this.borders = Utilities.cordon(borders)
	}

	get interior() {
		if (this._interior == null)
			this._interior = new Rectangle(BorderedRectangle.applyBorders(this, this.borders, -1))
		return this._interior
	}

	offset(offset: Size | number) {
		const offsetRect = super.offset(offset)
		return new BorderedRectangle(offsetRect, this.borders)
	}

	inflate(size: Size | number) {
		const inflatedRect = super.inflate(size)
		return new BorderedRectangle(inflatedRect, this.borders)
	}

	scale(scale: Scale) {
		const scaledRect = super.scale(scale)
		const scaledBorders = Borders.scale(this.borders, scale)
		return new BorderedRectangle(scaledRect, scaledBorders)
	}

	round(precision: number = 0) {
		const roundedRect = super.round(precision)
		const select = ['top', 'right', 'bottom', 'left']
		const rounder = (val: number) => Utilities.round(val, precision)
		const roundedBorders = <Borders> Utilities.selectMap(this.borders, select, rounder)
		return new BorderedRectangle(roundedRect, roundedBorders)
	}

	static addBorders(rect: Rectangular, borders: Borders) {
		return new BorderedRectangle(BorderedRectangle.applyBorders(rect, borders), borders)
	}

	private static applyBorders(rect: Rectangular, borders: Borders, multiplier: number = 1): Rectangular {
		return {
			left: rect.left - borders.left * multiplier,
			top: rect.top - borders.top * multiplier,
			width: rect.width + (borders.left + borders.right) * multiplier,
			height: rect.height + (borders.top + borders.bottom) * multiplier
		}
	}
}
