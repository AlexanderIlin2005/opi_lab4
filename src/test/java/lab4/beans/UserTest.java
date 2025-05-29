package lab4.beans;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    @Test
    public void testUserCreation() {
        User user = new User("testUser", "password123");

        assertEquals("testUser", user.getUsername());
        assertEquals("password123", user.getPassword());
        assertNull(user.getUsersHits());
    }

    @Test
    public void testSetUsersHits() {
        User user = new User("user", "pass");

        Hit hit1 = new Hit(1, -1.0f, 2);
        Hit hit2 = new Hit(-1, 1.0f, 2);

        List<Hit> hits = Arrays.asList(hit1, hit2);
        user.setUsersHits(hits);

        assertNotNull(user.getUsersHits());
        assertEquals(2, user.getUsersHits().size());
        assertTrue(user.getUsersHits().contains(hit1));
        assertTrue(user.getUsersHits().contains(hit2));
    }
}
