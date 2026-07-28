package univia.modules.pensum;

import io.javalin.config.JavalinConfig;

public final class PensumModule {
    private final PensumController controller;

    public PensumModule(PensumController controller) {
        this.controller = controller;
    }

    public void register(JavalinConfig config) {
        config.routes.get("/api/careers/{id}/pensum", controller::findByCareerId);
    }
}
