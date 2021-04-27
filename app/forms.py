from django import forms
from django.forms import ModelForm
from django.core.validators import validate_image_file_extension
from django.utils.translation import gettext as _

from .models import express_image, express_project, referred_pre_construction, pre_construction, area_alerts, home_evaluation, subscription

#Admin form templates start

class Exp_projectAdminForm(forms.ModelForm):
    class Meta:
        model = express_project
        fields = (
                "project_name",
                "project_location",
                "project_cover",
                "project_banner",
                "project_co_banner",
                "project_visibility",
                "starts_at",
                "completion_date",
                "dep_struct",
                "property_type",
                "uni_size_lower",
                "uni_size_upper",
                "project_desc",
            )
    
    photos = forms.FileField(
        widget=forms.ClearableFileInput(attrs={"multiple": True}),
        label=_("Add Gallery Photos"),
        required=False,
    )

    def clean_photos(self):
        """Make sure only images can be uploaded."""
        for upload in self.files.getlist("photos"):
            validate_image_file_extension(upload)

    def save_photos(self, project):
        """Process each uploaded image."""
        for upload in self.files.getlist("photos"):
            photo = express_image(project=project, image=upload)
            photo.save()

#Admin form templates end

class fetch_preconst(ModelForm):
    class Meta:
        model = pre_construction
        fields = "__all__"

class fetch_referred_preconst(ModelForm):
    class Meta:
        model = referred_pre_construction
        fields = "__all__"

class fetch_arealerts(ModelForm):
    class Meta:
        model = area_alerts
        fields = "__all__"

class fetch_home_evaluation(ModelForm):
    class Meta:
        model = home_evaluation
        fields = "__all__"

class fetch_subscription(ModelForm):
    class Meta:
        model = subscription
        fields = "__all__"

    


