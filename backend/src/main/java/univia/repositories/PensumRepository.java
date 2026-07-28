package univia.repositories;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import univia.database.Database;
import univia.entities.PensumEntry;

public final class PensumRepository {
    private static final String SELECT = """
            SELECT id, career_id, term_number, subject_name, credits
            FROM pensum
            WHERE career_id = ?
            ORDER BY term_number, id
            """;

    private final Database database;

    public PensumRepository(Database database) {
        this.database = database;
    }

    public List<PensumEntry> findByCareerId(long careerId) throws SQLException {
        try (Connection connection = database.connection();
             PreparedStatement statement = connection.prepareStatement(SELECT)) {
            statement.setLong(1, careerId);

            List<PensumEntry> entries = new ArrayList<>();
            try (ResultSet resultSet = statement.executeQuery()) {
                while (resultSet.next()) {
                    entries.add(mapEntry(resultSet));
                }
            }
            return entries;
        }
    }

    private PensumEntry mapEntry(ResultSet resultSet) throws SQLException {
        return new PensumEntry(
                resultSet.getLong("id"),
                resultSet.getLong("career_id"),
                resultSet.getInt("term_number"),
                resultSet.getString("subject_name"),
                resultSet.getInt("credits"));
    }
}
