from django.urls import path
from . import views
from .views import ProjectDetailView, ExpressDetailView

urlpatterns = [
    path('',views.index, name='index'),
    path('index',views.index, name='index'),
    path('projects',views.projects, name='projects'),
    path('show_me/<slug>',ProjectDetailView.as_view(), name='show_me'),
    path('show_project/<slug>',ExpressDetailView.as_view(), name='show_project'),
    path('pre_construction',views.pre_construction, name='pre_construction_form'),
    path('referred_pre_construction',views.referred_pre_construction, name='referred_pre_construction_form'),
    path('subscribe',views.subscribe, name='subscribe'),
    path('area_alerts',views.area_alerts, name='area_alerts_form'),
    path('home_evaluation',views.home_evaluation, name='home_evaluation_form'),
    path('unoproject',views.unoproject, name='uno'),
    path('about',views.about, name="about")
]
