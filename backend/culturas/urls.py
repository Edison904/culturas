from django.urls import path
from rest_framework.routers import DefaultRouter

from .chat import ChatView
from .views import PaisViewSet

router = DefaultRouter()
router.register("paises", PaisViewSet, basename="pais")

urlpatterns = router.urls + [
    path("chat/", ChatView.as_view(), name="chat"),
]
