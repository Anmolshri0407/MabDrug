from django.db import models


# =========================================================
# ENQUIRY
# =========================================================

class Enquiry(models.Model):

    STATUS_CHOICES = [
        ("new", "New"),
        ("contacted", "Contacted"),
        ("in_progress", "In Progress"),
        ("closed", "Closed"),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=150, blank=True)
    message = models.TextField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="new",
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# =========================================================
# PRODUCT CATEGORY
# =========================================================

class ProductCategory(models.Model):

    title = models.CharField(max_length=150)

    description = models.TextField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Product Category"
        verbose_name_plural = "Product Categories"

    def __str__(self):
        return self.title


# =========================================================
# PRODUCT
# =========================================================

class Product(models.Model):

    category = models.ForeignKey(
        ProductCategory,
        on_delete=models.CASCADE,
        related_name="products",
    )

    image = models.ImageField(
        upload_to="products/",
        blank=True,
        null=True,
    )

    name = models.CharField(
        max_length=200
    )

    description = models.TextField()

    composition = models.TextField()

    uses = models.TextField()

    is_active = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.name