import { assertType, Equals } from '@test/utils'
import { Dictionary } from '@src/dictionary'

test('Dictionary<T> is Record<string, T>', () => {
  type Result = Dictionary<string>

  assertType<Equals<Result, Record<string, string>>>()
})
