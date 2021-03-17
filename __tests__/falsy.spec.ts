import { expectType, expectNotType } from 'tsd'
import { Falsy } from '@src/falsy'

test('false is Falsy', () => {
  expectType<Falsy>(false)
})

test('0 is Falsy', () => {
  expectType<Falsy>(0)
})

test('-0 is Falsy', () => {
  expectType<Falsy>(-0)
})

test('1 isnt Falsy', () => {
  expectNotType<Falsy>(1)
})

test('0n is Falsy', () => {
  expectType<Falsy>(0n)
})

test('1n isnt Falsy', () => {
  expectNotType<Falsy>(1n)
})

test('empty string is Falsy', () => {
  expectType<Falsy>('')
})

test('non-empty string isnt Falsy', () => {
  expectNotType<Falsy>('test')
})

test('null is Falsy', () => {
  expectType<Falsy>(null)
})

test('undefined is Falsy', () => {
  expectType<Falsy>(undefined)
})

test('{} isnt Falsy', () => {
  expectNotType<Falsy>({})
})
