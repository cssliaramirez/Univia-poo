package univia.errors;

import io.javalin.config.JavalinConfig;

public final class ErrorHandler {
    private ErrorHandler() {}

    public static void register(JavalinConfig config) {
        config.routes.exception(BadRequestException.class, (exception, context) ->
                context.status(400).json(new ApiError(400, exception.getMessage())));
        config.routes.exception(NotFoundException.class, (exception, context) ->
                context.status(404).json(new ApiError(404, exception.getMessage())));
        config.routes.exception(DatabaseException.class, (exception, context) ->
                context.status(503).json(new ApiError(503, exception.getMessage())));
        config.routes.exception(Exception.class, (exception, context) -> {
            context.status(500).json(new ApiError(500, "Ocurrió un error inesperado"));
        });
        config.routes.error(404, context ->
                context.json(new ApiError(404, "Recurso no encontrado")));
    }
}

