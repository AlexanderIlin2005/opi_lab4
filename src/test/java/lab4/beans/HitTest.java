package lab4.beans;

import org.junit.jupiter.api.Test;
import javax.json.JsonObject;

import static org.junit.jupiter.api.Assertions.*;

public class HitTest {

    @Test
    public void testHitSuccess() {
        Hit hit = new Hit(1, -0.5f, 2);
        assertTrue(hit.isSuccessful(), "Hit должен быть успешным");
    }


    @Test
    public void testHitFail() {
        Hit hit = new Hit(1, 1.0f, 2);
        assertFalse(hit.isSuccessful(), "Hit не должен быть успешным");
    }

    @Test
    public void testToJSONObject() {
        Hit hit = new Hit(1, -1.0f, 2);
        JsonObject json = hit.toJSONObject();

        assertEquals(1, json.getInt("x"));
        assertEquals(-1.0f, (float) json.getJsonNumber("y").doubleValue(), 0.0001);
        assertEquals(2, json.getInt("r"));
        assertEquals(hit.isSuccessful(), json.getBoolean("result"));
    }
}
