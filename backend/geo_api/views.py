from django.http import JsonResponse
from .models import Location
import random

def random_location(request):
    locations = list(Location.objects.all())
    if not locations:
        # Fallback if database empty
        return JsonResponse({
            'name': 'No data yet',
            'image': '/media/locations/addis_ababa.jpg'
        })
    loc = random.choice(locations)
    return JsonResponse({
        'name': loc.name,
        'image': loc.image.url
    })
