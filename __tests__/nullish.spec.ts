import { expectType, expectNotType } from 'tsd'
import { Nullish } from '@src/nullish'

test('null is Nullish', () => {
  expectType<Nullish>(null)
})

test('undefined is Nullish', () => {
  expectType<Nullish>(undefined)
})

test('{} isnt Nullish', () => {
  expectNotType<Nullish>({})
})
