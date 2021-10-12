package org.operation

actual object OperationFactory {
    actual fun createOperation(): OperateEncoder = NativeOpEncoder
}

object NativeOpEncoder : OperateEncoder {
    override fun operate(src: Int): Int {
        println("Hello I am native")
        return src - src
    }
}

//import java.util.*
actual fun randomID() = "native" //UUID.randomUUID().toString