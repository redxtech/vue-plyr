import { Status, Upload } from '../lib/upload'

describe('Constructor checks', () => {
	test('Classic upload', () => {
		// Setting max chunk size to 10MB
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 10 * 1024 * 1024 }}}})
		const upload = new Upload('/image.jpg', true, 10 * 1024 * 1024)

		expect(upload.path).toBe('/image.jpg')
		expect(upload.isChunked).toBe(false)
		expect(upload.chunks).toBe(1)
		expect(upload.size).toBe(10 * 1024 * 1024)
		expect(upload.uploaded).toBe(0)
		expect(upload.status).toBe(Status.INITIALIZED)
	})

	test('Disabled chunking', () => {
		// Setting max chunk size to 10MB
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 0 }}}})
		const upload = new Upload('/image.jpg', true, 10 * 1024 * 1024)

		expect(upload.path).toBe('/image.jpg')
		expect(upload.isChunked).toBe(false)
		expect(upload.chunks).toBe(1)
		expect(upload.size).toBe(10 * 1024 * 1024)
		expect(upload.uploaded).toBe(0)
		expect(upload.status).toBe(Status.INITIALIZED)
	})
})

describe('Upload chunks config', () => {
	test('150MB file with 15MB chunk', () => {
		// Setting max chunk size to 15MB
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 15 * 1024 * 1024 }}}})

		// File is 150MB
		const upload = new Upload('/image.jpg', true, 150 * 1024 * 1024)
		expect(upload.chunks).toBe(10)
		expect(upload.isChunked).toBe(true)
	})

	test('151MB file with 15MB chunk', () => {
		// Setting max chunk size to 15MB
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 15 * 1024 * 1024 }}}})

		// File is 150MB
		const upload = new Upload('/image.jpg', true, 151 * 1024 * 1024)
		expect(upload.chunks).toBe(11)
		expect(upload.isChunked).toBe(true)
	})

	test('1GB file with 15MB chunk and manually disabled chunk', () => {
		// Setting max chunk size to 15MB
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 15 * 1024 * 1024 }}}})

		// File is 150MB
		const upload = new Upload('/image.jpg', false, 1024 * 1024 * 1024)
		expect(upload.chunks).toBe(1)
		expect(upload.isChunked).toBe(false)
	})

	test('1GB file with globally disabled chunking', () => {
		// Setting max chunk size to 15MB
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 0 }}}})

		// File is 150MB
		const upload = new Upload('/image.jpg', true, 1024 * 1024 * 1024)
		expect(upload.chunks).toBe(1)
		expect(upload.isChunked).toBe(false)
	})
})

describe('Uploading states', () => {
	test('Chunking upload', () => {
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 10 * 1024 * 1024 }}}})

		const upload = new Upload('/image.jpg', true, 150 * 1024 * 1024)
		expect(upload.uploaded).toBe(0)
		expect(upload.chunks).toBe(15)
		expect(upload.isChunked).toBe(true)
		expect(upload.status).toBe(Status.INITIALIZED)

		upload.uploaded = 1
		expect(upload.uploaded).toBe(1)
		expect(upload.status).toBe(Status.UPLOADING)
		expect(upload.startTime).toBeGreaterThan(0)

		// overflowing value
		upload.uploaded = 151 * 1024 * 1024
		expect(upload.uploaded).toBe(150 * 1024 * 1024)
		expect(upload.status).toBe(Status.ASSEMBLING)

		upload.status = Status.FINISHED
		expect(upload.status).toBe(Status.FINISHED)
	})

	test('Disabled chunking upload', () => {
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 0 }}}})

		const upload = new Upload('/image.jpg', true, 150 * 1024 * 1024)
		expect(upload.uploaded).toBe(0)
		expect(upload.chunks).toBe(1)
		expect(upload.isChunked).toBe(false)
		expect(upload.status).toBe(Status.INITIALIZED)

		upload.uploaded = 1
		expect(upload.uploaded).toBe(1)
		expect(upload.status).toBe(Status.UPLOADING)
		expect(upload.startTime).toBeGreaterThan(0)

		// overflowing value
		upload.uploaded = 151 * 1024 * 1024
		expect(upload.uploaded).toBe(150 * 1024 * 1024)
		expect(upload.status).toBe(Status.FINISHED)
	})
})

describe('Cancellation', () => {
	test('Classic upload', () => {
		// 150MB chunks
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 150 * 1024 * 1024 }}}})

		const controller = new AbortController()
		const upload = new Upload('/image.jpg', true, 10 * 1024 * 1024)

		// Mock controller and spy on abort
		upload['_controller'] = controller
		jest.spyOn(controller, 'abort')

		expect(upload.signal).toBeInstanceOf(AbortSignal)
		expect(upload.chunks).toBe(1)
		expect(upload.isChunked).toBe(false)
		expect(upload.status).toBe(Status.INITIALIZED)
		expect(controller.abort).not.toHaveBeenCalled()

		upload.cancel()
		expect(upload.status).toBe(Status.CANCELLED)
		expect(controller.abort).toHaveBeenCalled()

	})

	test('Chunking upload', () => {
		Object.assign(global, {OC: {appConfig: {files: { max_chunk_size: 10 * 1024 * 1024 }}}})

		const controller = new AbortController()
		const upload = new Upload('/image.jpg', true, 150 * 1024 * 1024)

		// Mock controller and spy on abort
		upload['_controller'] = controller
		jest.spyOn(controller, 'abort')

		expect(upload.signal).toBeInstanceOf(AbortSignal)
		expect(upload.chunks).toBe(15)
		expect(upload.isChunked).toBe(true)
		expect(upload.status).toBe(Status.INITIALIZED)
		expect(controller.abort).not.toHaveBeenCalled()

		upload.cancel()
		expect(upload.status).toBe(Status.CANCELLED)
		expect(controller.abort).toHaveBeenCalled()

	})
})
