package univia.modules.health;

import univia.database.Database;

public final class HealthService {
    private final Database database;
    private final String version;

    public HealthService(Database database, String version) {
        this.database = database;
        this.version = version;
    }

    public HealthResponse getHealth() {
        boolean databaseHealthy = database.isHealthy();
        return new HealthResponse(databaseHealthy ? "saludable" : "degradado",
                databaseHealthy ? "disponible" : "no disponible", version);
    }
}

