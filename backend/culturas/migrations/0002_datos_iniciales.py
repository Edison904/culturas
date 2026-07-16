from django.db import migrations


PAISES = [
    {
        "clave": "japon",
        "nombre": "Japón",
        "glifo": "日本",
        "acento": "#b8352b",
        "lema": "La belleza de lo efímero",
        "intro": (
            "Del silencio de los jardines zen al neón de Tokio: una cultura que encontró la "
            "perfección en el detalle y la calma en lo pasajero."
        ),
        "cultura_titulo": "Wabi-sabi: la elegancia de lo imperfecto",
        "cultura_texto": (
            "La ceremonia del té, la caligrafía shodō, el kimono y el hanami — contemplar los "
            "cerezos en flor — comparten una misma raíz: aceptar el paso del tiempo como parte "
            "de la belleza. Japón cultiva rituales donde cada gesto tiene siglos de intención."
        ),
        "paisajes_titulo": "Del volcán sagrado a los templos de Kioto",
        "orden": 1,
        "comidas": [
            {
                "glifo": "鮨",
                "nombre": "Sushi y sashimi",
                "texto": "El arte de lo crudo: arroz avinagrado, pescado de temporada y décadas de disciplina detrás de cada corte.",
            },
            {
                "glifo": "麺",
                "nombre": "Ramen",
                "texto": "Caldo cocido por horas, fideos al dente y un huevo marinado: la comida reconfortante que define a cada región.",
            },
            {
                "glifo": "膳",
                "nombre": "Kaiseki",
                "texto": "La alta cocina estacional de Kioto: pequeños platos que celebran el ingrediente exacto en su momento exacto.",
            },
        ],
        "paisajes": [
            {
                "titulo": "Monte Fuji",
                "ubicacion": "Fujiyoshida, Prefectura de Yamanashi",
                "epoca": "Abril (sakura) y noviembre (cielos despejados)",
                "descripcion": (
                    "El volcán sagrado de Japón (3.776 m) visto desde la pagoda Chureito, "
                    "rodeado de cerezos en flor. Es la postal más icónica del país y lugar de "
                    "peregrinaje desde hace siglos."
                ),
                "imagen": "paisajes/monte-fuji.png",
            },
            {
                "titulo": "Kiyomizu-dera",
                "ubicacion": "Higashiyama, Kioto",
                "epoca": "Primavera y otoño (momiji)",
                "descripcion": (
                    "Templo budista fundado en el año 778, Patrimonio de la Humanidad. Su "
                    "puerta Niōmon bermellón recibe a visitantes en kimono que suben desde las "
                    "calles históricas de Gion."
                ),
                "imagen": "paisajes/kiyomizu-dera.png",
            },
        ],
    },
    {
        "clave": "corea",
        "nombre": "Corea del Sur",
        "glifo": "한국",
        "acento": "#e5b567",
        "lema": "Tradición que late en presente",
        "intro": (
            "Palacios de la dinastía Joseon junto a rascacielos, hanbok junto al K-pop: Corea "
            "vive su historia sin dejar de inventar el futuro."
        ),
        "cultura_titulo": "Jeong: el lazo que lo une todo",
        "cultura_texto": (
            "El hanbok de seda, la caligrafía hangul, el darye (ceremonia del té) y la música "
            "tradicional pansori conviven con la cultura pop más influyente de Asia. En el "
            "centro está el jeong: ese afecto profundo y difícil de traducir que une a las "
            "personas."
        ),
        "paisajes_titulo": "De la torre de Seúl al palacio real",
        "orden": 2,
        "comidas": [
            {
                "glifo": "菜",
                "nombre": "Kimchi",
                "texto": "Col fermentada con gochugaru: el alma de la mesa coreana, presente en cada comida desde hace más de mil años.",
            },
            {
                "glifo": "飯",
                "nombre": "Bibimbap",
                "texto": "Arroz, vegetales, huevo y gochujang mezclados en un cuenco caliente: equilibrio y color en un solo plato.",
            },
            {
                "glifo": "宴",
                "nombre": "Hanjeongsik",
                "texto": "El banquete real: decenas de banchan que convierten la mesa en un paisaje de sabores compartidos.",
            },
        ],
        "paisajes": [
            {
                "titulo": "Torre Namsan",
                "ubicacion": "Monte Namsan, Seúl",
                "epoca": "Abril, cuando florecen los cerezos",
                "descripcion": (
                    "El mirador más querido de Seúl (236 m sobre el monte Namsan). En "
                    "primavera, los cerezos del parque la enmarcan en rosa; de noche, sus "
                    "candados del amor brillan sobre la ciudad."
                ),
                "imagen": "paisajes/torre-namsan.png",
            },
            {
                "titulo": "Gyeongbokgung",
                "ubicacion": "Jongno-gu, Seúl",
                "epoca": "Amanecer, todo el año; ceremonia de guardia a las 10:00",
                "descripcion": (
                    "El gran palacio de la dinastía Joseon (1395). Su salón del trono "
                    "Geunjeongjeon, con techos dancheong de madera pintada, se alza frente al "
                    "monte Bugaksan."
                ),
                "imagen": "paisajes/gyeongbokgung.png",
            },
        ],
    },
    {
        "clave": "chile",
        "nombre": "Chile",
        "glifo": "CL",
        "acento": "#7ea8c4",
        "lema": "Del desierto al fin del mundo",
        "intro": (
            "Un país largo y angosto que guarda el desierto más árido del planeta, viñedos "
            "infinitos y las torres de granito más famosas de la Patagonia."
        ),
        "cultura_titulo": "La tierra de poetas y de fuego",
        "cultura_texto": (
            "Neruda y Mistral, la cueca y el folclor andino, la herencia mapuche y las "
            "tradiciones del campo: la cultura chilena nace del encuentro entre la cordillera "
            "y el mar, entre pueblos originarios y el mundo criollo."
        ),
        "paisajes_titulo": "Torres del Paine y los extremos del sur",
        "orden": 3,
        "comidas": [
            {
                "glifo": "E",
                "nombre": "Empanada de pino",
                "texto": "Masa dorada al horno rellena de carne, cebolla, huevo y aceituna: el sabor de todo 18 de septiembre.",
            },
            {
                "glifo": "A",
                "nombre": "Asado y curanto",
                "texto": "Del asado patagónico al curanto chilote cocido bajo tierra: el fuego como rito de encuentro.",
            },
            {
                "glifo": "V",
                "nombre": "Vino de los valles",
                "texto": "Carmenere rescatado del olvido y valles como Colchagua o Maipo entre los mejores del mundo vitivinícola.",
            },
        ],
        "paisajes": [
            {
                "titulo": "Torres del Paine",
                "ubicacion": "Región de Magallanes, Patagonia",
                "epoca": "Noviembre a marzo (verano austral)",
                "descripcion": (
                    "Tres torres de granito de casi 3.000 m esculpidas por glaciares, corazón "
                    "del parque nacional más famoso de la Patagonia y Reserva de la Biosfera de "
                    "la UNESCO."
                ),
                "imagen": None,
            },
            {
                "titulo": "Desierto de Atacama",
                "ubicacion": "Región de Antofagasta, norte de Chile",
                "epoca": "Todo el año; cielos estrellados incomparables",
                "descripcion": (
                    "El desierto más árido del mundo: géiseres del Tatio, el Valle de la Luna "
                    "y los cielos más limpios del planeta, hogar de los grandes observatorios "
                    "astronómicos."
                ),
                "imagen": None,
            },
        ],
    },
]


def cargar_datos(apps, schema_editor):
    Pais = apps.get_model("culturas", "Pais")
    Comida = apps.get_model("culturas", "Comida")
    Paisaje = apps.get_model("culturas", "Paisaje")

    for datos_pais in PAISES:
        datos_pais = dict(datos_pais)
        comidas = datos_pais.pop("comidas")
        paisajes = datos_pais.pop("paisajes")
        pais = Pais.objects.create(**datos_pais)

        for orden, datos_comida in enumerate(comidas):
            Comida.objects.create(pais=pais, orden=orden, **datos_comida)

        for orden, datos_paisaje in enumerate(paisajes):
            Paisaje.objects.create(pais=pais, orden=orden, **datos_paisaje)


def eliminar_datos(apps, schema_editor):
    Pais = apps.get_model("culturas", "Pais")
    Pais.objects.filter(clave__in=[p["clave"] for p in PAISES]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("culturas", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(cargar_datos, eliminar_datos),
    ]
