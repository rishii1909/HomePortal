from django.core.serializers import serialize
from django.views.generic import DetailView
from django.utils.text import slugify
from django.urls import reverse
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django import forms
from .models import Project, Searchform, pre_construction, area_alerts, home_evaluation
from .forms import fetch_referred_preconst,fetch_preconst, fetch_arealerts, fetch_home_evaluation
from .dicts import pre_construction_, home_evaluation_
import json
from django.contrib import messages

# import bleach

def otherpage(request):
    return render(request, 'otherpage.html')

def preconst(request):
    return render(request, 'otherpage.html')

def fetch_few_projects():
    return Project.objects.exclude(project_visibility = 1).order_by('pub_date')[:18]

def index(request):
    context = {'latest_projects_list': fetch_few_projects}
    return render(request, 'index.html', context)
    

def projects(request):
    if request.method == 'GET':
        
        context = {'latest_projects_list': fetch_few_projects}
        return render(request, 'projects.html', context)

    elif request.method == 'POST':
        form = Searchform(request.POST)
        if form.is_valid():
            # search_param = bleach.clean(request.POST['searchme'])
            search_param = request.POST['searchme']
            if search_param:
                projects_list = Project.objects.filter(project_name__icontains=search_param) | Project.objects.filter(project_location__icontains=search_param)
                
                if projects_list:
                    context = {'projects_list': projects_list, 'param' : search_param}
                else:
                    context = {'latest_projects_list': fetch_few_projects, 'param' : search_param}
                
                return render(request, 'projects.html', context)

    return render(request, 'projects.html')


def pre_construction(request):
    if request.method == 'POST':
        insane = fetch_preconst(request.POST)
        if insane.is_valid():
            sane = insane.cleaned_data
            for ref in {'property_type', 'price_range', 'time_frame', 'is_realtor', 'works_with_realtor'}:
                sane[ref] = pre_construction_[ref].get(sane[ref])            
            el = fetch_preconst(sane)
            context = {'latest_projects_list': fetch_few_projects}            
            if el.save():
                messages.success(request, True)
                return HttpResponseRedirect('/')
            else:
                messages.warning(request, True)
                return HttpResponseRedirect('/')
                
        else:
            messages.error(request, True)
            return HttpResponseRedirect('/pre_construction')

    elif request.method == 'GET':
        return render(request, 'pre_construction.html')


def referred_pre_construction(request):
    if request.method == 'POST':
        insane = fetch_referred_preconst(request.POST)
        if insane.is_valid():
            sane = insane.cleaned_data          
            el = fetch_referred_preconst(sane)
            if el.save():
                messages.success(request, True)
                return HttpResponseRedirect('/')
            else:
                messages.warning(request, True)
                return HttpResponseRedirect('/')
        else:
            messages.error(request, True)
            return HttpResponseRedirect('/')
            # return HttpResponseRedirect(request.path_info)

    elif request.method == 'GET':
        return render(request, 'pre_construction.html')

def home_evaluation(request):
    if request.method == 'POST':
        insane = fetch_home_evaluation(request.POST)
        if insane.is_valid():
            sane = insane.cleaned_data
            el = fetch_home_evaluation(sane)
            if el.save():
                messages.success(request, True)
                return HttpResponseRedirect('/')
            else:
                messages.warning(request, True)
                return HttpResponseRedirect('/')                
        else:
            messages.error(request, True)
            return HttpResponseRedirect('/home_evaluation')

    elif request.method == 'GET':
        return render(request, 'home_evaluation.html')


def area_alerts(request):
    if request.method == 'POST':
        insane = fetch_arealerts(request.POST)
        if insane.is_valid():
            sane = insane.cleaned_data        
            el = fetch_arealerts(sane)
            context = {'latest_projects_list': fetch_few_projects}            
            if el.save():
                messages.success(request, True)
                return HttpResponseRedirect('/')
            else:
                messages.warning(request, True)
                return HttpResponseRedirect('/')
        else:
            messages.error(request, True)
            return HttpResponseRedirect('/area_alerts')

    elif request.method == 'GET':
        return render(request, 'area_alerts.html')



def about(request):
    return render(request, 'about.html')
    
def unoproject(request):
    obj = Project.objects.all()[:1]
    json_data = serialize("json", obj)
    return render(request,'pre.html',{'json' : json_data})

class ProjectDetailView(DetailView):
    model = Project
    template_name = 'landing_page.html'
