import json 
from django.contrib import admin
from django.template.loader import get_template
from django.utils.translation import gettext as _
from django.shortcuts import get_object_or_404
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields
from .models import Rental, Project, referred_pre_construction, pre_construction, area_alerts, home_evaluation, subscription, express_image,express_project,express_highlight
from .forms import Exp_projectAdminForm

class RentalAdmin(admin.ModelAdmin):
    formfield_overrides = {
        map_fields.AddressField: {'widget': map_widgets.GoogleMapsAddressWidget},
}

#Custom bulk functions start.

def make_hidden(modeladmin, request, queryset):
    queryset.update(project_visibility=1)
    make_hidden.short_description = "Make these projects hidden"


def make_visible(modeladmin, request, queryset):
    queryset.update(project_visibility=0)
    make_visible.short_description = "Make these projects visible"

# Custom bulk functions end.

# Custom admin interface section starts.

class ProjectAdmin(admin.ModelAdmin):
    list_filter = ('pub_date', 'project_visibility','starts_at','project_location')
    list_display = ('project_name', 'project_location','pub_date','project_visibility' )
    fields = ['project_name', 'project_location', 'project_cover','starts_at' ,'project_visibility']
    actions = [make_hidden,make_visible]

# Custom admin interface section ends.


class ShowPhotoInline(admin.TabularInline):
    model = express_image
    fields = ("showphoto_thumbnail",)
    readonly_fields = ("showphoto_thumbnail",)
    max_num = 0
    def showphoto_thumbnail(self, instance):
    #    """A (pseudo)field that returns an image thumbnail for a show photo."""
       tpl = get_template("app/admin/show_thumbnail.html")
       return tpl.render({"photo": instance.image})
    
    showphoto_thumbnail.short_description = _("Image")

class express_highlightInline(admin.TabularInline):
    '''Tabular Inline View for express_highlight '''
    model = express_highlight  
    min_num = 2
    max_num = 20
    extra = 1

@admin.register(express_project)
class ShowAdmin(admin.ModelAdmin):
    form = Exp_projectAdminForm
    inlines = [express_highlightInline,ShowPhotoInline]

    def save_related(self, request, form, formsets, change):
        super().save_related(request, form, formsets, change)
        form.save_photos(form.instance)

# admin.site.register(express_image, ImageAdmin)
# admin.site.register(express_project, express_projectAdmin)

admin.site.register(Project, ProjectAdmin)
admin.site.register(pre_construction)
admin.site.register(referred_pre_construction)
admin.site.register(area_alerts)
admin.site.register(home_evaluation)
admin.site.register(Rental, RentalAdmin)
admin.site.register(subscription)
