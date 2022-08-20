import { assertType, Equals } from '@test/utils'
import { expectType, expectNotType } from 'tsd'
import {
  TypedArray
, TypedArrayConstructor
, ConstructorOfTypedArray
, TypedArrayOfConstructor
, SignedTypedArray
, SignedTypedArrayConsturctor
, UnsignedTypedArray
, UnsignedTypedArrayConstructor
} from '@src/typed-array'

test('TypedArray', () => {
  expectType<TypedArray>(new Int8Array())
  expectType<TypedArray>(new Uint8Array())
  expectNotType<TypedArray>(Int8Array)
})

test('SignedTypedArray', () => {
  expectType<SignedTypedArray>(new Int8Array())
  expectNotType<SignedTypedArray>(new Uint8Array())
  expectNotType<SignedTypedArray>(Int8Array)
})

test('UnsignedTypedArray', () => {
  expectType<UnsignedTypedArray>(new Uint8Array())
  expectNotType<SignedTypedArray>(new Int8Array())
  expectNotType<SignedTypedArray>(Int8Array)
})

test('SignedTypedArrayConsturctor', () => {
  expectType<SignedTypedArrayConsturctor>(Int8Array)
  expectNotType<SignedTypedArrayConsturctor>(Uint8Array)
  expectNotType<SignedTypedArray>(new Int8Array())
})

test('UnsignedTypedArrayConstructor', () => {
  expectType<UnsignedTypedArrayConstructor>(Uint8Array)
  expectNotType<UnsignedTypedArray>(Int8Array)
  expectNotType<UnsignedTypedArray>(new Int8Array())
})

test('TypedArrayConstructor', () => {
  expectType<TypedArrayConstructor>(Int8Array)
  expectType<TypedArrayConstructor>(Uint8Array)
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
