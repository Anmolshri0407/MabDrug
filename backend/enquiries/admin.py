from django.contrib import admin

from .models import Enquiry, ProductCategory, Product


# =========================================================
# ENQUIRY ADMIN
# =========================================================

@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "name",
        "email",
        "company",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "company",
        "message",
    )

    ordering = (
        "-created_at",
    )

    list_per_page = 20

    fields = (
        "name",
        "email",
        "company",
        "message",
        "status",
        "created_at",
    )

    readonly_fields = (
        "created_at",
    )


# =========================================================
# PRODUCT CATEGORY ADMIN
# =========================================================

@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "title",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_active",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
    )

    ordering = (
        "id",
    )

    list_per_page = 20

    fields = (
        "title",
        "description",
        "is_active",
        "created_at",
    )

    readonly_fields = (
        "created_at",
    )


# =========================================================
# PRODUCT ADMIN
# =========================================================

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "name",
        "category",
        "is_active",
        "created_at",
    )

    list_filter = (
        "category",
        "is_active",
        "created_at",
    )

    search_fields = (
        "name",
        "description",
        "composition",
        "uses",
    )

    ordering = (
        "id",
    )

    list_per_page = 20

    fields = (
        "category",
        "image",
        "name",
        "description",
        "composition",
        "uses",
        "is_active",
        "created_at",
    )

    readonly_fields = (
        "created_at",
    )