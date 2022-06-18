import { getMaxChunksSize } from '../../lib/utils/config'

describe('Max chunk size tests', () => {
	test('Returning valid config', () => {
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 15 * 1024 * 1024 }}}})
		expect(getMaxChunksSize()).toBe(15 * 1024 * 1024)
	})

	test('Returning disabled chunking config', () => {
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 0 }}}})
		expect(getMaxChunksSize()).toBe(0)

		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: -1 }}}})
		expect(getMaxChunksSize()).toBe(0)

		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: null }}}})
		expect(getMaxChunksSize()).toBe(0)
	})

	test('Returning invalid config', () => {
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 'test' }}}})
		expect(getMaxChunksSize()).toBe(10 * 1024 * 1024)

		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: undefined }}}})
		expect(getMaxChunksSize()).toBe(10 * 1024 * 1024)
	})
})
