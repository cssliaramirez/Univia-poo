package univia.modules.pensum;

import univia.entities.PensumEntry;
import univia.errors.DatabaseException;
import univia.errors.NotFoundException;
import univia.repositories.PensumRepository;

import java.sql.SQLException;
import java.util.List;

public final class PensumService {
    private final PensumRepository repository;

    public PensumService(PensumRepository repository) {
        this.repository = repository;
    }

    public List<PensumResponse> findByCareerId(long careerId) {
        try {
            List<PensumEntry> entries = repository.findByCareerId(careerId);
            if (entries.isEmpty()) {
                throw new NotFoundException("No se encontró el pensum de la carrera solicitada");
            }
            return entries.stream().map(PensumResponse::from).toList();
        } catch (SQLException exception) {
            throw new DatabaseException("No fue posible consultar el pensum", exception);
        }
    }
}
