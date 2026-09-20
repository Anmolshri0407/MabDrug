from django.urls import path

from .views import (
    create_enquiry,
    product_categories,
    get_products,
)


urlpatterns = [

    path(
        "enquiries/",
        create_enquiry,
        name="create-enquiry"
    ),

    path(
        "categories/",
        product_categories,
        name="product-categories"
    ),

    path(
        "products/",
        get_products,
        name="get-products"
    ),
]