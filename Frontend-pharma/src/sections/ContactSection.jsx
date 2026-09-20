import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function ContactEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Old messages remove
    setSuccessMessage("");
    setErrorMessage("");
  };

  // =========================================================
  // FRONTEND VALIDATION
  // =========================================================

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      return "Please enter your name.";
    }

    if (name.length < 2) {
      return "Name must contain at least 2 characters.";
    }

    if (!email) {
      return "Please enter your email.";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!message) {
      return "Please enter your message.";
    }

    if (message.length < 10) {
      return "Message must contain at least 10 characters.";
    }

    return null;
  };

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submission
    if (loading) {
      return;
    }

    setSuccessMessage("");
    setErrorMessage("");

    // Frontend validation
    const validationError = validateForm();

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/api/enquiries/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            company: formData.company.trim(),
            message: formData.message.trim(),
          }),
        }
      );

      // Try to read JSON response
      const data = await response.json();

      // =====================================================
      // BACKEND ERROR
      // =====================================================

      if (!response.ok) {
        let errorText = "Something went wrong. Please try again.";

        if (data) {
          // DRF validation errors
          if (typeof data === "object") {
            const errors = [];

            Object.entries(data).forEach(([field, messages]) => {
              if (Array.isArray(messages)) {
                messages.forEach((message) => {
                  errors.push(message);
                });
              } else if (typeof messages === "string") {
                errors.push(messages);
              }
            });

            if (errors.length > 0) {
              errorText = errors.join(" ");
            }
          }

          // Normal message response
          if (data.message) {
            errorText = data.message;
          }
        }

        throw new Error(errorText);
      }

      // =====================================================
      // SUCCESS
      // =====================================================

      setSuccessMessage(
        data?.message ||
          "Your enquiry has been submitted successfully!"
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

    } catch (error) {
      console.error("Enquiry Error:", error);

      setErrorMessage(
        error.message ||
          "Unable to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        w-full
        bg-white
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-8
        lg:py-32
      "
    >

      {/* ================================================== */}
      {/* MAIN CONTAINER */}
      {/* ================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          gap-3
        "
      >

        {/* ================================================== */}
        {/* HEADING */}
        {/* ================================================== */}

        <div
          className="
            flex
            w-full
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >

          {/* Space above Get In Touch */}
          <div className="pt-6 sm:pt-8" />

          {/* Get In Touch */}

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#F04424]
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            Get In Touch
          </p>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[#333333]
              sm:mt-7
              sm:text-5xl
            "
          >
            Have a Business
            <br />

            <span className="text-[#F04424]">
              Enquiry?
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-2xl
              text-center
              text-sm
              leading-6
              text-slate-600
              sm:mt-8
              sm:text-lg
              sm:leading-7
            "
          >
            Whether you are looking to connect, collaborate or
            discuss a business opportunity, we would be happy
            to hear from you.
          </p>

        </div>


        {/* ================================================== */}
        {/* CONTACT CONTENT */}
        {/* ================================================== */}

        <div
          className="
            mt-10
            grid
            w-full
            max-w-5xl
            grid-cols-1
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
          "
        >

          {/* ================================================== */}
          {/* LEFT - CONTACT INFO */}
          {/* ================================================== */}

          <div
            className="
              flex
              w-full
              min-h-[450px]
              flex-col
              items-center
              justify-center
              rounded-3xl
              bg-[#333333]
              px-6
              py-14
              text-center
              text-white
              sm:px-10
              sm:py-16
            "
          >

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-orange-400
              "
            >
              Let's Connect
            </p>

            <h3
              className="
                mt-6
                text-3xl
                font-semibold
                leading-tight
              "
            >
              We'd love to hear from you.
            </h3>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-slate-300
              "
            >
              Reach out to us for business enquiries,
              partnerships and other professional
              opportunities.
            </p>


            {/* ================================================== */}
            {/* CONTACT DETAILS */}
            {/* ================================================== */}

            <div
              className="
                mt-10
                flex
                w-full
                max-w-sm
                flex-col
                items-center
                justify-center
              "
            >

              {/* EMAIL */}

              <div
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  py-4
                  text-left
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/10
                    text-orange-400
                  "
                >
                  <Mail size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    mabdrugpharm@gmail.com
                  </p>

                </div>

              </div>


              {/* PHONE */}

              <div
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  py-4
                  text-left
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/10
                    text-orange-400
                  "
                >
                  <Phone size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    +91 63071 40766
                  </p>

                </div>

              </div>


              {/* LOCATION */}

              <div
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  py-4
                  pb-8
                  text-left
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/10
                    text-orange-400
                  "
                >
                  <MapPin size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    India
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ================================================== */}
          {/* RIGHT - FORM */}
          {/* ================================================== */}

          <div
            className="
              flex
              w-full
              min-h-[560px]
              items-center
              justify-center
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              px-5
              py-10
              sm:min-h-[600px]
              sm:px-8
              sm:py-14
              lg:min-h-[500px]
              lg:px-10
              lg:py-16
            "
          >

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="
                flex
                w-full
                max-w-[330px]
                flex-col
                space-y-5
                sm:max-w-md
                sm:space-y-6
              "
            >

              {/* ================================================== */}
              {/* SUCCESS MESSAGE */}
              {/* ================================================== */}

              {successMessage && (
                <div
                  className="
                    rounded-xl
                    border
                    border-green-200
                    bg-green-50
                    px-4
                    py-3
                    text-center
                  "
                >
                  <p className="text-sm font-medium text-green-700">
                    {successMessage}
                  </p>
                </div>
              )}


              {/* ================================================== */}
              {/* ERROR MESSAGE */}
              {/* ================================================== */}

              {errorMessage && (
                <div
                  className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    px-4
                    py-3
                    text-center
                  "
                >
                  <p className="text-sm font-medium text-red-600">
                    {errorMessage}
                  </p>
                </div>
              )}


              {/* ================================================== */}
              {/* NAME */}
              {/* ================================================== */}

              <div className="w-full">

                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-[#333333]
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  disabled={loading}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[#F04424]
                    focus:ring-2
                    focus:ring-orange-100
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                  "
                />

              </div>


              {/* ================================================== */}
              {/* EMAIL */}
              {/* ================================================== */}

              <div className="w-full">

                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-[#333333]
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled={loading}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[#F04424]
                    focus:ring-2
                    focus:ring-orange-100
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                  "
                />

              </div>


              {/* ================================================== */}
              {/* COMPANY */}
              {/* ================================================== */}

              <div className="w-full">

                <label
                  htmlFor="company"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-[#333333]
                  "
                >
                  Company
                </label>

                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  disabled={loading}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[#F04424]
                    focus:ring-2
                    focus:ring-orange-100
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                  "
                />

              </div>


              {/* ================================================== */}
              {/* MESSAGE */}
              {/* ================================================== */}

              <div className="w-full">

                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-[#333333]
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  disabled={loading}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[#F04424]
                    focus:ring-2
                    focus:ring-orange-100
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                  "
                />

              </div>


              {/* ================================================== */}
              {/* BUTTON */}
              {/* ================================================== */}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  mt-2
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-3
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
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:w-auto
                  sm:self-center
                  sm:px-8
                "
              >

                {loading
                  ? "Submitting..."
                  : "Submit Enquiry"}

                {!loading && (
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                )}

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactEnquiry;