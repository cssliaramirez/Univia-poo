package univia.repositories;

import univia.database.Database;
import univia.entities.School;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public final class SchoolRepository {
    private final Database database;

    public SchoolRepository(Database database) {
        this.database = database;
    }

    public List<School> findAll() throws SQLException {
        String sql = "SELECT id, name FROM schools ORDER BY name";
        List<School> schools = new ArrayList<>();

        try (Connection connection = database.connection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                schools.add(mapSchool(resultSet));
            }
        }

        return schools;
    }

    public Optional<School> findById(long id) throws SQLException {
        String sql = "SELECT id, name FROM schools WHERE id = ?";

        try (Connection connection = database.connection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);

            try (ResultSet resultSet = statement.executeQuery()) {
                return resultSet.next()
                        ? Optional.of(mapSchool(resultSet))
                        : Optional.empty();
            }
        }
    }

    private School mapSchool(ResultSet resultSet) throws SQLException {
        return new School(
                resultSet.getLong("id"),
                resultSet.getString("name"));
    }
}

