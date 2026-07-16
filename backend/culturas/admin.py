from django.contrib import admin

from .models import Comida, Pais, Paisaje


class ComidaInline(admin.TabularInline):
    model = Comida
    extra = 1


class PaisajeInline(admin.TabularInline):
    model = Paisaje
    extra = 1


@admin.register(Pais)
class PaisAdmin(admin.ModelAdmin):
    list_display = ["nombre", "clave", "glifo", "acento", "orden"]
    prepopulated_fields = {"clave": ("nombre",)}
    inlines = [ComidaInline, PaisajeInline]


@admin.register(Comida)
class ComidaAdmin(admin.ModelAdmin):
    list_display = ["nombre", "pais", "orden"]
    list_filter = ["pais"]


@admin.register(Paisaje)
class PaisajeAdmin(admin.ModelAdmin):
    list_display = ["titulo", "pais", "ubicacion", "orden"]
    list_filter = ["pais"]
