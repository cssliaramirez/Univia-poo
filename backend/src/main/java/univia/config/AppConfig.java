package univia.config;

import io.github.cdimascio.dotenv.Dotenv;

public record AppConfig(int port, String appVersion, DatabaseConfig database) {
    public static AppConfig load() {
        Dotenv dotenv = Dotenv.configure()
                .directory("./")
                .ignoreIfMissing()
                .load();

        return new AppConfig(
                integer(dotenv, "APP_PORT", integer(dotenv, "PORT", 7000)),
                value(dotenv, "APP_VERSION", "dev"),
                new DatabaseConfig(
                        value(dotenv, "DB_HOST", "localhost"),
                        integer(dotenv, "DB_PORT", 5432),
                        value(dotenv, "DB_NAME", "univia"),
                        value(dotenv, "DB_USER", "postgres"),
                        value(dotenv, "DB_PASSWORD", "postgres"),
                        integer(dotenv, "DB_POOL_SIZE", 5),
                        value(dotenv, "DB_SSL_MODE", "disable"),
                        value(dotenv, "DB_CHANNEL_BINDING", "")));
    }

    private static String value(Dotenv dotenv, String key, String fallback) {
        String environmentValue = System.getenv(key);
        return environmentValue != null ? environmentValue : dotenv.get(key, fallback);
    }

    private static int integer(Dotenv dotenv, String key, int fallback) {
        try {
            return Integer.parseInt(value(dotenv, key, Integer.toString(fallback)));
        } catch (NumberFormatException exception) {
            throw new IllegalArgumentException(key + " debe ser un número entero", exception);
        }
    }
}

