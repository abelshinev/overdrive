import { motion } from "motion/react";

export function RSETPage() {
    return (
        <div className="mx-auto bg-card h-[90vh] ">
          <div className="max-w-screen mr-40">
            
            {/* Main Layout: Image on Left, Text Sections on Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-12"
            >
              {/* Left: Catalog Image */}
              <div className="lg:h-[] flex-shrink-0 rounded-sm overflow-hidden shadow-lg h-fit sticky top-12">
                <img 
                  src="/catalog.png" 
                  alt="SAE RSET Overdrive Racing Information Poster" 
                  className="w-auto h-[90vh] object-cover"
                />
              </div>

              {/* Right: Text Sections */}
              <div className="flex-1 space-y-10">
                
                {/* RSET Section */}
                <div>
                  <h2 className="text-3xl mt-10 font-bold text-slate-900 dark:text-white mb-4">Rajagiri School of Engineering & Technology</h2>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    Rajagiri School of Engineering & Technology (RSET) is a premier self-financing engineering institution in Kerala, established in 2001 and affiliated to APJ Abdul Kalam Technological University (KTU). Managed by the Rajagiri Group of Institutions, RSET is known for its strong academic culture, industry-oriented education, and emphasis on ethics, innovation, and holistic development. The institution offers undergraduate and postgraduate programs across core engineering disciplines, supported by experienced faculty, modern infrastructure, and active student professional bodies, creating an environment that nurtures technical excellence and leadership.
                  </p>
                </div>

                {/* SAE SUPRA Section */}
                <div className="flex">
                  <div className="my-8">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">SAE SUPRA 2025</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                      SAE RSET is the collegiate chapter of the Society of Automotive Engineers at Rajagiri School of Engineering & Technology, established in 2016 under the Mechanical Engineering Department. The chapter actively promotes innovation and learning in the automotive domain through technical events, workshops, expert talks, and flagship initiatives such as its highly successful Auto Shows.
                    </p>
                  </div>
                  <img
                    src="/win.png"
                    alt="SAE SUPRA 2025 Logo"
                    className="ml-8 w-[25vw] h-auto object-contain"
                  />
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-8 rounded-lg border border-yellow-200 dark:border-yellow-700 mt-12"
                >
                  <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-200 mb-3">First College from Kerala to Win an Event at SAE SUPRA</h3>
                  <p className="text-yellow-800 dark:text-yellow-300 leading-relaxed text-md">
                    Overdrive Racing clinched the Cost Event at SAE SUPRA 2025 primarily due to their 
                    extensive use of custom designed parts, which drastically reduced expenses without sacrificing 
                    performance. With a total build cost of just ₹3.6 lakhs, the most cost-effective car in 
                    SAE SUPRA history, the team showcased exceptional design and manufacturing efficiency, and financial discipline.
                  </p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>

    );

}