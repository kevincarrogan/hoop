from django.http import JsonResponse
from django.views.generic import View

from .models import Place


class PlacesView(View):

    def _serialise_place_to_json(self, place):
        return {
            'buildingUnit': place.building_unit,
            'buildingName': place.building_name,
            'streetNumber': place.street_number,
            'streetName': place.street_name,
            'town': place.town,
            'postcode': place.postcode,
        }
    
    def get(self, request):
        places = []

        for place in Place.objects.all():
            places.append(self._serialise_place_to_json(place))

        return JsonResponse({
            'places': places,
        })
