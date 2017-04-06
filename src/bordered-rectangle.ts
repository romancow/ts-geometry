import Rectangle, { Rectangular } from './rectangle'
import Borders from './borders'
import ObjectExt from './object-helpers'

export default class BorderedRectangle extends Rectangle {
	private static defaultBorders: Borders = {top: 0, right: 0, bottom: 0, left: 0}
	
	readonly borders: Borders
	private _interior: Rectangle

	constructor(rect: Rectangular, borders: Borders = BorderedRectangle.defaultBorders) {
		super(rect)
		this.borders = ObjectExt.cordon(borders)
	}

	get interior() {
		if (this._interior == null)
			this._interior = new Rectangle(BorderedRectangle.applyBorders(this, this.borders, -1))
		return this._interior
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
