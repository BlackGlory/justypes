import { pass } from '@blackglory/pass'

export function assertType<T extends true>() {
  pass()
}

export function assertNotType<T extends false>() {
  pass()
}

export type Not<T extends boolean> =
  T extends true
  ? false
  : true

// very magic, read https://github.com/microsoft/TypeScript/issues/27024
export type Equals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
  ? true
  : false

export type NotEqual<X, Y> = Not<Equals<X, Y>>

export type Extends<X, Y> = X extends Y ? true : false

export type NotExtends<X, Y> = Not<Extends<X, Y>>
