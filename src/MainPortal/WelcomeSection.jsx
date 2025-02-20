import coinsPocket from "../img/coins-pocket.png";
import FloatingCreditCards from "./FloatingCreditCards";

const WelcomeSection = ({ scrollToComparison }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Floating Background Cards */}
      <FloatingCreditCards />

      <div className="absolute w-full flex justify-center items-center ml-32 z-10" style={{ top: "8%", transform: "rotate(9deg)" }}>
        <img src={coinsPocket} alt="Welcome Section Background" className="w-48 object-cover" style={{ filter: 'blur(0.3px)' }} />
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

          <h1 className="font-display text-3xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Make your coins come home
            </span>
          </h1>

          <p className="text-lg md:text-xl text-dark/80 mb-8 max-w-2xl mx-auto">
            Let the power of AI help you get your money faster.
          </p>

          <button
            onClick={scrollToComparison}
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="View our services"
          >
            Get paid now thanks to our solution
          </button>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection;