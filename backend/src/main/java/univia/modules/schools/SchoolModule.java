package univia.modules.schools;

import io.javalin.config.JavalinConfig;

public final class SchoolModule {
    private final SchoolController controller;

    public SchoolModule(SchoolController controller) {
        this.controller = controller;
    }

    public void register(JavalinConfig config) {
        config.routes.get("/api/schools", controller::findAll);
    }
}
