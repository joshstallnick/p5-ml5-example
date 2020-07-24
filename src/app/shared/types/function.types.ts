export type Runnable = () => void

export type Supplier<T> = () => T

export type Function<T, U> = (T) => U

export type AnyFunction = Function<any, any>

export type NumberSupplier = () => number

export type StringSupplier = () => string

export type ObjectSupplier = () => object

export type NodeArraySupplier = () => Node[]
