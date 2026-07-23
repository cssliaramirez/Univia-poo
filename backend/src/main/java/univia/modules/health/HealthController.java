package univia.modules.health;

import io.javalin.http.Context;
import io.javalin.openapi.HttpMethod;
import io.javalin.openapi.OpenApi;
import io.javalin.openapi.OpenApiContent;
import io.javalin.openapi.OpenApiResponse;

public final class HealthController {
    private final HealthService service;

    public HealthController(HealthService service) {
        this.service = service;
    }

    @OpenApi(
            path = "/api/health",
            methods = HttpMethod.GET,
            summary = "Consultar el estado del backend",
            description = "Comprueba la aplicación y la conectividad con PostgreSQL.",
            tags = "Health",
            responses = {
                    @OpenApiResponse(
                            status = "200",
                            content = @OpenApiContent(from = HealthResponse.class),
                            description = "Aplicación y base de datos disponibles"),
                    @OpenApiResponse(
                            status = "503",
                            content = @OpenApiContent(from = HealthResponse.class),
                            description = "La base de datos no está disponible")
            })
    public void getHealth(Context context) {
        HealthResponse response = service.getHealth();
        context.status("saludable".equals(response.status()) ? 200 : 503).json(response);
    }
}

