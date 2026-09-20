import { ArrowUpRight } from "lucide-react";
import heroMolecule from "../assets/hero/hero-molecule.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-slate-50"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl sm:-right-32 sm:h-80 sm:w-80 lg:top-20 lg:h-96 lg:w-96" />

      <div className="pointer-events-none absolute -bottom-10 -left-24 h-64 w-64 rounded-full bg-slate-200/50 blur-3xl sm:-left-32 sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

      {/* Main Container */}
      <div className="relative mx-auto min-h-screen w-full max-w-7xl px-5 sm:px-8 lg:px-8">

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            w-full
            items-center
            py-24
            sm:py-28
            lg:translate-x-12
            lg:py-20
          "
        >
          <div className="w-full max-w-3xl translate-x-4">

            {/* Small Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#F04424] sm:w-10" />

              <span className="text-[10px] font-semibold tracking-[0.12em] text-[#F04424] sm:text-sm sm:tracking-[0.2em]">
                SCIENCE • QUALITY • TRUST
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-tight
                text-[#333333]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Better Medicine.
              <br />

              <span className="text-[#F04424]">
                Better Healthcare.
              </span>
            </h1>

            {/* Space after Heading */}
            <div className="h-8 sm:h-9" />

            {/* Description */}
            <p
              className="
                max-w-[330px]
                text-sm
                leading-6
                text-slate-600
                sm:max-w-xl
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              We are an emerging pharmaceutical company committed
              to delivering quality-focused healthcare solutions
              through innovation, integrity and responsible growth.
            </p>

            {/* Space before Button */}
            <div className="h-10 sm:h-11" />

            {/* CTA Button */}
            <a
              href="#products"
              className="
                group
                inline-flex
                min-h-[30px]
                min-w-[140px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#333333]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#F04424]
                sm:min-h-[52px]
                sm:px-7
                sm:py-4
              "
            >
              Explore Products

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Desktop Molecule */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-y-1/2 translate-x-[115px] lg:block">
          <img
            src={heroMolecule}
            alt="Scientific molecular illustration"
            className="h-[830px] w-[635px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;