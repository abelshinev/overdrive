import { motion } from "motion/react";

export function RSETPage() {
  return (
    <div className="mx-auto bg-card min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col gap-20">

        {/* SECTION 1: RSET Building (Left) + RSET Text (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left: Image */}
          <div className="lg:w-1/3 flex-shrink-0 w-full">
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img
                src="/rsetbuilding.jpeg"
                alt="Rajagiri School of Engineering & Technology"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:w-2/3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">Rajagiri School of Engineering & Technology</h2>
            <p className="text-slate-300 leading-relaxed text-lg text-justify">
              Rajagiri School of Engineering & Technology (RSET) is a premier self-financing engineering institution in Kerala, established in 2001 and affiliated to APJ Abdul Kalam Technological University (KTU). Managed by the Rajagiri Group of Institutions, RSET is known for strong academic culture, industry-oriented education, and emphasis on ethics, innovation, and holistic development. The institution offers undergraduate and postgraduate programs across core engineering disciplines, supported by experienced faculty, modern infrastructure, and active student professional bodies, creating an environment that nurtures technical excellence and leadership.
            </p>
          </div>
        </motion.div>

        {/* SECTION 2: SAE SUPRA Text (Left) + Win Image (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left: Text */}
          <div className="lg:w-2/3 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6">SAE SUPRA 2025</h2>
            <p className="text-slate-300 leading-relaxed text-lg text-justify mb-8">
              SAE RSET is the collegiate chapter of the Society of Automotive Engineers at Rajagiri School of Engineering & Technology, established in 2016 under the Mechanical Engineering Department. The chapter actively promotes innovation and learning in the automotive domain through technical events, workshops, expert talks, and flagship initiatives such as its highly successful Auto Shows.
            </p>

            {/* Yellow Box inside this section for better flow */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-8 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-200 mb-3">First College from Kerala to Win an Event at SAE SUPRA</h3>
              <p className="text-yellow-800 dark:text-yellow-300 leading-relaxed text-md">
                Overdrive Racing clinched the Cost Event at SAE SUPRA 2025 primarily due to their
                extensive use of custom designed parts, which drastically reduced expenses without sacrificing
                performance. With a total build cost of just ₹3.6 lakhs, the most cost-effective car in
                SAE SUPRA history, the team showcased exceptional design and manufacturing efficiency, and financial discipline.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/3 w-full order-1 lg:order-2 flex justify-center">
            <img
              src="/win.png"
              alt="SAE SUPRA 2025 Logo"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </motion.div>

      </div>
    </div>

  );

}