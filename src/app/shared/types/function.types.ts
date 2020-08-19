export type Runnable = () => void

export type Supplier<T> = () => T

export type Function<T, U> = (T) => U

export type AnyFunction = any

export type ArraySupplier<T> = () => T[]

export type BooleanSupplier = () => boolean

export type NumberSupplier = () => number

export type NumberArraySupplier = ArraySupplier<number>

export type StringSupplier = () => string

export type StringArraySupplier = ArraySupplier<string>

export type ObjectSupplier = () => object

export type NodeArraySupplier = ArraySupplier<Node>
