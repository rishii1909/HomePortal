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
    project_type = models.CharField("Project type", max_length=10, default='manual', editable=False)
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


class express_project(models.Model):
    project_name = models.CharField("Project name",max_length=100)
    project_location = models.CharField("Project location",max_length=100)
    project_cover = models.ImageField(upload_to='Covers', height_field=None, width_field=None, max_length=None)
    project_banner = models.ImageField( 'Landing image',upload_to='landing_images', height_field=None, width_field=None, max_length=None)
    project_co_banner = models.ImageField( 'Sidebar image',upload_to='landing_images', height_field=None, width_field=None, max_length=None)
    pub_date = models.DateTimeField('Publish date', auto_now_add=True)
    project_type = models.CharField("Project type", max_length=10, default='auto', editable=False)
    slug = models.SlugField(max_length=255, unique=True)
    project_visibility = models.BooleanField("Hidden project", editable='true')
    starts_at = models.IntegerField("Starting price range")
    completion_date = models.DateField('Anticipated completion date', blank=True)
    dep_struct = models.TextField('Deposit structure', max_length=200)
    project_desc = models.TextField('Project description', max_length=2000, blank=True)
    property_type = models.CharField('Property type', max_length=50)
    uni_size_lower = models.IntegerField("Unit size Range - min ")
    uni_size_upper = models.IntegerField("Unit size Range - max ")
    

    def __str__(self):
        return self.project_name
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.project_name)
        super(express_project, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Express project"
        verbose_name_plural = "Express projects"


class express_image(models.Model):
    image = models.FileField('File', upload_to='serve_images', null=True)
    project = models.ForeignKey('express_project', related_name='gallery', blank=True, null=True, default=None, on_delete=models.CASCADE)

class express_highlight(models.Model):
    feature = models.CharField("Highlight", max_length=500)
    project = models.ForeignKey('express_project', related_name='highlight', blank=True, null=True, default=None, on_delete=models.CASCADE)






class pre_construction(models.Model):
    firstname = models.CharField('firstname', max_length=100)
    lastname = models.CharField('lastname', max_length=100)
    email = models.EmailField('email',max_length=100)
    contact = models.CharField("contact",max_length=15)
    property_type = models.CharField('property type', max_length=100,blank=True)
    price_range = models.CharField('price range', max_length=100,blank=True)
    time_frame = models.CharField('time frame', max_length=100,blank=True)
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
    desired_location = models.CharField("contact",max_length=15, blank=True)
    desired_property_type = models.CharField('property type', max_length=100, blank=True)
    desired_price_range = models.CharField('price range', max_length=100, blank=True)
    timeline_to_purchase = models.CharField('time frame', max_length=100, blank=True)
    are_you_a_realtor = models.CharField('is a realtor',max_length=10)
    are_you_working_with_a_realtor = models.CharField('works with a realtor',max_length=50)
    referrer_project = models.CharField('Form submitted from',max_length=50,blank=True)

    def __str__(self):
        return self.first_name
    class Meta:
        verbose_name = "| Project referrals : Pre construction response"

class home_evaluation(models.Model):
    firstname = models.CharField('firstname', max_length=100)
    lastname = models.CharField('lastname', max_length=100)
    email = models.EmailField('email',max_length=100)
    address = models.CharField("address",max_length=150,blank=True)
    contact = models.CharField("contact",max_length=15)
    time_frame = models.CharField('time frame', max_length=100,blank=True)
    property_type = models.CharField('property type', max_length=100,blank=True)
    property_size = models.CharField('property size', max_length=100,blank=True)
    property_age = models.CharField('property age', max_length=100,blank=True)
    lawsuit = models.CharField('lawsuit', max_length=100,blank=True)
    bedrooms = models.CharField('bedrooms',max_length=2,blank=True)
    bathrooms = models.CharField('bathrooms', max_length=2,blank=True)
    basement = models.CharField('basement type', max_length=100,blank=True)
    garage = models.CharField('garage capacity', max_length=100,blank=True)
    message = models.CharField('message', max_length = 400,blank=True)
    
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


class subscription(models.Model):
    name = models.CharField('firstname', max_length=100)
    contact = models.CharField("contact",max_length=15, blank=True)
    email = models.EmailField('email',max_length=100)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "| Subscription"



    

