import { assertType, Equals } from '@test/utils'
import { FixedLengthArray } from '@src/fixed-length-array'

test('FixedLengthArray', () => {
  assertType<Equals<FixedLengthArray<string, 0>, []>>()
  assertType<Equals<FixedLengthArray<string, 1>, [string]>>()
  assertType<Equals<FixedLengthArray<string, 2>, [string, string]>>()
})
