import { assertType, Equals } from '@test/utils'
import { Awaitable } from '@src/awaitable'

test('Awaitable<T>', () => {
  type Result = Awaitable<number>

  assertType<Equals<Result, number | PromiseLike<number>>>()
})
