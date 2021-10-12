package org.operation

actual object OperationFactory {
    actual fun createOperation(): OperateEncoder = JVMOpEncoder
}

object JVMOpEncoder : OperateEncoder {
    override fun operate(src: Int): Int {
        println("Hello I am JVM")
        return src * src
    }
}

//import java.util.*
actual fun randomID() = "jvm" //UUID.randomUUID().toString