import { assertType, Equals } from '@test/utils'
import { Arrayable } from '@src/arrayable'

test('Arrayable<T>', () => {
  type Result = Arrayable<number>

  assertType<Equals<Result, number | number[]>>()
})
