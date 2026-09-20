from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Enquiry, ProductCategory, Product
from .serializers import EnquirySerializer, ProductCategorySerializer,ProductSerializer


# =========================================================
# CREATE ENQUIRY
# =========================================================

@api_view(["POST"])
def create_enquiry(request):

    serializer = EnquirySerializer(data=request.data)

    if serializer.is_valid():
        enquiry = serializer.save()

        return Response(
            {
                "message": "Enquiry submitted successfully",
                "data": EnquirySerializer(enquiry).data
            },
            status=status.HTTP_201_CREATED
        )

    return Response(
        {
            "message": "Invalid data",
            "errors": serializer.errors
        },
        status=status.HTTP_400_BAD_REQUEST
    )


# =========================================================
# GET PRODUCT CATEGORIES
# =========================================================

@api_view(["GET"])
def product_categories(request):

    products = ProductCategory.objects.filter(
        is_active=True
    ).order_by("id")

    serializer = ProductCategorySerializer(
        products,
        many=True
    )

    return Response(
        serializer.data,
        status=status.HTTP_200_OK
    )
    
    
# =========================================================
# GET PRODUCTS
# =========================================================

@api_view(["GET"])
def get_products(request):

    products = Product.objects.filter(
        is_active=True
    )

    serializer = ProductSerializer(
        products,
        many=True,
        context={
            "request": request
        }
    )

    return Response(
        serializer.data,
        status=status.HTTP_200_OK
    )