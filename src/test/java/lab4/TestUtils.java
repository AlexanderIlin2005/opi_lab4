package lab4.database;

import javax.persistence.EntityManager;
import java.lang.reflect.Field;

public class TestUtils {
    public static void injectEntityManager(Object target, EntityManager em) {
        try {
            Field field = target.getClass().getDeclaredField("entityManager");
            field.setAccessible(true);
            field.set(target, em);
        } catch (Exception e) {
            throw new RuntimeException("Failed to inject EntityManager", e);
        }
    }
}
