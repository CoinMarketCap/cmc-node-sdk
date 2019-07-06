import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
// import json from 'rollup-plugin-json';
import json from 'rollup-plugin-json'
import rollupNodeResolve from 'rollup-plugin-node-resolve'

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'coinmarketcap',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve({
			  browser: true
			}),
			commonjs(), // so Rollup can convert `ms` to an ES module
			json(),
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/main.js',
		external: ['axios'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			resolve({
				browser: false
			}),
			commonjs(),
			json(),
		]
	}
];
