from django.db import models


class Pais(models.Model):
    """Un país explorable en la landing (Japón, Corea del Sur, Chile, ...)."""

    clave = models.SlugField(unique=True, help_text="Identificador corto usado en la URL/pestaña, ej. 'japon'")
    nombre = models.CharField(max_length=100)
    glifo = models.CharField(max_length=10, help_text="Símbolo o iniciales mostradas junto al nombre")
    acento = models.CharField(max_length=7, help_text="Color de acento en formato hexadecimal, ej. #b8352b")
    lema = models.CharField(max_length=200)
    intro = models.TextField()
    cultura_titulo = models.CharField(max_length=200)
    cultura_texto = models.TextField()
    paisajes_titulo = models.CharField(max_length=200)
    orden = models.PositiveIntegerField(default=0, help_text="Orden de aparición en el navbar")

    class Meta:
        ordering = ["orden", "id"]

    def __str__(self):
        return self.nombre


class Comida(models.Model):
    pais = models.ForeignKey(Pais, related_name="comidas", on_delete=models.CASCADE)
    glifo = models.CharField(max_length=10)
    nombre = models.CharField(max_length=150)
    texto = models.TextField()
    orden = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["orden", "id"]

    def __str__(self):
        return f"{self.nombre} ({self.pais.nombre})"


class Paisaje(models.Model):
    pais = models.ForeignKey(Pais, related_name="paisajes", on_delete=models.CASCADE)
    titulo = models.CharField(max_length=150)
    ubicacion = models.CharField(max_length=200)
    epoca = models.CharField(max_length=200)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to="paisajes/", blank=True, null=True)
    orden = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["orden", "id"]

    def __str__(self):
        return f"{self.titulo} ({self.pais.nombre})"
