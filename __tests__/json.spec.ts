import { expectType, expectNotType } from 'tsd'
import { assertType, Extends } from './utils'
import { JSONValue, JSONObject, JSONSerializable } from '@src/json'

describe('JSONValue', () => {
  test('string is JSONValue', () => {
    expectType<JSONValue>('text')
  })

  test('number is JSONValue', () => {
    expectType<JSONValue>(1)
  })

  test('boolean is JSONValue', () => {
    expectType<JSONValue>(true)
  })

  test('null is JSONValue', () => {
    expectType<JSONValue>(null)
  })

  test('object is JSONValue', () => {
    expectType<JSONValue>({ key: 'value' })
  })

  test('interface is JSONValue', () => {
    interface Interface extends JSONObject {
      key: string
    }

    assertType<Extends<Interface, JSONValue>>()
  })

  test('type is JSONValue', () => {
    type Type = {
      key: string
    }

    assertType<Extends<Type, JSONValue>>()
  })

  test('undefined isnt JSONValue', () => {
    expectNotType<JSONValue>(undefined)
  })

  test('Map isnt JSONValue', () => {
    expectNotType<JSONValue>(new Map())
  })

  test('Set isnt JSONValue', () => {
    expectNotType<JSONValue>(new Set())
  })
})

describe('JSONObject', () => {
  test('interface is JSONObject', () => {
    interface Interface extends JSONObject {
      key: string
    }

    assertType<Extends<Interface, JSONObject>>()
  })

  test('type is JSONValue', () => {
    type Type = {
      key: string
    }

    assertType<Extends<Type, JSONObject>>()
  })
})

describe('JSONSerializable', () => {
  test('object with toJSON method', () => {
    const obj = {
      toJSON() {
        return 123
      }
    }

    expectType<JSONSerializable<number>>(obj)
  })

  test('object without toJSON method', () => {
    const obj = {}

    expectNotType<JSONSerializable<number>>(obj)
  })
})
