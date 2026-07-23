package univia.modules.schools;

import univia.errors.DatabaseException;
import univia.repositories.SchoolRepository;
import java.sql.SQLException;
import java.util.List;

public final class SchoolService {
    private final SchoolRepository repository;

    public SchoolService(SchoolRepository repository) {
        this.repository = repository;
    }

    public List<SchoolResponse> findAll() {
        try {
            return repository.findAll().stream()
                    .map(SchoolResponse::from)
                    .toList();
        } catch (SQLException exception) {
            throw new DatabaseException("No fue posible consultar las escuelas", exception);
        }
    }
}
