package univia.modules.pensum;

import io.javalin.http.Context;
import io.javalin.openapi.HttpMethod;
import io.javalin.openapi.OpenApi;
import io.javalin.openapi.OpenApiContent;
import io.javalin.openapi.OpenApiParam;
import io.javalin.openapi.OpenApiResponse;
import univia.errors.ApiError;
import univia.errors.BadRequestException;

public final class PensumController {
    private final PensumService service;

    public PensumController(PensumService service) {
        this.service = service;
    }

    @OpenApi(
            path = "/api/careers/{id}/pensum",
            methods = HttpMethod.GET,
            summary = "Consultar el pensum de una carrera",
            description = "Devuelve las materias del pensum organizadas por cuatrimestre.",
            tags = "Pensum",
            pathParams = @OpenApiParam(name = "id", type = Long.class, required = true),
            responses = {
                    @OpenApiResponse(
                            status = "200",
                            content = @OpenApiContent(from = PensumResponse[].class),
                            description = "Materias del pensum"),
                    @OpenApiResponse(
                            status = "400",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "Identificador inválido"),
                    @OpenApiResponse(
                            status = "404",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "Pensum no encontrado"),
                    @OpenApiResponse(
                            status = "503",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "No fue posible consultar la base de datos")
            })
    public void findByCareerId(Context context) {
        long id = requiredPositiveLong(context.pathParam("id"), "id");
        context.json(service.findByCareerId(id));
    }

    private long requiredPositiveLong(String value, String parameter) {
        try {
            long parsed = Long.parseLong(value);
            if (parsed <= 0) throw new NumberFormatException();
            return parsed;
        } catch (NumberFormatException exception) {
            throw new BadRequestException("El parámetro " + parameter + " debe ser un número positivo");
        }
    }
}
