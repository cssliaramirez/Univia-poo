package univia.modules.careers;

import io.javalin.http.Context;
import io.javalin.openapi.HttpMethod;
import io.javalin.openapi.OpenApi;
import io.javalin.openapi.OpenApiContent;
import io.javalin.openapi.OpenApiParam;
import io.javalin.openapi.OpenApiResponse;
import univia.errors.ApiError;
import univia.errors.BadRequestException;

public final class CareerController {
    private final CareerService service;

    public CareerController(CareerService service) {
        this.service = service;
    }

    @OpenApi(
            path = "/api/careers",
            methods = HttpMethod.GET,
            summary = "Consultar y buscar carreras",
            description = "Permite filtrar por escuela, buscar por nombre o consultar todas las carreras.",
            tags = "Carreras",
            queryParams = {
                    @OpenApiParam(name = "schoolId", type = Long.class, description = "Identificador de la escuela"),
                    @OpenApiParam(name = "name", type = String.class, description = "Texto contenido en el nombre")
            },
            responses = {
                    @OpenApiResponse(
                            status = "200",
                            content = @OpenApiContent(from = CareerResponse[].class),
                            description = "Carreras encontradas; puede ser una lista vacía"),
                    @OpenApiResponse(
                            status = "400",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "Parámetros inválidos"),
                    @OpenApiResponse(
                            status = "503",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "No fue posible consultar la base de datos")
            })
    public void find(Context context) {
        Long schoolId = optionalPositiveLong(context.queryParam("schoolId"), "schoolId");
        context.json(service.find(schoolId, context.queryParam("name")));
    }

    @OpenApi(
            path = "/api/careers/{id}",
            methods = HttpMethod.GET,
            summary = "Consultar una carrera",
            description = "Devuelve la información completa de una carrera.",
            tags = "Carreras",
            pathParams = @OpenApiParam(name = "id", type = Long.class, required = true),
            responses = {
                    @OpenApiResponse(
                            status = "200",
                            content = @OpenApiContent(from = CareerResponse.class),
                            description = "Información de la carrera"),
                    @OpenApiResponse(
                            status = "400",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "Identificador inválido"),
                    @OpenApiResponse(
                            status = "404",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "Carrera no encontrada"),
                    @OpenApiResponse(
                            status = "503",
                            content = @OpenApiContent(from = ApiError.class),
                            description = "No fue posible consultar la base de datos")
            })
    public void findById(Context context) {
        long id = requiredPositiveLong(context.pathParam("id"), "id");
        context.json(service.findById(id));
    }

    private Long optionalPositiveLong(String value, String parameter) {
        return value == null ? null : requiredPositiveLong(value, parameter);
    }

    private long requiredPositiveLong(String value, String parameter) {
        try {
            long parsed = Long.parseLong(value);
            if (parsed <= 0) {
                throw new NumberFormatException();
            }
            return parsed;
        } catch (NumberFormatException exception) {
            throw new BadRequestException("El parámetro " + parameter + " debe ser un número positivo");
        }
    }
}
