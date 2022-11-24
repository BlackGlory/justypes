// The return type of `JSON.parse`
export type Json =
| string
| number
| boolean
| null
| { [property: string]: Json }
| Json[]

/**
 * 可以生成JSON的非JSON对象
 */
export interface Jsonable<T> {
  toJSON(key: string): T
}
