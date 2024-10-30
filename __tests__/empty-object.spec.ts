import { assertType, Equals } from '@test/utils'
import { EmptyObject } from '@src/empty-object'

test('EmptyObject is Record<string, never>', () => {
  type Result = EmptyObject

  assertType<Equals<Result, Record<string, never>>>()
})
