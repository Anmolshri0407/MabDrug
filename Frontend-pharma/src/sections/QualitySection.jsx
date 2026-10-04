import qualityImage from "../assets/quality/quality.png";
import regulatoryImage from "../assets/quality/regulatory.jpeg";
import responsibleImage from "../assets/quality/responsible.png";
import improvementImage from "../assets/quality/continuous.jpg";

import {
  ShieldCheck,
  FileCheck2,
  HeartHandshake,
  RefreshCw,
} from "lucide-react";

const qualityPoints = [
  {
    image: qualityImage,
    title: "Quality Standards",
    description:
      "We maintain a quality-focused approach across our pharmaceutical and healthcare activities.",
  },
  {
    image: regulatoryImage,
    title: "Regulatory Focus",
    description:
      "We work with a strong focus on responsible processes and applicable regulatory requirements.",
  },
  {
    image: responsibleImage,
    title: "Responsible Practices",
    description:
      "Integrity, accountability and responsible business practices remain central to our approach.",
  },
  {
    image: improvementImage,
    title: "Continuous Improvement",
    description:
      "We believe in continuously improving our processes and approach to better serve healthcare needs.",
  },
];

function QualityCompliance() {
  return (
    <section
      id="quality"
      className="flex w-full justify-center bg-white px-6 py-32 text-center lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10">

        {/* ================= HEADING ================= */}

        <div className="flex w-full max-w-3xl flex-col items-center text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F04424] sm:text-sm sm:tracking-[0.2em]">
            Quality & Compliance
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#333333] sm:mt-6 sm:text-5xl">
            Quality You Can
            <br />
            <span className="text-[#F04424]">
              Trust
            </span>
          </h2>

          <p className="mt-6 max-w-[340px] text-sm leading-7 text-slate-600 sm:max-w-xl sm:text-base sm:leading-8 lg:text-lg">
            Our approach is built around quality, responsibility and
            continuous improvement as we work towards delivering
            dependable healthcare solutions.
          </p>

        </div>

        {/* ================= QUALITY CARDS ================= */}

        <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8">

          {qualityPoints.map((point) => (
            <div
              key={point.title}
              className="
                group
                flex
                min-h-[420px]
                w-full
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
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

              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={point.image}
                  alt={point.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col items-center px-8 py-7">

                {/* Title */}
                <h3 className="text-xl font-semibold leading-tight text-[#333333] sm:text-2xl">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
                  {point.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-orange-100 bg-white px-5 py-6 text-center sm:mt-12 sm:px-8 sm:py-7">

          <p className="text-sm leading-6 text-slate-600">
            We are committed to building a culture where quality,
            responsibility and trust remain at the heart of our growth.
          </p>

        </div>

      </div>
    </section>
  );
}

export default QualityCompliance;