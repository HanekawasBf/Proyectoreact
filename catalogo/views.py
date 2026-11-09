from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Anime, Genero
from .serializers import AnimeSerializer, AnimeDetalleSerializer


@api_view(['GET'])
def lista_animes(request):
    animes = Anime.objects.all()
    serializer = AnimeSerializer(animes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def detalle_anime(request, anime_id):
    anime = get_object_or_404(Anime, id=anime_id)
    serializer = AnimeDetalleSerializer(anime)
    return Response(serializer.data)


@api_view(['GET'])
def lista_generos(request):
    generos = Genero.objects.all().order_by('nombre')
    nombres = [g.nombre for g in generos]
    return Response(nombres)