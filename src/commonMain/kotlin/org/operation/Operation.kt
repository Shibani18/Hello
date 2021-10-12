package org.operation

interface OperateEncoder {
    fun operate(src: Int): Int

}

expect object OperationFactory {
    fun createOperation(): OperateEncoder
}

expect fun randomID(): String

