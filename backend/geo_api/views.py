from django.http import JsonResponse
import random

def random_location(request):
    locations = [
        {'name': 'Addis Ababa', 'image': '/media/locations/addis_ababa.jpg'},
        {'name': 'Lalibela', 'image': '/media/locations/lalibela.jpg'},
        {'name': 'Harar', 'image': '/media/locations/harar.jpg'},
    ]
    return JsonResponse(random.choice(locations))
