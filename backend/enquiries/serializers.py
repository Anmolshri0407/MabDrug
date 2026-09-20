from rest_framework import serializers

from .models import Enquiry, ProductCategory, Product


# =========================================================
# ENQUIRY SERIALIZER
# =========================================================

class EnquirySerializer(serializers.ModelSerializer):

    class Meta:
        model = Enquiry

        fields = [
            "id",
            "name",
            "email",
            "company",
            "message",
            "status",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
        ]

    def validate_name(self, value):
        value = value.strip()

        if not value:
            raise serializers.ValidationError(
                "Name is required."
            )

        if len(value) < 2:
            raise serializers.ValidationError(
                "Name must contain at least 2 characters."
            )

        return value

    def validate_email(self, value):
        value = value.strip().lower()

        if not value:
            raise serializers.ValidationError(
                "Email is required."
            )

        return value

    def validate_company(self, value):
        return value.strip()

    def validate_message(self, value):
        value = value.strip()

        if not value:
            raise serializers.ValidationError(
                "Message is required."
            )

        if len(value) < 10:
            raise serializers.ValidationError(
                "Message must contain at least 10 characters."
            )

        return value


# =========================================================
# PRODUCT CATEGORY SERIALIZER
# =========================================================

class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory

        fields = [
            "id",
            "title",
            "description",
            "is_active",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
        ]


# =========================================================
# PRODUCT SERIALIZER
# =========================================================

class ProductSerializer(serializers.ModelSerializer):

    category = serializers.StringRelatedField()

    image = serializers.SerializerMethodField()

    class Meta:
        model = Product

        fields = [
            "id",
            "category",
            "image",
            "name",
            "description",
            "composition",
            "uses",
            "is_active",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
        ]

    def get_image(self, obj):

        if obj.image:

            request = self.context.get("request")

            if request:
                return request.build_absolute_uri(
                    obj.image.url
                )

            return obj.image.url

        return None