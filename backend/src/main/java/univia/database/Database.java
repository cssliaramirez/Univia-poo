package univia.database;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import univia.config.DatabaseConfig;
import java.sql.Connection;
import java.sql.SQLException;

public final class Database implements AutoCloseable {
    private final HikariDataSource dataSource;

    public Database(DatabaseConfig config) {
        HikariConfig hikari = new HikariConfig();
        hikari.setJdbcUrl(config.jdbcUrl());
        hikari.setUsername(config.user());
        hikari.setPassword(config.password());
        hikari.setMaximumPoolSize(config.poolSize());
        hikari.setConnectionTimeout(3_000);
        hikari.setPoolName("univia-pool");
        hikari.setInitializationFailTimeout(-1);
        this.dataSource = new HikariDataSource(hikari);
    }

    public Connection connection() throws SQLException {
        return dataSource.getConnection();
    }

    public boolean isHealthy() {
        try (Connection connection = connection()) {
            return connection.isValid(2);
        } catch (SQLException exception) {
            return false;
        }
    }

    @Override
    public void close() {
        dataSource.close();
    }
}

