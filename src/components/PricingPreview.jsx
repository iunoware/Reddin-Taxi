import { Link } from "react-router-dom";

export default function PricingPreview() {
  return (
    <section id="pricingPreview" className="w-full py-24 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        {/* <div className="max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
            Pricing for Premium Experience
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            We believe in clarity without compromise. View a pricing preview below —
            complete details are shared personally to ensure accuracy for your journey.
          </p>
        </div> */}

        <div className="mb-16 gap-4 flex flex-col justify-center items-center">
          <span
            data-aos="fade-up"
            className="text-yellow-500 font-semibold tracking-[0.2em] text-sm uppercase"
          >
            Premium Rates
          </span>
          <h2
            data-aos="fade-up"
            className="cinzel text-4xl md:text-5xl pt-3 text-white drop-shadow-lg"
          >
            Pricing for
            <span span className="text-gray-500 italic">
              {" "}
              Premium Experience
            </span>
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-400 max-w-2xl text-center mx-auto font-light leading-relaxed"
          >
            We believe in clarity without compromise. View a pricing preview below —
            Complete details are shared personally to ensure accuracy for your journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Per Day */}
          <div className="relative rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur">
            <h3 className="text-lg mb-2">Vehicle Rent / Day</h3>

            <p className="text-3xl font-semibold select-none">₹*,500</p>

            <p className="text-sm text-neutral-400 mt-4">
              Luxury vehicle with complimentary daily usage
            </p>

            <div className="absolute inset-0 rounded-2xl bg-black/20"></div>
          </div>

          {/* Per KM */}
          <div className="relative rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur">
            <h3 className="text-lg mb-2">Extra KM Charges</h3>

            <p className="text-3xl font-semibold blur-sm select-none">₹** / KM</p>

            <p className="text-sm text-neutral-400 mt-4">
              Applicable beyond daily free limit
            </p>

            <div className="absolute inset-0 rounded-2xl bg-black/20"></div>
          </div>

          {/* Driver */}
          <div className="relative rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur">
            <h3 className="text-lg mb-2">Driver Bata</h3>

            <p className="text-3xl font-semibold blur-sm select-none">
              Calculated Separately
            </p>

            <p className="text-sm text-neutral-400 mt-4">
              Depends on trip duration & route
            </p>

            <div className="absolute inset-0 rounded-2xl bg-black/20"></div>
          </div>
        </div>

        <div className="flex w-full justify-center items-center mb-10">
          <Link
            to="/contact"
            // onClick={scrollToForm}
            className="px-8 py-3 text-red-500 rounded-lg underline underline-offset-2 hover:underline-offset-4 cursor-pointer transition-all font-medium"
          >
            Unlock Full Pricing
          </Link>
        </div>

        {/* Terms Preview */}
        <div className="rounded-2xl border border-white/10 p-8 bg-white/5 mb-12">
          <h4 className="text-lg mb-4">Key Terms (Preview)</h4>

          <ul className="space-y-3 text-neutral-300 text-sm">
            <li>
              • Free up to first{" "}
              <span className="text-red-500 text-xl font-semibold ">150 KM</span>
            </li>
            <li>• Toll & parking charges payable by customer</li>
            <li>• Advance payment required to confirm booking</li>
            <li>• Final pricing shared after route confirmation</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-neutral-400 max-w-xl">
            Note: Exact pricing varies based on route, duration, and customization. Share
            your trip details and our team will contact you with a precise quote.
          </p>
        </div>
      </div>
    </section>
  );
}
