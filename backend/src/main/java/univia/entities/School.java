package univia.entities;

import java.util.Objects;

public final class School {
    private final Long id;
    private String name;

    public School(Long id, String name) {
        this.id = id;
        this.name = Objects.requireNonNull(name, "El nombre de la escuela es requerido");
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = Objects.requireNonNull(name); }
}

