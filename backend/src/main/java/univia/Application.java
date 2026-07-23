package univia;

import io.javalin.Javalin;
import univia.config.AppConfig;
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

public final class Application {
    private Application() {}

    public static void main(String[] args) {
        AppConfig config = AppConfig.load();
        Database database = new Database(config.database());
        HealthModule healthModule = new HealthModule(new HealthController(new HealthService(database, config.appVersion())));
        SchoolRepository schoolRepository = new SchoolRepository(database);
        CareerRepository careerRepository = new CareerRepository(database);
        SchoolModule schoolModule = new SchoolModule(new SchoolController(new SchoolService(schoolRepository)));
        CareerModule careerModule = new CareerModule(new CareerController(new CareerService(careerRepository)));

        Javalin app = AppFactory.create(config, healthModule, schoolModule, careerModule);
        Runtime.getRuntime().addShutdownHook(new Thread(database::close));
        app.start(config.port());
    }
}
