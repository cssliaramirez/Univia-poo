package univia.repositories;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import univia.database.Database;
import univia.entities.Career;
import univia.entities.CareerStatus;
import univia.entities.Modality;
import univia.entities.School;

public final class CareerRepository {
    private static final String SELECT_WITH_SCHOOL = """
            SELECT
                c.id,
                c.code,
                c.name,
                c.duration_terms,
                c.modality,
                c.status,
                c.image_url,
                s.id AS school_id,
                s.name AS school_name
            FROM careers c
            INNER JOIN schools s ON s.id = c.school_id
            """;

    private final Database database;

    public CareerRepository(Database database) {
        this.database = database;
    }

    public List<Career> findAll() throws SQLException {
        String sql = SELECT_WITH_SCHOOL + " ORDER BY c.name";

        try (Connection connection = database.connection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            return executeList(statement);
        }
    }

    public List<Career> findBySchoolId(long schoolId) throws SQLException {
        String sql = SELECT_WITH_SCHOOL + " WHERE c.school_id = ? ORDER BY c.name";

        try (Connection connection = database.connection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, schoolId);
            return executeList(statement);
        }
    }

    public List<Career> searchByName(String name) throws SQLException {
        String sql = SELECT_WITH_SCHOOL + " WHERE c.name ILIKE ? ORDER BY c.name";

        try (Connection connection = database.connection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, "%" + name.trim() + "%");
            return executeList(statement);
        }
    }

    public List<Career> findBySchoolIdAndName(long schoolId, String name) throws SQLException {
        String sql = SELECT_WITH_SCHOOL
                + " WHERE c.school_id = ? AND c.name ILIKE ? ORDER BY c.name";

        try (Connection connection = database.connection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, schoolId);
            statement.setString(2, "%" + name.trim() + "%");
            return executeList(statement);
        }
    }

    public Optional<Career> findById(long id) throws SQLException {
        String sql = SELECT_WITH_SCHOOL + " WHERE c.id = ?";

        try (Connection connection = database.connection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);

            try (ResultSet resultSet = statement.executeQuery()) {
                return resultSet.next()
                        ? Optional.of(mapCareer(resultSet))
                        : Optional.empty();
            }
        }
    }

    private List<Career> executeList(PreparedStatement statement) throws SQLException {
        List<Career> careers = new ArrayList<>();

        try (ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                careers.add(mapCareer(resultSet));
            }
        }

        return careers;
    }

    private Career mapCareer(ResultSet resultSet) throws SQLException {
        School school = new School(
                resultSet.getLong("school_id"),
                resultSet.getString("school_name"));

        return new Career(
                resultSet.getLong("id"),
                resultSet.getString("code"),
                resultSet.getString("name"),
                school,
                resultSet.getInt("duration_terms"),
                Modality.valueOf(resultSet.getString("modality")),
                CareerStatus.valueOf(resultSet.getString("status")),
                resultSet.getString("image_url"));
    }
}
