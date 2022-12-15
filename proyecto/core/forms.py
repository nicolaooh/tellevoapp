from .models import Contacto
from django.forms import ModelForm
from django import forms

class ContactoForms(ModelForm):
    class Meta:
        model = Contacto
        fields = ['rut','correoElectronico','nombreContacto','numeroTelefono','mensajeContacto']