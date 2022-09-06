import 'whatwg-fetch'
import '@testing-library/jest-dom/extend-expect'
import {server} from './test/server.ts'

process.env.MARVEL_API_URL = 'http://localhost/marvel/api'
process.env.MARVEL_API_PRIVATE_KEY = 'PRIVATE_KEY'
process.env.MARVEL_API_PUBLIC_KEY = 'PUBLIC_KEY'

beforeAll(() => server.listen())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())