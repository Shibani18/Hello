package org.operation

actual object OperationFactory {
    actual fun createOperation(): OperateEncoder = JsOpEncoder
}

object JsOpEncoder : OperateEncoder {
    override fun operate(src: Int): Int {
        println("Hello I am JS")
        return (src + src)
    }
}


//import java.util.*
actual fun randomID() = "js" //UUID.randomUUID().toString()
