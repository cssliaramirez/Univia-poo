package univia.modules.health;

import io.javalin.config.JavalinConfig;

public final class HealthModule {
    private final HealthController controller;

    public HealthModule(HealthController controller) {
        this.controller = controller;
    }

    public void register(JavalinConfig config) {
        config.routes.get("/api/health", controller::getHealth);
    }
}

