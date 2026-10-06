from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Anime
from .serializers import AnimeSerializer


@api_view(['GET'])
def lista_animes(request):
    animes = Anime.objects.all()
    serializer = AnimeSerializer(animes, many=True)
    return Response(serializer.data)