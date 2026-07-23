package univia.database;

import univia.config.AppConfig;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public final class SchemaMigrator {
    private SchemaMigrator() {}

    public static void main(String[] args) {
        AppConfig config = AppConfig.load();

        try (Database database = new Database(config.database());
             Connection connection = database.connection();
             Statement statement = connection.createStatement()) {
            statement.execute(loadSchema());
            printCount(statement, "schools", "Escuelas migradas");
            printCount(statement, "careers", "Carreras migradas");
            System.out.println("Migración completada correctamente");
        } catch (IOException | SQLException exception) {
            throw new IllegalStateException("No fue posible ejecutar la migración", exception);
        }
    }

    private static String loadSchema() throws IOException {
        try (InputStream input = SchemaMigrator.class.getResourceAsStream("/db/schema.sql")) {
            if (input == null) {
                throw new IOException("No se encontró db/schema.sql");
            }
            return new String(input.readAllBytes(), StandardCharsets.UTF_8);
        }
    }

    private static void printCount(Statement statement, String table, String label) throws SQLException {
        try (ResultSet resultSet = statement.executeQuery("SELECT COUNT(*) FROM " + table)) {
            resultSet.next();
            System.out.println(label + ": " + resultSet.getLong(1));
        }
    }
}
