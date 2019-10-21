import pkg from './package.json'

export default {
	input: pkg.module,
	context: 'window',
	output: {
		file: pkg.main,
		name: 'TsGeometry',
		format: 'umd',
		sourcemap: true,
		sourcemapExcludeSources: true
	}
}
