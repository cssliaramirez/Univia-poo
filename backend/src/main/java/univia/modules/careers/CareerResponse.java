package univia.modules.careers;

import univia.entities.Career;
import univia.entities.CareerStatus;
import univia.entities.Modality;
import univia.modules.schools.SchoolResponse;

public record CareerResponse(
        long id,
        String code,
        String name,
        SchoolResponse school,
        int durationTerms,
        String durationUnit,
        String modality,
        String status) {

    public static CareerResponse from(Career career) {
        return new CareerResponse(
                career.getId(),
                career.getCode(),
                career.getName(),
                SchoolResponse.from(career.getSchool()),
                career.getDurationTerms(),
                "Cuatrimestres",
                translateModality(career.getModality()),
                translateStatus(career.getStatus()));
    }

    private static String translateModality(Modality modality) {
        return switch (modality) {
            case ON_CAMPUS -> "Presencial";
            case ONLINE -> "Virtual";
            case HYBRID -> "Híbrida";
        };
    }

    private static String translateStatus(CareerStatus status) {
        return switch (status) {
            case ACTIVE -> "Activa";
            case INACTIVE -> "Inactiva";
        };
    }
}
