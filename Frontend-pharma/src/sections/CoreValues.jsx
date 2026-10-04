import qualityImage from "../assets/values/Quality.jpeg";
import integrityImage from "../assets/values/Integrity.jpeg";
import innovationImage from "../assets/values/Innovation.jpeg";
import patientImage from "../assets/values/patient.jpeg";




import {
  ShieldCheck,
  Handshake,
  Lightbulb,
  HeartPulse,
} from "lucide-react";

const values = [
  {
    image: qualityImage,
    title: "Quality First",
    description:
      "We are committed to maintaining high standards across our healthcare solutions.",
  },
  {
    image: integrityImage,
    title: "Integrity",
    description:
      "We build relationships through transparency, responsibility and ethical business practices.",
  },
  {
    image: innovationImage,
    title: "Innovation",
    description:
      "We continuously explore better ideas and approaches to support evolving healthcare needs.",
  },
  {
    image: patientImage,
    title: "Patient Focus",
    description:
      "We keep healthcare needs and patient well-being at the center of our approach.",
  },
];

function CoreValues() {
  return (
    <section
      id="values"
      className="bg-white w-full flex justify-center text-center px-6 py-32 lg:px-8"
    >
      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">

        {/* ================= HEADING ================= */}

        <div className="flex w-full max-w-3xl flex-col items-center text-center">

          {/* Small Heading */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F04424] sm:text-sm sm:tracking-[0.2em]">
            What We Stand For
          </p>

          {/* Main Heading */}
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#333333] sm:mt-6 sm:text-5xl">
            Our Core Values
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[340px] text-sm leading-7 text-slate-600 sm:max-w-xl sm:text-base sm:leading-8 lg:text-lg">
            The principles that guide our approach to healthcare,
            partnerships and responsible growth.
          </p>

        </div>

        {/* ================= VALUE CARDS ================= */}

        <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2">

          {values.map((value) => {
            

            return (
              <div
                key={value.title}
                className="
                  group
                  flex
                  min-h-[420px]
                  w-full
                  flex-col
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-10
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-orange-200
                  hover:shadow-xl
                  sm:min-h-[300px]
                  sm:px-10
                "
              >

                {/* Icon */}
                <div className="h-56 w-full overflow-hidden rounded-2xl">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-[#333333] sm:mt-7 sm:text-2xl">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default CoreValues;