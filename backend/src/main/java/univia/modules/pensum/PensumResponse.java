package univia.modules.pensum;

import java.util.List;

public record PensumResponse(
        long id,
        int termNumber,
        String subjectName,
        int credits) {

    public static PensumResponse from(univia.entities.PensumEntry entry) {
        return new PensumResponse(
                entry.getId(),
                entry.getTermNumber(),
                entry.getSubjectName(),
                entry.getCredits());
    }
}
