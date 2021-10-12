package org.testcommon

import org.operation.OperationFactory
import org.operation.randomID
import kotlin.test.Test
import kotlin.test.assertEquals

class OperationTest {
    @Test
    fun testToOperate() {
        if (randomID() == "js"){
            checkOperation(3, 6)
        }
        if (randomID() == "jvm"){
            checkOperation(3, 9)
        }
        if (randomID() == "native"){
            checkOperation(3, 0)
        }

    }



    private fun checkOperation(input: Int, expectedOutput: Int) {

        assertEquals(expectedOutput, OperationFactory.createOperation().operate(input))
    }
//
//    private fun String.asciiToByteArray() = ByteArray(length) {
//        get(it).toByte()
//    }
}
