package lab4;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ExampleTest {

    @Test
    void simpleTest() {
        assertEquals(2 + 2, 4, "Математика работает :)");
    }

    @Test
    void simpleTest2() {
        assertEquals(20 + 20, 40, "Математика работает 2 :)");
    }
}
