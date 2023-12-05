from django.contrib import admin
from django.urls import path, include

from app.views import home_to_admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),
    path('', home_to_admin),
]
