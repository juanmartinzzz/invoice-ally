import { Check } from "lucide-react";
import coinsPocket from "../img/coins-pocket.png";
import FloatingCreditCards from "./FloatingCreditCards";

const WelcomeSection = ({ scrollToComparison }) => {
  return (
    <section className="relative min-h-[66.67vh] flex items-center justify-center overflow-hidden px-4">
      {/* Floating Background Cards */}
      <FloatingCreditCards />

      <div className="absolute w-full flex justify-center items-center top-2 md:top-0 ml-[320px] md:ml-[380px] z-10" style={{ transform: "rotate(9deg)" }}>
        <img src={coinsPocket} alt="Welcome Section Background" className="w-24 md:w-40 object-cover" style={{ filter: 'blur(0.3px)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* <Coins className="w-16 h-16 mx-auto mb-6 text-primary" /> */}
          <div className="font-display text-5xl md:text-6xl font-bold mb-6 flex justify-center items-center">
            <div className="bg-white rounded-xl px-8 py-2">
              <span className="bg-gradient-to-r from-accent1 to-warning text-transparent bg-clip-text uppercase">
                Invoice Ally
              </span>
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Make your coins come home
            </span>
          </h1>

          <p className="text-md md:text-xl leading-tight text-dark/80 mb-8 max-w-xs mx-auto">
            Let the power of AI help you get your money faster.
          </p>

          <div className="flex flex-col items-center gap-1">
            <button
              onClick={scrollToComparison}
              aria-label="View our services"
              className="mr-36 text-primary leading-tight bg-white/20 hover:bg-white/66 backdrop-blur-lg px-4 py-2 border border-primary rounded-sm shadow-md cursor-pointer"
            >
              Learn more about our solution
            </button>

            <button
              onClick={scrollToComparison}
              aria-label="View our services"
              className="ml-36 text-white px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-sm shadow-md cursor-pointer"
            >
              Add your first invoice now <span className="text-xs bg-accent1 text-white rounded-full px-2 py-0.5">no registration required <Check className="w-4 h-4 inline" /></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WelcomeSection;