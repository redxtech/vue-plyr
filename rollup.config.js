import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import minimist from 'minimist'

import pkg from './package.json'

const argv = minimist(process.argv.slice(2))

const baseConfig = {
	input: 'src/index.js',
	plugins: {
		preVue: [
			replace({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			commonjs(),
			css({
				output: pkg.style
			})
		],
		vue: {
			css: true,
			template: {
				isProduction: true
			}
		},
		postVue: [babel({ babelHelpers: 'runtime' })]
	}
}

// Customize configs for individual targets
const buildFormats = []
if (!argv.format || argv.format === 'es') {
	const esConfig = {
		...baseConfig,
		output: {
			file: pkg.module,
			format: 'esm',
			exports: 'named',
			sourcemap: true
		},
		plugins: [
			...baseConfig.plugins.preVue,
			vue({
				...baseConfig.plugins.vue,
				css: false
			}),
			...baseConfig.plugins.postVue,
			terser({
				output: {
					ecma: 6
				}
			}),
			resolve()
		]
	}
	buildFormats.push(esConfig)
}

if (!argv.format || argv.format === 'cjs') {
	const umdConfig = {
		...baseConfig,
		output: {
			compact: true,
			file: pkg.main,
			format: 'cjs',
			name: 'VuePlyr',
			exports: 'named',
			sourcemap: true
		},
		plugins: [
			...baseConfig.plugins.preVue,
			vue({
				...baseConfig.plugins.vue,
				template: {
					...baseConfig.plugins.vue.template,
					optimizeSSR: true
				},
				css: false
			}),
			...baseConfig.plugins.postVue,
			resolve()
		]
	}
	buildFormats.push(umdConfig)
}

if (!argv.format || argv.format === 'iife') {
	const unpkgConfig = {
		...baseConfig,
		output: {
			compact: true,
			file: pkg.unpkg,
			format: 'iife',
			name: 'VuePlyr',
			sourcemap: true
		},
		plugins: [
			...baseConfig.plugins.preVue,
			vue(baseConfig.plugins.vue),
			...baseConfig.plugins.postVue,
			terser({
				output: {
					ecma: 5
				}
			}),
			resolve()
		]
	}
	buildFormats.push(unpkgConfig)
}

// Export config
export default buildFormats
