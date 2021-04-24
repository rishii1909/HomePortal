from django.forms import ModelForm
from .models import referred_pre_construction,pre_construction,area_alerts,home_evaluation, subscription

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

    