
import {
  Pill,
  Tablets,
  Droplets,
  Stethoscope,
} from "lucide-react";


// =========================================================
// STATIC PRODUCT DATA
// =========================================================

const products = [
  {
    id: 1,
    title: "Tablets",
    description:
      "High-quality tablet formulations developed with a focus on consistency, safety and reliable performance.",
    icon: Pill,
  },
  {
    id: 2,
    title: "Capsules",
    description:
      "Carefully developed capsule formulations designed to meet quality standards and patient needs.",
    icon: Tablets,
  },
  {
    id: 3,
    title: "Syrups",
    description:
      "Reliable liquid formulations designed with quality, effectiveness and ease of use in mind.",
    icon: Droplets,
  },
  {
    id: 4,
    title: "Other Healthcare Products",
    description:
      "A growing range of healthcare solutions focused on quality, reliability and responsible innovation.",
    icon: Stethoscope,
  },
];


function ProductPreview() {

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
        {/* PRODUCT CATEGORY CARDS */}
        {/* ================================================== */}

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">

          {products.map((product) => {

            const Icon = product.icon;

            return (

              <div
                key={product.id}
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
                  {product.title}
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
                  {product.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}


export default ProductPreview;
