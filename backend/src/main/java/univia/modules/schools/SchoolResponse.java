package univia.modules.schools;

import univia.entities.School;

public record SchoolResponse(long id, String name) {
    public static SchoolResponse from(School school) {
        return new SchoolResponse(school.getId(), school.getName());
    }
}
