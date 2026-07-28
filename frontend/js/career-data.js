const careerData = {
	LMF: {
		category: "licenciatura",
		idealProfile:
			"Vocación docente, interés por las matemáticas y la física, paciencia para enseñar a adolescentes y gusto por la pedagogía.",
		workAreas:
			"Colegios públicos y privados, centros de tutoría académica, elaboración de material didáctico, coordinación académica en secundaria.",
		pensumLink: "https://unapec.edu.do/pensum/LMF",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
			"Entrevista con el director de escuela",
		],
		cost: "RD$42,000 – RD$55,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Vocación Docente, Beca Excelencia Académica, Beca Deportiva, Crédito Educativo FUNDAPEC.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	ISC: {
		category: "ingenieria",
		idealProfile:
			"Interés por la tecnología, los sistemas hardware y software, curiosidad por cómo funcionan las computadoras a nivel de sistema y gusto por la resolución de problemas complejos.",
		workAreas:
			"Empresas de tecnología, departamentos de TI, desarrollo de sistemas embebidos, administración de infraestructura, soporte técnico especializado, consultoría IT.",
		pensumLink: "https://unapec.edu.do/pensum/ISC",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
			"Entrevista con el director de escuela",
		],
		cost: "RD$45,000 – RD$58,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Beca FUNDAPEC, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	ISO: {
		category: "ingenieria",
		idealProfile:
			"Interés por el desarrollo de software, la lógica de programación, la calidad del código y la construcción de productos digitales escalables.",
		workAreas:
			"Empresas de software, startups tecnológicas, desarrollo web y móvil, arquitectura de software, DevOps, aseguramiento de calidad.",
		pensumLink: "https://unapec.edu.do/pensum/ISO",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$45,000 – RD$58,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Beca FUNDAPEC, Becas MESCYT para tecnología.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	INE: {
		category: "ingenieria",
		idealProfile:
			"Interés por la electricidad, los circuitos, las energías renovables y el diseño de sistemas de potencia.",
		workAreas:
			"Empresas de generación y distribución eléctrica, energías renovables, construcción, industria manufacturera, consultoría eléctrica.",
		pensumLink: "https://unapec.edu.do/pensum/INE",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$44,000 – RD$57,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Beca FUNDAPEC.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	IEL: {
		category: "ingenieria",
		idealProfile:
			"Interés por la electrónica, los microcontroladores, los sistemas digitales y el diseño de circuitos.",
		workAreas:
			"Industria electrónica, telecomunicaciones, automatización industrial, robótica, diseño de hardware, mantenimiento electrónico.",
		pensumLink: "https://unapec.edu.do/pensum/IEL",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$44,000 – RD$57,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Beca FUNDAPEC.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	IND: {
		category: "ingenieria",
		idealProfile:
			"Interés por optimizar procesos, la logística, la gestión de producción y la mejora continua.",
		workAreas:
			"Industria manufacturera, logística y cadena de suministro, control de calidad, consultoría de procesos, gestión de operaciones.",
		pensumLink: "https://unapec.edu.do/pensum/IND",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$44,000 – RD$57,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Beca FUNDAPEC.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	ADM: {
		category: "licenciatura",
		idealProfile:
			"Habilidades de liderazgo, gusto por la organización, capacidad de tomar decisiones y visión estratégica.",
		workAreas:
			"Empresas privadas e instituciones públicas, gestión de recursos humanos, dirección de operaciones, emprendimiento, consultoría empresarial.",
		pensumLink: "https://unapec.edu.do/pensum/ADM",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$40,000 – RD$52,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Liderazgo, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	ATH: {
		category: "licenciatura",
		idealProfile:
			"Pasíón por los viajes, la hospitalidad, la organización de eventos y el servicio al cliente.",
		workAreas:
			"Hoteles, cadenas turísticas, aerolíneas, agencias de viajes, gestión de destinos turísticos, organización de eventos.",
		pensumLink: "https://unapec.edu.do/pensum/ATH",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$40,000 – RD$52,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Turismo, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	CIN: {
		category: "licenciatura",
		idealProfile:
			"Creatividad visual, interés por la narración audiovisual, sensibilidad artística y gusto por la producción cinematográfica.",
		workAreas:
			"Producción de cine y televisión, dirección de fotografía, edición de video, animación, publicidad audiovisual, contenido digital.",
		pensumLink: "https://unapec.edu.do/pensum/CIN",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
			"Portafolio creativo (opcional)",
		],
		cost: "RD$42,000 – RD$55,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	CDG: {
		category: "licenciatura",
		idealProfile:
			"Interés por las redes sociales, el marketing digital, la creación de contenido y la comunicación en entornos digitales.",
		workAreas:
			"Agencias de marketing digital, medios de comunicación, gestión de redes sociales, producción de contenido web, comunicación corporativa.",
		pensumLink: "https://unapec.edu.do/pensum/CDG",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$41,000 – RD$53,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	CPM: {
		category: "licenciatura",
		idealProfile:
			"Gusto por la escritura, la investigación periodística, la comunicación en múltiples formatos y la actualidad noticiosa.",
		workAreas:
			"Periódicos y medios digitales, radio y televisión, agencias de comunicación, producción de podcasts, redacción freelance, relaciones públicas.",
		pensumLink: "https://unapec.edu.do/pensum/CPM",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$41,000 – RD$53,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	CON: {
		category: "licenciatura",
		idealProfile:
			"Habilidad con los números, atención al detalle, ética profesional e interés por las finanzas y la auditoría.",
		workAreas:
			"Firmas de contabilidad y auditoría, departamentos financieros, consultoría fiscal, sector bancario, emprendimiento contable.",
		pensumLink: "https://unapec.edu.do/pensum/CON",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$40,000 – RD$52,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo FUNDAPEC.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	DER: {
		category: "licenciatura",
		idealProfile:
			"Interés por la justicia, capacidad de argumentación, lectura crítica y gusto por el debate y la interpretación de leyes.",
		workAreas:
			"Bufetes de abogados, poder judicial, notarías, consultoría legal corporativa, defensoría pública, derechos humanos.",
		pensumLink: "https://unapec.edu.do/pensum/DER",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$42,000 – RD$55,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo FUNDAPEC.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	DIN: {
		category: "licenciatura",
		idealProfile:
			"Creatividad para el diseño de espacios, sentido estético, gusto por la arquitectura y la decoración de interiores.",
		workAreas:
			"Estudios de diseño de interiores, firmas de arquitectura, diseño de mobiliario, escaparatismo comercial, consultoría de espacios.",
		pensumLink: "https://unapec.edu.do/pensum/DIN",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$43,000 – RD$56,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	DIG: {
		category: "licenciatura",
		idealProfile:
			"Creatividad visual, dominio del color y la tipografía, interés por la comunicación gráfica y las herramientas de diseño digital.",
		workAreas:
			"Agencias de publicidad, estudios de diseño, branding corporativo, diseño editorial, diseño UX/UI, ilustración digital.",
		pensumLink: "https://unapec.edu.do/pensum/DIG",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$42,000 – RD$55,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	ECO: {
		category: "licenciatura",
		idealProfile:
			"Interés por la economía, el análisis de datos, la estadística y la comprensión de los mercados financieros.",
		workAreas:
			"Bancos centrales y comerciales, consultoría económica, análisis de datos, organismos internacionales, investigación económica.",
		pensumLink: "https://unapec.edu.do/pensum/ECO",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$41,000 – RD$53,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Becas MESCYT.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	LEA: {
		category: "licenciatura",
		idealProfile:
			"Vocación artística y docente, creatividad, interés por las artes visuales y la enseñanza.",
		workAreas:
			"Colegios, centros culturales, talleres de arte, museos, educación artística comunitaria.",
		pensumLink: "https://unapec.edu.do/pensum/LEA",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$40,000 – RD$52,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Vocación Docente, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	LEF: {
		category: "licenciatura",
		idealProfile:
			"Dominio o interés por el francés, vocación docente, gusto por las culturas francófonas.",
		workAreas:
			"Colegios bilingües, institutos de idiomas, traducción, turismo receptivo, relaciones internacionales.",
		pensumLink: "https://unapec.edu.do/pensum/LEF",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$40,000 – RD$52,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Vocación Docente, Beca Idiomas, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	LEI: {
		category: "licenciatura",
		idealProfile:
			"Dominio o interés por el inglés, vocación docente, gusto por las culturas angloparlantes y la enseñanza de idiomas.",
		workAreas:
			"Colegios bilingües, institutos de inglés, traducción, call centers bilingües, turismo, relaciones internacionales.",
		pensumLink: "https://unapec.edu.do/pensum/LEI",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$40,000 – RD$52,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Vocación Docente, Beca Idiomas, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	EST: {
		category: "licenciatura",
		idealProfile:
			"Gran habilidad matemática, gusto por el análisis de datos, la probabilidad y la interpretación de resultados numéricos.",
		workAreas:
			"Institutos de estadística, bancos, aseguradoras, investigación de mercado, salud pública, análisis de datos empresariales.",
		pensumLink: "https://unapec.edu.do/pensum/EST",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$40,000 – RD$52,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Becas MESCYT.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	FIN: {
		category: "licenciatura",
		idealProfile:
			"Interés por las inversiones, los mercados financieros, la planificación económica y la gestión de riesgos.",
		workAreas:
			"Bancos, puestos de bolsa, aseguradoras, fondos de inversión, consultoría financiera, finanzas corporativas.",
		pensumLink: "https://unapec.edu.do/pensum/FIN",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$41,000 – RD$53,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	GAS: {
		category: "licenciatura",
		idealProfile:
			"Pasión por la cocina, creatividad culinaria, interés por la gastronomía internacional y la gestión de restaurantes.",
		workAreas:
			"Restaurantes, hoteles, cruceros, catering, consultoría gastronómica, emprendimiento culinario, medios gastronómicos.",
		pensumLink: "https://unapec.edu.do/pensum/GAS",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$44,000 – RD$57,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Turismo, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	GOL: {
		category: "licenciatura",
		idealProfile:
			"Habilidades organizativas, interés por la cadena de suministro, la eficiencia operativa y la gestión de inventarios.",
		workAreas:
			"Empresas de logística y transporte, centros de distribución, comercio internacional, gestión de almacenes, consultoría de operaciones.",
		pensumLink: "https://unapec.edu.do/pensum/GOL",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$41,000 – RD$53,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	LEL: {
		category: "licenciatura",
		idealProfile:
			"Amor por la lectura, la escritura y la lengua española, vocación docente, interés por la literatura hispanoamericana.",
		workAreas:
			"Colegios, universidades, editoriales, corrección de estilo, redacción profesional, investigación literaria.",
		pensumLink: "https://unapec.edu.do/pensum/LEL",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$39,000 – RD$50,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Vocación Docente, Beca Excelencia Académica, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	LME: {
		category: "licenciatura",
		idealProfile:
			"Habilidad matemática, vocación docente, paciencia y gusto por enseñar conceptos abstractos a adolescentes.",
		workAreas:
			"Colegios, centros de tutoría, desarrollo de material didáctico, investigación en educación matemática.",
		pensumLink: "https://unapec.edu.do/pensum/LME",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$39,000 – RD$50,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Vocación Docente, Beca Excelencia Académica, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	MER: {
		category: "licenciatura",
		idealProfile:
			"Creatividad para campañas, interés por el comportamiento del consumidor, habilidades de comunicación y análisis de mercado.",
		workAreas:
			"Agencias de publicidad, departamentos de mercadeo, investigación de mercado, branding, marketing digital, relaciones públicas.",
		pensumLink: "https://unapec.edu.do/pensum/MER",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$41,000 – RD$53,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	NIN: {
		category: "licenciatura",
		idealProfile:
			"Interés por los negocios globales, los idiomas, las relaciones comerciales internacionales y la geopolítica.",
		workAreas:
			"Empresas exportadoras e importadoras, zonas francas, organismos internacionales, consulados, logística internacional.",
		pensumLink: "https://unapec.edu.do/pensum/NIN",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$41,000 – RD$53,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Idiomas, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	PSO: {
		category: "licenciatura",
		idealProfile:
			"Interés por el comportamiento humano en entornos laborales, la gestión del talento y el bienestar organizacional.",
		workAreas:
			"Departamentos de recursos humanos, consultoría organizacional, selección de personal, capacitación y desarrollo, clima laboral.",
		pensumLink: "https://unapec.edu.do/pensum/PSO",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$40,000 – RD$52,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	PUB: {
		category: "licenciatura",
		idealProfile:
			"Creatividad estratégica, interés por la comunicación persuasiva, las campañas publicitarias y el branding.",
		workAreas:
			"Agencias de publicidad, departamentos de marketing, producción audiovisual publicitaria, planificación de medios, marketing digital.",
		pensumLink: "https://unapec.edu.do/pensum/PUB",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$42,000 – RD$55,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-ADS": {
		category: "tecnico_superior",
		idealProfile:
			"Interés práctico por la programación, rapidez para aprender tecnologías nuevas y gusto por construir aplicaciones funcionales.",
		workAreas:
			"Empresas de desarrollo de software, startups, freelancing, soporte técnico, testing de aplicaciones, desarrollo web.",
		pensumLink: "https://unapec.edu.do/pensum/TS-ADS",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$35,000 – RD$45,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Becas MESCYT para tecnología.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-EM": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por las ventas, la promoción de productos, el marketing y la comunicación comercial.",
		workAreas:
			"Departamentos de ventas y mercadeo, agencias de publicidad, retail, telemarketing, marketing digital.",
		pensumLink: "https://unapec.edu.do/pensum/TS-EM",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$33,000 – RD$43,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-APA": {
		category: "tecnico_superior",
		idealProfile:
			"Creatividad audiovisual, gusto por la animación, los efectos visuales y la producción de video digital.",
		workAreas:
			"Estudios de animación, producción de video, postproducción, efectos visuales, contenido para redes sociales, motion graphics.",
		pensumLink: "https://unapec.edu.do/pensum/TS-APA",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$38,000 – RD$48,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-CE": {
		category: "tecnico_superior",
		idealProfile:
			"Habilidad con los números, atención al detalle, organización y gusto por los registros contables.",
		workAreas:
			"Departamentos de contabilidad, firmas de auditoría, pequeñas y medianas empresas, consultoría fiscal básica.",
		pensumLink: "https://unapec.edu.do/pensum/TS-CE",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$33,000 – RD$43,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-CRI": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por la investigación criminal, la escena del crimen, las ciencias forenses y el sistema judicial.",
		workAreas:
			"Cuerpos de investigación criminal, laboratorios forenses, despachos de abogados, compañías de seguros, seguridad privada.",
		pensumLink: "https://unapec.edu.do/pensum/TS-CRI",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$35,000 – RD$45,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-DAD": {
		category: "tecnico_superior",
		idealProfile:
			"Habilidad para el dibujo técnico, interés por la arquitectura, el diseño asistido por computadora y los planos.",
		workAreas:
			"Firmas de arquitectura, empresas de construcción, diseño de interiores, oficinas de ingeniería, levantamientos arquitectónicos.",
		pensumLink: "https://unapec.edu.do/pensum/TS-DAD",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$36,000 – RD$46,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-DPE": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por la edición, la maquetación, el diseño editorial y la producción de libros, revistas y catálogos.",
		workAreas:
			"Editoriales, imprentas, agencias de diseño, producción de revistas y periódicos, autoedición.",
		pensumLink: "https://unapec.edu.do/pensum/TS-DPE",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$36,000 – RD$46,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Arte y Cultura, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-ECI": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por el comercio exterior, los trámites de exportación e importación y las regulaciones aduanales.",
		workAreas:
			"Empresas exportadoras, aduanas, zonas francas, agencias de carga, logística internacional.",
		pensumLink: "https://unapec.edu.do/pensum/TS-ECI",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$34,000 – RD$44,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-FIN": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por las finanzas básicas, la contabilidad financiera y la administración de presupuestos.",
		workAreas:
			"Departamentos financieros, bancos, cooperativas, aseguradoras, análisis de crédito, cajas de ahorro.",
		pensumLink: "https://unapec.edu.do/pensum/TS-FIN",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$34,000 – RD$44,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-GE": {
		category: "tecnico_superior",
		idealProfile:
			"Habilidades organizativas, creatividad para eventos, atención al detalle y gusto por la planificación.",
		workAreas:
			"Empresas de organización de eventos, hoteles, centros de convenciones, relaciones públicas, producción de bodas y conferencias.",
		pensumLink: "https://unapec.edu.do/pensum/TS-GE",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$35,000 – RD$45,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Turismo, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-GSA": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por la gastronomía, la gestión de restaurantes, el servicio al cliente y la administración de alimentos y bebidas.",
		workAreas:
			"Restaurantes, hoteles, cruceros, catering, bares, gestión de banquetes.",
		pensumLink: "https://unapec.edu.do/pensum/TS-GSA",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$36,000 – RD$47,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Turismo, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-GL": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por el derecho, la gestión de documentos legales, los trámites jurídicos y la asistencia administrativa legal.",
		workAreas:
			"Bufetes de abogados, departamentos legales, notarías, registros públicos, oficinas gubernamentales.",
		pensumLink: "https://unapec.edu.do/pensum/TS-GL",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$34,000 – RD$44,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-L360": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por la logística, la gestión de inventarios, el transporte y la cadena de suministro.",
		workAreas:
			"Empresas de logística, centros de distribución, almacenes, transporte, comercio electrónico, cadena de suministro.",
		pensumLink: "https://unapec.edu.do/pensum/TS-L360",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$34,000 – RD$44,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Deportiva, Crédito Educativo.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
	"TS-TH": {
		category: "tecnico_superior",
		idealProfile:
			"Interés por el turismo, la hotelería, el servicio al cliente y la gestión de operaciones turísticas.",
		workAreas:
			"Hoteles, agencias de viajes, tour operadores, aerolíneas, destinos turísticos, parques temáticos.",
		pensumLink: "https://unapec.edu.do/pensum/TS-TH",
		admission: [
			"Formulario de admisión completado",
			"Copia de cédula o acta de nacimiento",
			"Certificado oficial de bachillerato",
			"Prueba de Orientación y Medición Académica (POMA)",
		],
		cost: "RD$35,000 – RD$45,000 por cuatrimestre (aproximado)",
		scholarships:
			"Beca Excelencia Académica, Beca Turismo, Beca Deportiva.",
		registrationDates: "Abril – Mayo · Agosto – Septiembre · Diciembre – Enero",
	},
}

export function getCareerInfo(code) {
	return careerData[code] || null
}

export function getAllCareerData() {
	return careerData
}

export const TEST_QUESTIONS = [
	{
		question: "¿Qué tipo de problemas te gusta resolver?",
		answers: [
			{ text: "Problemas técnicos, de lógica o sistemas", scores: { tecnologia: 3, ingenieria: 2 } },
			{ text: "Problemas de organización o gestión de equipos", scores: { administracion: 3, marketing: 2 } },
			{ text: "Problemas creativos o de comunicación visual", scores: { comunicacion: 3, marketing: 2 } },
			{ text: "Problemas financieros o de números", scores: { finanzas: 3, tecnologia: 1 } },
			{ text: "Problemas sociales o de relaciones humanas", scores: { sociales: 3, educacion: 2 } },
		],
	},
	{
		question: "¿En qué ambiente te imaginas trabajando?",
		answers: [
			{ text: "En una oficina moderna con computadoras", scores: { tecnologia: 3, finanzas: 2, administracion: 2 } },
			{ text: "En un estudio creativo o de diseño", scores: { comunicacion: 3, marketing: 2 } },
			{ text: "En un tribunal, despacho o institución pública", scores: { derecho: 3, sociales: 1 } },
			{ text: "En un hotel, restaurante o destino turístico", scores: { turismo: 3, administracion: 1 } },
			{ text: "En un aula, laboratorio o centro educativo", scores: { educacion: 3, sociales: 1 } },
		],
	},
	{
		question: "¿Qué materias disfrutaste más en el colegio?",
		answers: [
			{ text: "Matemáticas, física o química", scores: { ingenieria: 3, tecnologia: 2, finanzas: 2 } },
			{ text: "Literatura, arte o historia", scores: { comunicacion: 3, educacion: 2, derecho: 1 } },
			{ text: "Idiomas o ciencias sociales", scores: { educacion: 3, derecho: 2, turismo: 2 } },
			{ text: "Contabilidad, economía o informática", scores: { finanzas: 3, tecnologia: 2, administracion: 2 } },
			{ text: "Educación física, emprendimiento o talleres", scores: { administracion: 2, turismo: 2, marketing: 2 } },
		],
	},
	{
		question: "¿Qué tipo de actividades prefieres?",
		answers: [
			{ text: "Construir, reparar o diseñar cosas", scores: { ingenieria: 3, tecnologia: 2 } },
			{ text: "Escribir, dibujar o producir contenido", scores: { comunicacion: 3, marketing: 2 } },
			{ text: "Organizar, planificar o liderar proyectos", scores: { administracion: 3, derecho: 2 } },
			{ text: "Enseñar, ayudar o aconsejar a otros", scores: { educacion: 3, sociales: 2 } },
			{ text: "Calcular, analizar datos o hacer presupuestos", scores: { finanzas: 3, tecnologia: 1 } },
		],
	},
	{
		question: "¿Cómo te describirían tus amigos?",
		answers: [
			{ text: "Curioso, analítico y detallista", scores: { tecnologia: 3, finanzas: 2, ingenieria: 1 } },
			{ text: "Creativo, expresivo y original", scores: { comunicacion: 3, marketing: 2 } },
			{ text: "Líder, organizado y persuasivo", scores: { administracion: 3, derecho: 2, marketing: 1 } },
			{ text: "Empático, paciente y solidario", scores: { educacion: 3, sociales: 2, turismo: 1 } },
			{ text: "Aventurero, sociable y con energía", scores: { turismo: 3, marketing: 1, comunicacion: 1 } },
		],
	},
	{
		question: "¿Qué prefieres: crear o analizar?",
		answers: [
			{ text: "Crear productos, software o soluciones técnicas", scores: { tecnologia: 3, ingenieria: 3 } },
			{ text: "Crear contenido visual, arte o campañas", scores: { comunicacion: 3, marketing: 2 } },
			{ text: "Analizar leyes, casos o argumentos", scores: { derecho: 3, administracion: 1 } },
			{ text: "Analizar datos, tendencias o números", scores: { finanzas: 3, tecnologia: 1 } },
			{ text: "Crear experiencias, eventos o servicios", scores: { turismo: 3, marketing: 2 } },
		],
	},
	{
		question: "¿Con qué herramientas te sientes más cómodo?",
		answers: [
			{ text: "Computadoras, software y lenguajes de programación", scores: { tecnologia: 3, ingenieria: 2 } },
			{ text: "Cámaras, programas de diseño o redes sociales", scores: { comunicacion: 3, marketing: 2 } },
			{ text: "Libros, leyes, documentos y argumentos", scores: { derecho: 3, sociales: 2 } },
			{ text: "Calculadoras, hojas de cálculo y presupuestos", scores: { finanzas: 3, administracion: 2 } },
			{ text: "Pizarras, material didáctico o plataformas de aprendizaje", scores: { educacion: 3, sociales: 1 } },
		],
	},
	{
		question: "¿Qué te motiva más en un trabajo?",
		answers: [
			{ text: "Resolver desafíos técnicos complejos", scores: { ingenieria: 3, tecnologia: 2 } },
			{ text: "Ayudar a otros a mejorar o aprender", scores: { educacion: 3, sociales: 2 } },
			{ text: "Lograr estabilidad financiera y crecimiento profesional", scores: { finanzas: 3, administracion: 2 } },
			{ text: "Ser reconocido por tu creatividad y originalidad", scores: { comunicacion: 3, marketing: 2 } },
			{ text: "Viajar, conocer culturas nuevas y trabajar con personas", scores: { turismo: 3, derecho: 1 } },
		],
	},
	{
		question: "¿Cómo prefieres trabajar?",
		answers: [
			{ text: "De forma autónoma, resolviendo problemas por mi cuenta", scores: { tecnologia: 3, ingenieria: 1 } },
			{ text: "En equipo, liderando o coordinando personas", scores: { administracion: 3, marketing: 2, derecho: 1 } },
			{ text: "Mezclando trabajo individual con colaboración puntual", scores: { comunicacion: 2, finanzas: 2, educacion: 2 } },
			{ text: "Con mucha interacción social y atención al público", scores: { turismo: 3, sociales: 2 } },
			{ text: "En un entorno estructurado, con normas y procesos claros", scores: { derecho: 2, finanzas: 2, administracion: 1 } },
		],
	},
	{
		question: "¿Qué impacto quieres tener?",
		answers: [
			{ text: "Construir el futuro con tecnología e innovación", scores: { tecnologia: 3, ingenieria: 3 } },
			{ text: "Comunicar ideas que transformen la sociedad", scores: { comunicacion: 3, derecho: 1, sociales: 1 } },
			{ text: "Formar a las próximas generaciones", scores: { educacion: 3, sociales: 2 } },
			{ text: "Impulsar empresas y la economía del país", scores: { administracion: 3, finanzas: 2, marketing: 1 } },
			{ text: "Mostrar la cultura dominicana al mundo", scores: { turismo: 3, comunicacion: 1 } },
		],
	},
]

export const CATEGORY_CAREERS = {
	tecnologia: ["ISC", "ISO", "TS-ADS"],
	ingenieria: ["INE", "IEL", "IND"],
	administracion: ["ADM", "GOL", "TS-ECI", "TS-L360"],
	finanzas: ["CON", "FIN", "ECO", "TS-CE", "TS-FIN"],
	comunicacion: ["CIN", "CDG", "CPM", "DIN", "DIG", "PUB", "TS-APA", "TS-DAD", "TS-DPE"],
	derecho: ["DER", "TS-CRI", "TS-GL"],
	educacion: ["LMF", "LEA", "LEF", "LEI", "LEL", "LME"],
	turismo: ["ATH", "GAS", "TS-GSA", "TS-TH", "TS-GE"],
	sociales: ["PSO"],
	marketing: ["MER", "NIN", "TS-EM"],
}
