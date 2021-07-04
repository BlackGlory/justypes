import { expectType, expectNotType } from 'tsd'
import { Cons } from '@src/cons'

test('[1, [2, null]] is Cons', () => {
  expectType<Cons<number>>([1, [2, null]])
})

test('[1, 2, null] isnt Cons', () => {
  expectNotType<Cons<number>>([1, 2, null])
})
