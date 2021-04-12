from django.db import models
from django.contrib import admin
from django import forms
from django.utils.text import slugify
from django_google_maps import fields as map_fields
from django.core.validators import MaxValueValidator

class Searchform(forms.Form):
    given_string = forms.CharField

class Rental(models.Model):
    address = map_fields.AddressField(max_length=200)
    geolocation = map_fields.GeoLocationField(max_length=100)

class Project(models.Model):
    project_name = models.CharField("Project name",max_length=100)
    project_location = models.CharField("Project location",max_length=100)
    project_cover = models.ImageField(upload_to='Covers', height_field=None, width_field=None, max_length=100)
    pub_date = models.DateTimeField('Publish date', auto_now_add=True)
    slug = models.SlugField(max_length=255, unique=True)
    project_visibility = models.BooleanField("Hidden project", editable='true')
    starts_at = models.IntegerField("Starting price range" )
    def project_path(self):
        rel_url = 'landing_pages/' + self.slug + '/index.html'
        return rel_url

    def __str__(self):
        return self.project_name
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.project_name)
        super(Project, self).save(*args, **kwargs)

# class project_status(models.Model):
#     assoc_project = models.ForeignKey("app.Project", verbose_name=("Associated project"), on_delete=models.CASCADE)
        

class pre_construction(models.Model):
    firstname = models.CharField('firstname', max_length=100)
    lastname = models.CharField('lastname', max_length=100)
    email = models.EmailField('email',max_length=100)
    contact = models.CharField("contact",max_length=15)
    property_type = models.CharField('property type', max_length=100)
    price_range = models.CharField('price range', max_length=100)
    time_frame = models.CharField('time frame', max_length=100)
    is_realtor = models.CharField('is a realtor',max_length=10)
    works_with_realtor = models.CharField('works with a realtor',max_length=10)

    def __str__(self):
        return self.firstname + ' ' + self.lastname
    class Meta:
        verbose_name = "| Pre construction - response"


class referred_pre_construction(models.Model):
    first_name = models.CharField('firstname', max_length=100)
    primary_email = models.EmailField('email',max_length=100)
    primary_number = models.CharField("contact",max_length=15)
    desired_location = models.CharField("contact",max_length=15)
    desired_property_type = models.CharField('property type', max_length=100)
    desired_price_range = models.CharField('price range', max_length=100)
    timeline_to_purchase = models.CharField('time frame', max_length=100)
    are_you_a_realtor = models.CharField('is a realtor',max_length=10)
    are_you_working_with_a_realtor = models.CharField('works with a realtor',max_length=50)
    referrer_project = models.CharField('Form submitted from',max_length=50)

    def __str__(self):
        return self.first_name
    class Meta:
        verbose_name = "| Project referrals : Pre construction response"

class home_evaluation(models.Model):
    firstname = models.CharField('firstname', max_length=100)
    lastname = models.CharField('lastname', max_length=100)
    email = models.EmailField('email',max_length=100)
    address = models.CharField("address",max_length=150)
    contact = models.CharField("contact",max_length=15)
    time_frame = models.CharField('time frame', max_length=100)
    property_type = models.CharField('property type', max_length=100)
    property_size = models.CharField('property size', max_length=100)
    property_age = models.CharField('property age', max_length=100)
    lawsuit = models.CharField('lawsuit', max_length=100)
    bedrooms = models.CharField('bedrooms',max_length=2)
    bathrooms = models.CharField('bathrooms', max_length=2)
    basement = models.CharField('basement type', max_length=100)
    garage = models.CharField('garage capacity', max_length=100)
    message = models.CharField('message', max_length = 400)
    
    def __str__(self):
        return self.firstname + ' ' + self.lastname
    class Meta:
        verbose_name = "| Home Evaluation - response"



class area_alerts(models.Model):
    firstname = models.CharField('firstname', max_length=100)
    lastname = models.CharField('lastname', max_length=100)
    email = models.EmailField('email',max_length=100)
    contact = models.CharField("contact",max_length=15)
    address = models.CharField("address",max_length=150)

    def __str__(self):
        return self.firstname + ' ' + self.lastname
    class Meta:
        verbose_name = "| Area alerts - response"


    


    

