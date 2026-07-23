package univia;

import io.javalin.Javalin;
import io.javalin.openapi.plugin.OpenApiPlugin;
import io.javalin.openapi.plugin.swagger.SwaggerPlugin;
import univia.config.AppConfig;
import univia.errors.ErrorHandler;
import univia.modules.careers.CareerModule;
import univia.modules.health.HealthModule;
import univia.modules.schools.SchoolModule;

public final class AppFactory {
    private AppFactory() {}

    public static Javalin create(
            AppConfig appConfig,
            HealthModule healthModule,
            SchoolModule schoolModule,
            CareerModule careerModule) {
        return Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors ->
                    cors.addRule(rule -> rule.anyHost()));
            config.registerPlugin(new OpenApiPlugin(openApi ->
                    openApi.withDefinitionConfiguration((version, definition) ->
                            definition.info(info -> info
                                    .title("UniVía API")
                                    .description("API para consultar carreras por escuela o facultad")
                                    .version(appConfig.appVersion())))));
            config.registerPlugin(new SwaggerPlugin(swagger -> {
                swagger.withDocumentationPath("/openapi");
                swagger.withUiPath("/docs");
                swagger.withTitle("UniVía API");
            }));
            healthModule.register(config);
            schoolModule.register(config);
            careerModule.register(config);
            ErrorHandler.register(config);
        });
    }
}
