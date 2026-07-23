package univia.config;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class AppConfigTest {
    @Test
    void databaseConfigBuildsJdbcUrl() {
        DatabaseConfig config = new DatabaseConfig(
                "localhost", 5432, "catalogo", "user", "secret", 5, "require", "require");
        assertEquals(
                "jdbc:postgresql://localhost:5432/catalogo?sslmode=require&channelBinding=require",
                config.jdbcUrl());
    }
}

