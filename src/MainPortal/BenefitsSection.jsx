import { ArrowDownCircle, ClipboardCheck, CreditCard, MousePointerClick, Zap } from "lucide-react";

const BenefitsSection = ({ scrollToComparison }) => {
  return (
    <section className="min-h-screen bg-dark py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-success to-warning text-transparent bg-clip-text">
              Streamline Your Business Finances
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MousePointerClick,
                title: "Easy Management",
                description: "Stay on top of your receivables in a couple clicks",
                buttonBgColor: "bg-primary",
                iconColor: "text-primary",
                bgColor: "bg-primary/75"
              },
              {
                icon: CreditCard,
                title: "Start for Free",
                description: "Start immediately, no credit card required",
                buttonBgColor: "bg-secondary",
                iconColor: "text-secondary",
                bgColor: "bg-secondary/75"
              },
              {
                icon: Zap,
                title: "Faster Payments",
                description: "Get paid faster with an automated invoicing system",
                buttonBgColor: "bg-accent1",
                iconColor: "text-accent1",
                bgColor: "bg-accent1/75"
              },
              {
                icon: ClipboardCheck,
                title: "Reduce Overhead",
                description: "Reduce administrative overhead with automation",
                buttonBgColor: "bg-accent2",
                iconColor: "text-accent2",
                bgColor: "bg-accent2/75"
              },
              {
                icon: ArrowDownCircle,
                title: "Streamlined Process",
                description: "Streamline your invoicing process",
                buttonBgColor: "bg-success",
                iconColor: "text-success",
                bgColor: "bg-success/75"
              }
            ].map((benefit, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.5}s` }} className={`bg-white rounded-sm overflow-hidden`}
              >
                <div className={`${benefit.bgColor} p-4 flex gap-4 justify-between items-center`}>

                  <div className="flex flex-col gap-4 text-white drop-shadow-sm">
                    <h3 className="text-xl font-display font-bold text-center uppercase">{benefit.title}</h3>

                    <p className="text-center leading-tight">{benefit.description}</p>
                  </div>

                  <div className={`${benefit.iconColor} rounded-full bg-white/80 p-2 cursor-pointer`} onClick={scrollToComparison}>
                    <benefit.icon className="w-16 h-16" />
                  </div>

                  {/* <div>
                    <button onClick={scrollToComparison} className={`${benefit.buttonBgColor} px-4 py-2 rounded-sm mt-auto uppercase`}>
                      Start Now
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToComparison}
              className="bg-gradient-to-r from-accent1 to-accent2 text-white px-8 py-4 rounded-lg font-bold shadow-md hover:shadow-xl"
              aria-label="View pricing comparison"
            >
              Compare our Solutions
            </button>
          </div>
        </div>
      </section>
  );
};

export default BenefitsSection;