import { assertType, Equals } from '@test/utils'
import { expectType, expectNotType } from 'tsd'
import {
  TypedArray
, TypedArrayConstructor
, ConstructorOfTypedArray
, TypedArrayOfConstructor
} from '@src/typed-array'

test('TypedArray', () => {
  expectType<TypedArray>(new Int8Array())
  expectNotType<TypedArray>(Int8Array)
})

test('TypedArrayConstructor', () => {
  expectType<TypedArrayConstructor>(Int8Array)
  expectNotType<TypedArrayConstructor>(new Int8Array())
})

test('ConstructorOfTypedArray', () => {
  type Result = ConstructorOfTypedArray<Int8Array>

  assertType<Equals<Result, Int8ArrayConstructor>>()
})

test('TypedArrayOfConstructor', () => {
  type Result = TypedArrayOfConstructor<Int8ArrayConstructor>

  assertType<Equals<Result, Int8Array>>()
})
