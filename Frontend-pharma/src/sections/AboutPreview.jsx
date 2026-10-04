import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import mapImage from "../assets/images/Map2.jpg";

function AboutPreview() {
  return (
    <section
      id="about"
      className=" bg-slate-50 w-full flex justify-center text-center px-6 py-32 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 sm:gap-16">

        {/* ================= SECTION HEADING ================= */}

        <div className="w-full text-center">

          {/* Section Label */}
          <p className="text-[11px]  font-semibold uppercase tracking-[0.15em] text-[#F04424] sm:text-sm sm:tracking-[0.2em]">
            About Mabdrug
          </p>

          {/* Main Heading */}
          <h2 className="mt-5 text-3xl  font-bold leading-tight tracking-tight text-[#333333] sm:mt-6 sm:text-5xl">
            Building Trust Through
            <br />
            <span className="text-[#F04424]">
              Quality & Responsibility
            </span>
          </h2>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid w-full  items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT VISUAL ================= */}

          <div
              className="
                relative
                border
                min-h-[300px]
                w-full
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
                sm:min-h-[380px]
                lg:min-h-[480px]
              "
            >
              <img
                src={mapImage}
                alt="About Mabdrug"
                className="
                  h-full
                  min-h-[300px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                  sm:min-h-[380px]
                  lg:min-h-[480px]
                "
              />
            </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="w-full   px-4 sm:px-2 lg:px-0">

              {/* Main Paragraph */}
              <p className="max-w-[330px] translate-x-4 text-left text-base leading-7 text-slate-600 sm:max-w-xl sm:text-lg sm:leading-8">
                Mabdrug is focused on building a responsible presence in
                the pharmaceutical and healthcare space with an emphasis
                on quality, integrity and long-term growth.
              </p>

              {/* Second Paragraph */}
              <p className="mt-7 max-w-[330px] translate-x-4 text-left text-sm leading-7 text-slate-600 sm:max-w-xl sm:text-base">
                Our approach is centered around delivering dependable
                healthcare solutions while building meaningful relationships
                with our partners and customers.
              </p>

              {/* Highlights */}
              <div className="h-10"></div>
              <div className="  translate-x-4  mt-14 pb-6 space-y-6 sm:mt-14 sm:space-y-6 sm:pb-8">

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#F04424]"
                    size={21}
                  />

                  <p className="text-sm font-medium leading-6 text-[#333333]">
                    Quality-focused approach
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#F04424]"
                    size={21}
                  />

                  <p className="text-sm font-medium leading-6 text-[#333333]">
                    Responsible business practices
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#F04424]"
                    size={21}
                  />

                  <p className="text-sm font-medium leading-6 text-[#333333]">
                    Long-term healthcare focus
                  </p>
                </div>

              </div>

              {/* Button */}
              <div className="h-10"></div>

              <div className="pt-16 text-left translate-x-4">
                <a
                  href="#about"
                  className="group inline-flex min-h-[40px] min-w-[130px] items-center justify-center gap-2 rounded-full bg-[#333333] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F04424] sm:px-7 sm:py-4"
                >
                  Know More

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
              <div className="h-10"></div>

            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;