export type Cons<T> = [T, Cons<T>] | [T, null]
