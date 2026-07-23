package univia;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

import io.javalin.Javalin;
import io.javalin.testtools.JavalinTest;
import univia.config.AppConfig;
import univia.config.DatabaseConfig;
import univia.database.Database;
import univia.modules.careers.CareerController;
import univia.modules.careers.CareerModule;
import univia.modules.careers.CareerService;
import univia.modules.health.HealthController;
import univia.modules.health.HealthModule;
import univia.modules.health.HealthService;
import univia.modules.schools.SchoolController;
import univia.modules.schools.SchoolModule;
import univia.modules.schools.SchoolService;
import univia.repositories.CareerRepository;
import univia.repositories.SchoolRepository;

class AppIntegrationTest {
    @Test
    void exposesHealthOpenApiAndSwagger() {
        AppConfig config = new AppConfig(
                7000,
                "test",
                new DatabaseConfig("127.0.0.1", 1, "unavailable", "test", "test", 1, "disable", ""));

        try (Database database = new Database(config.database())) {
            HealthModule module = new HealthModule(
                    new HealthController(new HealthService(database, config.appVersion())));
            SchoolModule schoolModule = new SchoolModule(
                    new SchoolController(new SchoolService(new SchoolRepository(database))));
            CareerModule careerModule = new CareerModule(
                    new CareerController(new CareerService(new CareerRepository(database))));
            Javalin app = AppFactory.create(config, module, schoolModule, careerModule);

            JavalinTest.test(app, (server, client) -> {
                var health = client.get("/api/health");
                assertTrue(Set.of(200, 503).contains(health.code()));
                String healthBody = health.body().string();
                assertTrue(healthBody.contains("\"status\":\"degradado\""));
                assertTrue(healthBody.contains("\"database\":\"no disponible\""));
                assertTrue(healthBody.contains("\"version\":\"test\""));

                var openApi = client.get("/openapi");
                assertEquals(200, openApi.code());
                String openApiBody = openApi.body().string();
                assertTrue(openApiBody.contains("/api/health"));
                assertTrue(openApiBody.contains("/api/schools"));
                assertTrue(openApiBody.contains("/api/careers"));
                assertTrue(openApiBody.contains("/api/careers/{id}"));

                assertEquals(200, client.get("/docs").code());
                assertEquals(400, client.get("/api/careers?schoolId=invalid").code());
                assertEquals(503, client.get("/api/schools").code());
            });
        }
    }
}
