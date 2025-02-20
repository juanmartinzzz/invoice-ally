import React from 'react';
import FloatingCreditCards from './MainPortal/FloatingCreditCards';
import { Coins, FileText, Briefcase, CheckCircle2, ArrowBigRightDash, DollarSign, Brush, Figma, DraftingCompass, Paintbrush, Code, Pickaxe, Stethoscope, Mic, Camera, Video } from 'lucide-react';
import AnimatedIcon from './MainPortal/AnimatedIcon';

function App() {
  const scrollToComparison = () => {
    document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white">
      {/* Welcome Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Floating Background Cards */}
        <FloatingCreditCards />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Coins className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
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

      {/* Service Comparison Section */}
      <section id="comparison" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-accent1 to-primary text-transparent bg-clip-text">
              Choose Your Path to Better Cash Flow
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Invoice-to-Cash Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col justify-center items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <FileText className="w-12 h-12 text-primary" />
                  <ArrowBigRightDash className="w-12 h-12 text-primary" />
                  <DollarSign className="w-12 h-12 text-primary" />
                </div>

                <h3 className="text-3xl font-display font-bold">Invoice to Cash</h3>
              </div>

              <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4wolpZeWWQ?si=M5e_X5w2Gox0IukD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

              <p className="text-dark/80 my-4">
                Input only the invoices you are having trouble getting paid for. Our AI will help you get paid.
              </p>

              <ul className="space-y-4 mb-8">
                {['Instant invoice financing', 'Competitive rates', 'Simple documentation', 'Quick approval'].map((feature) => (
                  <li key={feature} className="flex items-center text-dark/90">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Work-to-Cash Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col justify-center items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <AnimatedIcon iconList={[Brush, Figma, DraftingCompass, Paintbrush, Code, Pickaxe, Stethoscope, Mic, Camera, Video ]} className="w-12 h-12 text-primary" />
                  <ArrowBigRightDash className="w-12 h-12 text-primary" />
                  <DollarSign className="w-12 h-12 text-primary" />
                </div>

                <h3 className="text-3xl font-display font-bold">Work to Cash</h3>
              </div>

              <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4wolpZeWWQ?si=M5e_X5w2Gox0IukD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

              <p className="text-dark/80 my-4">
                Input or create all your invoices with us, eliminate the wait for client payments and improve your cash flow.
              </p>

              <ul className="space-y-4 mb-8">
                {['Same-day payments', 'No hidden fees', 'Flexible terms', 'Dedicated support'].map((feature) => (
                  <li key={feature} className="flex items-center text-dark/90">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-secondary text-white py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-light">
                  <th className="py-4 px-6 text-left font-display">Feature</th>
                  <th className="py-4 px-6 text-center">Invoice-to-Cash</th>
                  <th className="py-4 px-6 text-center">Work-to-Cash</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Processing Time', invoice: '24-48 hours', work: 'Same day' },
                  { feature: 'Documentation', invoice: 'Invoice + Business docs', work: 'Work proof only' },
                  { feature: 'Maximum Amount', invoice: 'Up to $100,000', work: 'Up to $50,000' },
                  { feature: 'Fee Structure', invoice: 'Based on invoice terms', work: 'Fixed percentage' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-light hover:bg-light/20">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.invoice}</td>
                    <td className="py-4 px-6 text-center">{row.work}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;