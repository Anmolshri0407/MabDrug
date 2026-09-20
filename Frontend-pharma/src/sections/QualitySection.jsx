import {
  ShieldCheck,
  FileCheck2,
  HeartHandshake,
  RefreshCw,
} from "lucide-react";

const qualityPoints = [
  {
    icon: ShieldCheck,
    title: "Quality Standards",
    description:
      "We maintain a quality-focused approach across our pharmaceutical and healthcare activities.",
  },
  {
    icon: FileCheck2,
    title: "Regulatory Focus",
    description:
      "We work with a strong focus on responsible processes and applicable regulatory requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Responsible Practices",
    description:
      "Integrity, accountability and responsible business practices remain central to our approach.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "We believe in continuously improving our processes and approach to better serve healthcare needs.",
  },
];

function QualityCompliance() {
  return (
    <section
      id="quality"
      className="w-full bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto gap-10 flex w-full max-w-5xl flex-col items-center">

        {/* ================= HEADING ================= */}

        <div className="flex w-full max-w-3xl flex-col items-center text-center">

          {/* Small Heading */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F04424] sm:text-sm sm:tracking-[0.2em]">
            Quality & Compliance
          </p>

          {/* Main Heading */}
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#333333] sm:mt-6 sm:text-5xl">
            Quality You Can
            <br />
            <span className="text-[#F04424]">
              Trust
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[340px] text-sm leading-7 text-slate-600 sm:max-w-xl sm:text-base sm:leading-8 lg:text-lg">
            Our approach is built around quality, responsibility and
            continuous improvement as we work towards delivering
            dependable healthcare solutions.
          </p>

        </div>

        {/* ================= QUALITY CARDS ================= */}

        <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8">

          {qualityPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="
                  group
                  flex
                  min-h-[290px]
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
                  sm:min-h-[250px]
                  sm:px-9
                  sm:py-9
                "
              >

                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
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
                    size={28}
                    strokeWidth={1.7}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#333333] sm:mt-7 sm:text-2xl">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
                  {point.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mt-10 w-full max-w-3xl  rounded-2xl border border-orange-100 bg-white px-5 py-6 text-center sm:mt-12 sm:px-8 sm:py-7">

          <p className="text-sm leading-6 h-16 text-slate-600">
            We are committed to building a culture where quality,
            responsibility and trust remain at the heart of our growth.
          </p>

        </div>

      </div>
    </section>
  );
}

export default QualityCompliance;