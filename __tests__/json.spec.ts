import { expectType, expectNotType } from 'tsd'
import { Json, Jsonable } from '@src/json'

describe('Json', () => {
  test('string is Json', () => {
    expectType<Json>('text')
  })

  test('number is Json', () => {
    expectType<Json>(1)
  })

  test('boolean is Json', () => {
    expectType<Json>(true)
  })

  test('null is Json', () => {
    expectType<Json>(null)
  })

  test('object is Json', () => {
    expectType<Json>({})
  })

  test('undefined isnt Json', () => {
    expectNotType<Json>(undefined)
  })

  test('Map isnt Json', () => {
    expectNotType<Json>(new Map())
  })

  test('Set isnt Json', () => {
    expectNotType<Json>(new Set())
  })
})

describe('Jsonable', () => {
  test('object with toJSON method', () => {
    const obj = {
      toJSON() {
        return 123
      }
    }

    expectType<Jsonable<number>>(obj)
  })

  test('object without toJSON method', () => {
    const obj = {}

    expectNotType<Jsonable<number>>(obj)
  })
})
