
import { useEffect, useState } from "react";

import {
  Pill,
  Tablets,
  Droplets,
  Stethoscope,
} from "lucide-react";


// =========================================================
// ICON MAPPING
// =========================================================

const iconMap = {
  Tablets: Pill,
  Capsules: Tablets,
  Syrups: Droplets,
  "Other Healthcare Products": Stethoscope,
};


function ProductPreview() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // =========================================================
  // FETCH PRODUCT CATEGORIES FROM DJANGO API
  // =========================================================

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        setLoading(true);
        setError("");

        const response = await fetch(
          "http://127.0.0.1:8000/api/categories/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product categories.");
        }

        const data = await response.json();

        setCategories(data);

      } catch (error) {

        console.error("Product Category API Error:", error);

        setError(
          "Unable to load products. Please try again later."
        );

      } finally {

        setLoading(false);

      }
    };


    fetchProducts();

  }, []);


  return (
    <section
      id="products"
      className="bg-white w-full flex justify-center text-center px-6 py-32 lg:px-8"
    >

      <div className="w-full max-w-4xl flex flex-col items-center gap-12 sm:gap-20">


        {/* ================================================== */}
        {/* HEADING */}
        {/* ================================================== */}

        <div className="flex w-full flex-col items-center text-center max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F04424]">
            Our Products
          </p>


          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#333333] sm:text-5xl">

            Healthcare Solutions

            <br />

            <span className="text-[#F04424]">
              Built Around Quality
            </span>

          </h2>


          <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg">
            Explore our growing portfolio of pharmaceutical and
            healthcare solutions focused on quality, reliability
            and responsible growth.
          </p>

        </div>


        {/* ================================================== */}
        {/* LOADING */}
        {/* ================================================== */}

        {loading && (
          <div className="py-10 text-sm text-slate-500">
            Loading products...
          </div>
        )}


        {/* ================================================== */}
        {/* ERROR */}
        {/* ================================================== */}

        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-4">

            <p className="text-sm text-red-600">
              {error}
            </p>

          </div>
        )}


        {/* ================================================== */}
        {/* PRODUCT CATEGORY CARDS */}
        {/* ================================================== */}

        {!loading && !error && categories.length > 0 && (

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">

            {categories.map((category) => {

              const Icon =
                iconMap[category.title] || Pill;


              return (

                <div
                  key={category.id}
                  className="
                    group
                    flex
                    min-h-[300px]
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-slate-400
                    bg-white
                    p-9
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-orange-200
                    hover:shadow-xl
                  "
                >

                  {/* ================================================== */}
                  {/* ICON */}
                  {/* ================================================== */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-orange-50
                      text-[#F04424]
                      transition-all
                      duration-300
                      group-hover:bg-[#F04424]
                      group-hover:text-white
                    "
                  >

                    <Icon
                      size={28}
                      strokeWidth={1.7}
                    />

                  </div>


                  {/* ================================================== */}
                  {/* TITLE */}
                  {/* ================================================== */}

                  <h3
                    className="
                      mt-7
                      text-2xl
                      font-semibold
                      text-[#333333]
                    "
                  >
                    {category.title}
                  </h3>


                  {/* ================================================== */}
                  {/* DESCRIPTION */}
                  {/* ================================================== */}

                  <p
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {category.description}
                  </p>

                </div>

              );

            })}

          </div>

        )}


        {/* ================================================== */}
        {/* NO PRODUCTS */}
        {/* ================================================== */}

        {!loading && !error && categories.length === 0 && (

          <div className="py-10">

            <p className="text-sm text-slate-500">
              No products available at the moment.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default ProductPreview;

