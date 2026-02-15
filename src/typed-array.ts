export type TypedArrayConstructor =
| SignedTypedArrayConsturctor
| UnsignedTypedArrayConstructor

export type SignedTypedArrayConsturctor =
| Int8ArrayConstructor
| Int16ArrayConstructor
| Int32ArrayConstructor
| Float32ArrayConstructor
| Float64ArrayConstructor

export type UnsignedTypedArrayConstructor =
| Uint8ArrayConstructor
| Uint8ClampedArrayConstructor
| Uint16ArrayConstructor
| Uint32ArrayConstructor

export type TypedArray<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> =
| SignedTypedArray<TArrayBuffer>
| UnsignedTypedArray<TArrayBuffer>

export type SignedTypedArray<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> =
| Int8Array<TArrayBuffer>
| Int16Array<TArrayBuffer>
| Int32Array<TArrayBuffer>
| Float32Array<TArrayBuffer>
| Float64Array<TArrayBuffer>

export type UnsignedTypedArray<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> =
| Uint8Array<TArrayBuffer>
| Uint8ClampedArray<TArrayBuffer>
| Uint16Array<TArrayBuffer>
| Uint32Array<TArrayBuffer>

export type TypedArrayOfConstructor<T extends TypedArrayConstructor, TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> =
  T extends Int8ArrayConstructor ? Int8Array<TArrayBuffer>
: T extends Uint8ArrayConstructor ? Uint8Array<TArrayBuffer>
: T extends Uint8ClampedArrayConstructor ? Uint8ClampedArray<TArrayBuffer>
: T extends Int16ArrayConstructor ? Int16Array<TArrayBuffer>
: T extends Uint16ArrayConstructor ? Uint16Array<TArrayBuffer>
: T extends Int32ArrayConstructor ? Int32Array<TArrayBuffer>
: T extends Uint32ArrayConstructor ? Uint32Array<TArrayBuffer>
: T extends Float32ArrayConstructor ? Float32Array<TArrayBuffer>
: T extends Float64ArrayConstructor ? Float64Array<TArrayBuffer>
: never

export type ConstructorOfTypedArray<T extends TypedArray> =
  T extends Int8Array ? Int8ArrayConstructor
: T extends Uint8Array ? Uint8ArrayConstructor
: T extends Uint8ClampedArray ? Uint8ClampedArrayConstructor
: T extends Int16Array ? Int16ArrayConstructor
: T extends Uint16Array ? Uint16ArrayConstructor
: T extends Int32Array ? Int32ArrayConstructor
: T extends Uint32Array ? Uint32ArrayConstructor
: T extends Float32Array ? Float32ArrayConstructor
: T extends Float64Array ? Float64ArrayConstructor
: never
