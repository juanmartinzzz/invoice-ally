import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coinsPocket from "../img/coins-pocket.png";
import FloatingCreditCards from "./FloatingCreditCards";

const WelcomeSection = ({ scrollToComparison }) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[66.67vh] flex items-center justify-center overflow-hidden px-4">
      {/* Floating Background Cards */}
      <FloatingCreditCards />

      <div className="absolute w-full flex justify-center items-center top-3 md:top-12 ml-[320px] md:ml-[420px] z-10" style={{ transform: "rotate(9deg)" }}>
        <img src={coinsPocket} alt="Welcome Section Background" className="w-24 md:w-32 object-cover" style={{ filter: 'blur(0.3px)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="font-display text-5xl md:text-6xl font-bold mb-2 flex justify-center items-center">
          <span className="bg-gradient-to-r from-accent1 to-warning text-transparent bg-clip-text uppercase drop-shadow-[0_0_1px_rgba(255,255,255,0.5)] [word-spacing:0.2em]">
            Invoice Ally
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold mb-2">
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            reduce late payments with AI
          </span>
        </h1>

        <p className="text-md md:text-xl leading-tight text-dark/80 mb-6">
          make your coins come home
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
            onClick={() => navigate('/invoices')}
            aria-label="View our services"
            className="ml-36 text-white px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-sm shadow-md cursor-pointer"
          >
            Add your first invoice now <span className="text-xs bg-accent1 text-white rounded-full px-2 py-0.5">no registration required <Check className="w-4 h-4 inline" /></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection;