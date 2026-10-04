import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white">

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto w-full max-w-7xl px-6 pt-14 pb-24 sm:px-8 sm:pt-16 sm:pb-28 lg:px-10 lg:pt-20 lg:pb-32">

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

            <div className="mt-5 w-full flex gap-7 max-w-sm space-y-5 sm:mt-6">

              {/* Email */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mabdrugpharm@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Mabdrug"
                className="
                  flex h-17 w-17 items-center justify-center
                  rounded-4xl bg-white/10 text-orange-400
                  transition-all duration-300
                  hover:bg-[#F04424] hover:text-white
                "
              >
                <Mail size={30} strokeWidth={2.8} /> </a>

              {/* Phone */}

              <a
                  href="tel:+916307140766"
                  aria-label="Call Mabdrug"
                  className="
                    flex h-17 w-17 items-center justify-center
                    rounded-4xl bg-white/10 text-orange-400
                    transition-all duration-300
                    hover:bg-[#F04424] hover:text-white
                  "
                > <Phone size={30} strokeWidth={2.8} /> </a>
              {/* Instagram */}

              {/* Instagram */} 
              <a href="https://www.instagram.com/mabdrug_/" 
              target="_blank" rel="noopener noreferrer" aria-label="Mabdrug Instagram" 
              className=" flex h-17 w-17 items-center justify-center rounded-4xl
               bg-white/10 text-orange-400 transition-all duration-300 
               hover:bg-[#F04424] hover:text-white " > 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" 
               strokeLinejoin="round" className="h-[30px] w-[30px]" > 
               <rect x="2" y="2" width="20" height="20" rx="5" /> 
               <circle cx="12" cy="12" r="4" /> 
               <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /> 
               </svg> 
               </a>


              {/* Location */}

             <a
                href="https://www.google.com/maps/search/?api=1&query=India"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mabdrug Location"
                className="
                  flex h-17 w-17 items-center justify-center
                  rounded-4xl bg-white/10 text-orange-400
                  transition-all duration-300
                  hover:bg-[#F04424] hover:text-white
                "
              >
                <MapPin size={30} strokeWidth={2.8} />
              </a>
            </div>
          </div>

        </div>
      </div>
    <div className="h-5"></div>
      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t pt-10 border-white/10">

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
          <div className="h-2"></div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;