package univia.entities;

import java.util.Objects;

public final class PensumEntry {
    private final Long id;
    private final long careerId;
    private final int termNumber;
    private final String subjectName;
    private final int credits;

    public PensumEntry(Long id, long careerId, int termNumber, String subjectName, int credits) {
        this.id = id;
        this.careerId = careerId;
        this.termNumber = termNumber;
        this.subjectName = Objects.requireNonNull(subjectName);
        this.credits = credits;
    }

    public Long getId() { return id; }
    public long getCareerId() { return careerId; }
    public int getTermNumber() { return termNumber; }
    public String getSubjectName() { return subjectName; }
    public int getCredits() { return credits; }
}
