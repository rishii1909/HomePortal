from django.urls import path
from . import views
from .views import ProjectDetailView

urlpatterns = [
    path('',views.index, name='index'),
    path('index',views.index, name='index'),
    path('projects',views.projects, name='projects'),
    path('show_me/<slug>',ProjectDetailView.as_view(), name='show_me'),
    # path('pre-construction',views.preconst, name='preconst'),
    # path('welcome_here/<slug>', ProjectDetailView.as_view(), name='welcome' ),
    path('pre_construction',views.pre_construction, name='pre_construction_form'),
    path('referred_pre_construction',views.referred_pre_construction, name='referred_pre_construction_form'),
    path('area_alerts',views.area_alerts, name='area_alerts_form'),
    path('home_evaluation',views.home_evaluation, name='home_evaluation_form'),
    path('unoproject',views.unoproject, name='uno'),
    path('about',views.about, name="about")
]
