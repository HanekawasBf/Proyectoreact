from django.contrib import admin
from .models import Genero, Anime


class AnimeAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'genero', 'anio_estreno', 'promedio')


admin.site.register(Genero)
admin.site.register(Anime, AnimeAdmin)