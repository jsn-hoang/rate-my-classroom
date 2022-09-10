from django.db import models

# Create your models here.
class Classroom(models.Model):
    name = models.CharField(max_length=120)
    def __str__(self):
        return self.name
    
class Review(models.Model):
    class RateInt(models.IntegerChoices):
        ONE = 1
        TWO = 2
        THREE = 3
        FOUR = 4
        FIVE = 5
    title = models.CharField(max_length=120)
    description = models.TextField()
    rating = models.IntegerField(choices=RateInt.choices)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
