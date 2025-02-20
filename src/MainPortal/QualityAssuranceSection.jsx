import { BadgeCheck, CreditCard, FileCheck, LockIcon, LockKeyhole, Medal, Shield, Star, TrendingUp, UnlockIcon } from "lucide-react";

const QualityAssuranceSection = () => {
  return (
    <section className="py-8 px-4 bg-gradient-to-b from-white to-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text">
            Our Guarantee
          </span>
        </h2>

        <div className="flex flex-wrap gap-16 justify-center pb-8 px-4 md:justify-center md:overflow-x-visible md:px-0">
          {[
            {
              title: "No Credit Card Required",
              icon: CreditCard,
              colors: {
                medal: "from-primary to-secondary",
                ribbon: "from-primary/80 to-secondary/80"
              }
            },
            {
              title: "No Hidden Fees",
              icon: FileCheck,
              colors: {
                medal: "from-dark to-success",
                ribbon: "from-dark/60 to-success/80"
              }
            },
            {
              title: "No Setup Fees",
              icon: TrendingUp,
              colors: {
                medal: "from-accent1 to-accent2",
                ribbon: "from-accent1/80 to-accent2/80"
              }
            },
            {
              title: "No Cancel Fees",
              icon: BadgeCheck,
              colors: {
                medal: "from-accent2 to-accent3",
                ribbon: "from-accent2/80 to-accent3/80"
              }
            },
            {
              title: "No Lock-in",
              icon: UnlockIcon,
              colors: {
                medal: "from-info to-primary",
                ribbon: "from-info/80 to-primary/80"
              }
            }
          ].map((medal, index) => (
            <div key={index} className="flex-none w-32 group" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Medal Component */}
              <div className="relative flex flex-col items-center transform transition-transform duration-500 hover:scale-110">
                {/* Medal Circle */}
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${medal.colors.medal} shadow-lg flex items-center justify-center p-2 border-4 border-white relative z-10 group-hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center">
                    <medal.icon className="w-12 h-12 text-dark" />
                  </div>
                </div>

                {/* Ribbon */}
                <div className="relative -mt-6">
                  <div className={`w-24 h-36 bg-gradient-to-b ${medal.colors.ribbon} shadow-md transform perspective-1000 rotateX-10 group-hover:rotateX-5 transition-transform duration-300`}>
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <p className="text-white text-md font-bold leading-tight">
                        {medal.title}
                      </p>
                    </div>
                  </div>

                  {/* Ribbon Tails */}
                  <div className="absolute -bottom-0 left-0 right-0 flex justify-center gap-2">
                    <div className={`w-full h-4 bg-gradient-to-br ${medal.colors.ribbon}`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityAssuranceSection;