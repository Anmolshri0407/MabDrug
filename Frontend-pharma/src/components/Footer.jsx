import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#333333] text-white">

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        <div
          className="
            grid
            grid-cols-1
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_0.8fr_1fr]
            lg:gap-16
          "
        >

          {/* ================= BRAND ================= */}

          <div className="flex translate-x-5 gap-3 flex-col items-start text-left">

            <a
              href="#home"
              className="inline-flex items-center"
            >
              <span className="text-3xl font-bold tracking-tight">
                <span className="text-[#FF8A00]">mab</span>
                <span className="text-white">drug</span>
              </span>
            </a>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-slate-300
                sm:mt-6
              "
            >
              Building a responsible presence in the pharmaceutical
              and healthcare space with a focus on quality,
              integrity and 
              long-term growth.
            </p>

            {/* Enquiry Button */}

            <a
              href="#contact"
              className="
                group
                mt-7
                inline-flex
                min-h-[40px]
                min-w-[150px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#F04424]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#ff5a3d]
              "
            >
              Make an Enquiry

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div className="flex translate-x-5 flex-col items-start text-left">

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white
              "
            >
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 sm:mt-6">

              <a
                href="#home"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                About Us
              </a>

              <a
                href="#products"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Products
              </a>

              <a
                href="#quality"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Quality
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Contact Us
              </a>

            </div>
          </div>

          {/* ================= CONTACT ================= */}

          <div className="flex translate-x-5 gap-3 flex-col items-start text-left">

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white
              "
            >
              Contact Us
            </h3>

            <div className="mt-5 w-full max-w-sm space-y-5 sm:mt-6">

              {/* Email */}

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-orange-400"
                />

                <span className="break-all text-sm leading-6 text-slate-300">
                  mabdrugpharm@gmail.com
                </span>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-orange-400"
                />

                <span className="text-sm leading-6 text-slate-300">
                  +91 63071 40766
                </span>

              </div>

              {/* Location */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-orange-400"
                />

                <span className="text-sm leading-6 text-slate-300">
                  India
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            gap-2
            px-6
            py-6
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:justify-center
            lg:px-10
          "
        >

          {/* Copyright */}

          <p className="text-center text-xs text-slate-400 lg:text-left">
            © {new Date().getFullYear()} Mabdrug. All rights reserved.
          </p>

          {/* Legal Links */}

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">

            <a
              href="#"
              className="text-xs text-slate-400 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-slate-400 transition hover:text-white"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;