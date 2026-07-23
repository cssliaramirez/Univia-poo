CREATE TABLE IF NOT EXISTS schools (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS careers (
    id BIGSERIAL PRIMARY KEY,
    code VARCHAR(30) NOT NULL UNIQUE,
    name VARCHAR(180) NOT NULL,
    school_id BIGINT NOT NULL REFERENCES schools(id),
    duration_terms SMALLINT NOT NULL CHECK (duration_terms > 0),
    modality VARCHAR(20) NOT NULL CHECK (modality IN ('ON_CAMPUS', 'ONLINE', 'HYBRID')),
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE', 'INACTIVE'))
);

CREATE INDEX IF NOT EXISTS idx_careers_school_id ON careers(school_id);
CREATE INDEX IF NOT EXISTS idx_careers_name_lower ON careers(LOWER(name));

-- Migra bases creadas con el nombre anterior sin fallar en instalaciones nuevas.
DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'careers' AND column_name = 'duration_semesters'
    ) AND NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'careers' AND column_name = 'duration_terms'
    ) THEN
        ALTER TABLE careers RENAME COLUMN duration_semesters TO duration_terms;
    END IF;
END $$;

INSERT INTO schools (name)
VALUES
    ('Escuela de Administración'),
    ('Escuela de Artes y Comunicación'),
    ('Escuela de Ciencias Sociales'),
    ('Escuela de Contabilidad y Finanzas'),
    ('Escuela de Derecho'),
    ('Escuela de Español'),
    ('Escuela de Idiomas'),
    ('Escuela de Informática'),
    ('Escuela de Ingenierías'),
    ('Escuela de Matemáticas'),
    ('Escuela de Mercadeo y Negocios Internacionales'),
    ('Escuela de Turismo')
ON CONFLICT (name) DO NOTHING;

INSERT INTO careers (code, name, school_id, duration_terms, modality, status)
SELECT
    program.code,
    program.name,
    school.id,
    program.duration_terms,
    program.modality,
    program.status
FROM (VALUES
    ('LMF', 'Licenciatura en Educación Secundaria: Matemática y Física', 'Escuela de Idiomas', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('ISC', 'Ingeniería de Sistemas de Computación', 'Escuela de Informática', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('ISO', 'Ingeniería de Software', 'Escuela de Informática', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('INE', 'Ingeniería Eléctrica', 'Escuela de Ingenierías', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('IEL', 'Ingeniería Electrónica', 'Escuela de Ingenierías', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('IND', 'Ingeniería Industrial', 'Escuela de Ingenierías', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('ADM', 'Licenciatura en Administración de Empresas', 'Escuela de Administración', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('ATH', 'Licenciatura en Administración Turística y Hotelera', 'Escuela de Turismo', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('CIN', 'Licenciatura en Cinematografía', 'Escuela de Artes y Comunicación', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('CDG', 'Licenciatura en Comunicación Digital', 'Escuela de Artes y Comunicación', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('CPM', 'Licenciatura en Comunicación y Periodismo Multiplataforma', 'Escuela de Artes y Comunicación', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('CON', 'Licenciatura en Contabilidad', 'Escuela de Contabilidad y Finanzas', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('DER', 'Licenciatura en Derecho', 'Escuela de Derecho', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('DIN', 'Licenciatura en Diseño de Interiores', 'Escuela de Artes y Comunicación', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('DIG', 'Licenciatura en Diseño Gráfico', 'Escuela de Artes y Comunicación', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('ECO', 'Licenciatura en Economía y Ciencia de Datos', 'Escuela de Contabilidad y Finanzas', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('LEA', 'Licenciatura en Educación Artística', 'Escuela de Artes y Comunicación', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('LEF', 'Licenciatura en Educación, mención Lenguas Extranjeras: Francés', 'Escuela de Idiomas', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('LEI', 'Licenciatura en Educación, mención Lenguas Extranjeras: Inglés', 'Escuela de Idiomas', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('EST', 'Licenciatura en Estadística', 'Escuela de Matemáticas', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('FIN', 'Licenciatura en Finanzas', 'Escuela de Contabilidad y Finanzas', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('GAS', 'Licenciatura en Gastronomía y Arte Culinario', 'Escuela de Turismo', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('GOL', 'Licenciatura en Gestión de Operaciones y Logística', 'Escuela de Administración', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('LEL', 'Licenciatura en Lengua Española y Literatura Orientada a la Educación Secundaria', 'Escuela de Español', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('LME', 'Licenciatura en Matemática Orientada a la Educación Secundaria', 'Escuela de Matemáticas', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('MER', 'Licenciatura en Mercadotecnia', 'Escuela de Mercadeo y Negocios Internacionales', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('NIN', 'Licenciatura en Negocios Internacionales', 'Escuela de Mercadeo y Negocios Internacionales', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('PSO', 'Licenciatura en Psicología Organizacional', 'Escuela de Ciencias Sociales', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('PUB', 'Licenciatura en Publicidad', 'Escuela de Artes y Comunicación', 12, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-ADS', 'Técnico Superior Analista Desarrollador de Software', 'Escuela de Informática', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-EM', 'Técnico Superior Ejecutivo de Marketing', 'Escuela de Mercadeo y Negocios Internacionales', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-APA', 'Técnico Superior en Animación y Postproducción Audiovisual', 'Escuela de Artes y Comunicación', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-CE', 'Técnico Superior en Contabilidad Empresarial', 'Escuela de Contabilidad y Finanzas', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-CRI', 'Técnico Superior en Criminalística', 'Escuela de Derecho', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-DAD', 'Técnico Superior en Dibujo Arquitectónico Digital', 'Escuela de Artes y Comunicación', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-DPE', 'Técnico Superior en Diseño y Producción Editorial', 'Escuela de Artes y Comunicación', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-ECI', 'Técnico Superior Ejecutivo en Comercio Internacional', 'Escuela de Administración', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-FIN', 'Técnico Superior en Finanzas', 'Escuela de Contabilidad y Finanzas', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-GE', 'Técnico Superior en Gestión de Eventos', 'Escuela de Artes y Comunicación', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-GSA', 'Técnico Superior en Gestión de Servicios de Alimentos y Bebidas', 'Escuela de Turismo', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-GL', 'Técnico Superior en Gestión Legal', 'Escuela de Derecho', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-L360', 'Técnico Superior en Logística 360 y Gestión de Materiales', 'Escuela de Administración', 6, 'ON_CAMPUS', 'ACTIVE'),
    ('TS-TH', 'Técnico Superior Turístico y Hotelero', 'Escuela de Turismo', 6, 'ON_CAMPUS', 'ACTIVE')
) AS program(code, name, school_name, duration_terms, modality, status)
INNER JOIN schools AS school ON school.name = program.school_name
ON CONFLICT (code) DO UPDATE SET
    name = EXCLUDED.name,
    school_id = EXCLUDED.school_id,
    duration_terms = EXCLUDED.duration_terms,
    modality = EXCLUDED.modality,
    status = EXCLUDED.status;
