package univia.modules.careers;

import io.javalin.config.JavalinConfig;

public final class CareerModule {
    private final CareerController controller;

    public CareerModule(CareerController controller) {
        this.controller = controller;
    }

    public void register(JavalinConfig config) {
        config.routes.get("/api/careers", controller::find);
        config.routes.get("/api/careers/{id}", controller::findById);
    }
}
