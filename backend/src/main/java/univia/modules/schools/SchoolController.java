package univia.modules.schools;

import univia.errors.ApiError;
import io.javalin.http.Context;
import io.javalin.openapi.HttpMethod;
import io.javalin.openapi.OpenApi;
import io.javalin.openapi.OpenApiContent;
import io.javalin.openapi.OpenApiResponse;

public final class SchoolController {
    private final SchoolService service;

    public SchoolController(SchoolService service) {
        this.service = service;
    }

    @OpenApi(
            path = "/api/schools",
            methods = HttpMethod.GET,
            summary = "Consultar las escuelas",
            description = "Devuelve todas las escuelas o facultades disponibles.",
            tags = "Escuelas",
            responses = {
                    @OpenApiResponse(
                            status = "200",
                            content = @OpenApiContent(from = SchoolResponse[].class),
                            description = "Listado de escuelas"),
                    @OpenApiResponse(
                            status = "503",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "No fue posible consultar la base de datos")
            })
    public void findAll(Context context) {
        context.json(service.findAll());
    }
}
