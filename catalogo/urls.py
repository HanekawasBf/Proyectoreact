from django.urls import path
from . import views

urlpatterns = [
    path('animes/', views.lista_animes),
    path('animes/<int:anime_id>/', views.detalle_anime),
    path('generos/', views.lista_generos),
]