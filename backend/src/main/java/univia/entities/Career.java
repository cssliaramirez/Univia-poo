package univia.entities;

import java.util.Objects;

public final class Career {
    private final Long id;
    private String code;
    private String name;
    private School school;
    private int durationTerms;
    private Modality modality;
    private CareerStatus status;

    public Career(Long id, String code, String name, School school, int durationTerms,
                  Modality modality, CareerStatus status) {
        this.id = id;
        this.code = Objects.requireNonNull(code);
        this.name = Objects.requireNonNull(name);
        this.school = Objects.requireNonNull(school);
        this.durationTerms = durationTerms;
        this.modality = Objects.requireNonNull(modality);
        this.status = Objects.requireNonNull(status);
    }

    public Long getId() { return id; }
    public String getCode() { return code; }
    public void setCode(String code) { this.code = Objects.requireNonNull(code); }
    public String getName() { return name; }
    public void setName(String name) { this.name = Objects.requireNonNull(name); }
    public School getSchool() { return school; }
    public void setSchool(School school) { this.school = Objects.requireNonNull(school); }
    public int getDurationTerms() { return durationTerms; }
    public void setDurationTerms(int durationTerms) { this.durationTerms = durationTerms; }
    public Modality getModality() { return modality; }
    public void setModality(Modality modality) { this.modality = Objects.requireNonNull(modality); }
    public CareerStatus getStatus() { return status; }
    public void setStatus(CareerStatus status) { this.status = Objects.requireNonNull(status); }
}

