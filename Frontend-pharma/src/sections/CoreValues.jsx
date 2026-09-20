import {
  ShieldCheck,
  Handshake,
  Lightbulb,
  HeartPulse,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "We are committed to maintaining high standards across our healthcare solutions.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We build relationships through transparency, responsibility and ethical business practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore better ideas and approaches to support evolving healthcare needs.",
  },
  {
    icon: HeartPulse,
    title: "Patient Focus",
    description:
      "We keep healthcare needs and patient well-being at the center of our approach.",
  },
];

function CoreValues() {
  return (
    <section
      id="values"
      className="w-full bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
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
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="
                  group
                  flex
                  min-h-[300px]
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
                  sm:min-h-[270px]
                  sm:px-10
                "
              >

                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
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
                    size={30}
                    strokeWidth={1.7}
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