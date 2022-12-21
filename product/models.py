from django.db import models
from uuid import uuid4
from django.core.validators import MinValueValidator
from PIL import Image


class Product(models.Model):
    title = models.CharField(max_length=255)
    unit_price = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        validators=[MinValueValidator(1)]
    )
    image = models.ImageField(upload_to='images')
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.title

    def save(self, **kwargs):
        super().save()
        img = Image.open(self.image.path)
        if img.height > 100 or img.width > 150:
            output_size = (100, 150)
            img.thumbnail(output_size)
            img.save(self.image.path)
