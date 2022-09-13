import { assertType, Equals, NotEqual } from '@test/utils'
import { Constructor, ReturnTypeOfConstructor } from '@src/constructor'

describe('Constructor', () => {
  test('new () => T is Consturctor', () => {
    class Class {}

    assertType<Equals<Constructor<Class>, new (...args: any) => Class>>()
    assertType<Equals<Constructor, new (...args: any) => unknown>>()
  })

  test('() => T isnt Constructor', () => {
    function fn(): string {
      return 'test'
    }

    assertType<NotEqual<Constructor<ReturnType<typeof fn>>, () => string>>()
    assertType<NotEqual<Constructor, () => string>>()
  })
})

describe('ReturnTypeOfConstructor', () => {
  it('returns the return type of constructor', () => {
    class Class {}

    type Result = ReturnTypeOfConstructor<typeof Class>

    assertType<Equals<Result, Class>>()
  })
})
