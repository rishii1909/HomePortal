import requests, json

headers = {"X-System" : "The mighty Home Portal", "X-System-Key" : '0c5f1956a19332727b07e98840abecbf43218c'}
make_json = {"source" : "The mighty Home Portal", "system" : "fishi.mainbase", "type" : "General Enquiry, Registration", "message" : "Testing the API endpoints.", "person" : {"firstname" : "Rishi", "lastname" : "Lastname", "emails" : "fishi.mainbase@gmail.com", "phones" : "7249622769"}} 
json_data = json.dumps(make_json)
print(json_data)
r =requests.post('https://api.followupboss.com/v1/events', json_data, headers=headers)
print(r.status_code)




{% extends 'base.html' %}
{% load static %}

{% block title %} Area alerts {% endblock %}

{% block head_styles %}
<link rel="stylesheet" href="https://use.typekit.net/zbu8bgs.css">
<link href="{% static 'app/migrated_assets/uploads/theme/w4r_761_20210324024830_20210404232631_v6093410677.css' %}" rel="stylesheet" type="text/css" media="screen">

<style>
    .Aileron.Light{
        font-family: aileron, sans-serif;
        font-weight: 300;
        font-style: normal;
    }
</style>
{% endblock %}

{% block body %}
    <!-- {% include object.project_path %} -->
{% endblock body %}

{% block end_scripts %}

<script src="{% static 'app/migrated_assets/uploads/theme/w4r_761_min_v590289101116.js' %}"></script>
{% endblock end_scripts %}