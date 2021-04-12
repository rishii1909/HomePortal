import json 
from django.contrib import admin
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields
from .models import Rental, Project, referred_pre_construction, pre_construction, area_alerts, home_evaluation

class RentalAdmin(admin.ModelAdmin):
    formfield_overrides = {
        map_fields.AddressField: {'widget': map_widgets.GoogleMapsAddressWidget},
}

def make_hidden(modeladmin, request, queryset):
    queryset.update(project_visibility=1)
    make_hidden.short_description = "Make these projects hidden"

def make_visible(modeladmin, request, queryset):
    queryset.update(project_visibility=0)
    make_visible.short_description = "Make these projects visible"

class ProjectAdmin(admin.ModelAdmin):
    list_filter = ('pub_date','project_location', 'project_visibility')
    list_display = ('project_name', 'project_location','pub_date','project_visibility' )
    fields = ['project_name', 'project_location', 'project_cover','starts_at' ,'project_visibility']
    actions = [make_hidden,make_visible]

admin.site.register(Project, ProjectAdmin)
admin.site.register(pre_construction)
admin.site.register(referred_pre_construction)
admin.site.register(area_alerts)
admin.site.register(home_evaluation)
admin.site.register(Rental, RentalAdmin)
