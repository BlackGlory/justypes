import { assertType, Equals } from '@test/utils'
import { Matrix } from '@src/matrix'

test('Matrix', () => {
  assertType<Equals<Matrix<string, 0, 0>, []>>()
  assertType<Equals<
    Matrix<string, 1, 1>
  , [
      [string]
    ]
  >>()
  assertType<Equals<
    Matrix<string, 2, 3>
  , [
      [string, string, string]
    , [string, string, string]
    ]
  >>()
})
