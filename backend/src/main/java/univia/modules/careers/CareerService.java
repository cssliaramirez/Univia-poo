package univia.modules.careers;

import univia.entities.Career;
import univia.errors.DatabaseException;
import univia.errors.NotFoundException;
import univia.repositories.CareerRepository;
import java.sql.SQLException;
import java.util.List;

public final class CareerService {
    private final CareerRepository repository;

    public CareerService(CareerRepository repository) {
        this.repository = repository;
    }

    public List<CareerResponse> find(Long schoolId, String name) {
        try {
            List<Career> careers;
            boolean hasName = name != null && !name.isBlank();

            if (schoolId != null && hasName) {
                careers = repository.findBySchoolIdAndName(schoolId, name);
            } else if (schoolId != null) {
                careers = repository.findBySchoolId(schoolId);
            } else if (hasName) {
                careers = repository.searchByName(name);
            } else {
                careers = repository.findAll();
            }

            return careers.stream().map(CareerResponse::from).toList();
        } catch (SQLException exception) {
            throw new DatabaseException("No fue posible consultar las carreras", exception);
        }
    }

    public CareerResponse findById(long id) {
        try {
            return repository.findById(id)
                    .map(CareerResponse::from)
                    .orElseThrow(() -> new NotFoundException("La carrera solicitada no existe"));
        } catch (SQLException exception) {
            throw new DatabaseException("No fue posible consultar la carrera", exception);
        }
    }
}
