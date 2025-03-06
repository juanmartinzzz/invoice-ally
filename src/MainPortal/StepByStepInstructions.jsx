import React from 'react';
import { Sparkles, Table, Settings, CreditCard, Coins, Wallet } from 'lucide-react';

const StepByStepInstructions = () => {
  return (
    <div className="w-full min-h-[33.33vh] bg-gradient-to-br from-secondary/33 to-primary/10 py-4 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-primary relative">
          How It Works
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-22 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                {/* Step number above timeline */}
                <div className="h-12 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>

                {/* Icon on timeline */}
                <div className="w-20 h-20 bg-white/66 backdrop-blur-[1px] rounded-full flex items-center justify-center shadow-lg border-2 border-primary z-20 relative">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <Table className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="hidden md:block absolute top-10 right-0 w-1/2 h-1 bg-transparent"></div>
              </div>

              <div className="mt-0">
                <h3 className="text-xl font-semibold text-secondary">Add Your Invoices</h3>
                <p className="text-gray-700">
                  Easily add your invoices to our magic table
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                {/* Step number above timeline */}
                <div className="h-12 flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>

                {/* Icon on timeline */}
                <div className="w-20 h-20 bg-white/66 backdrop-blur-[1px] rounded-full flex items-center justify-center shadow-lg border-2 border-secondary z-20 relative">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <Settings className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="hidden md:block absolute top-10 right-0 w-1/2 h-1 bg-transparent"></div>
              </div>

              <div className="mt-0">
                <h3 className="text-xl font-semibold text-secondary">Set Preferences</h3>
                <p className="text-gray-700">
                  Decide how to remind your clients to pay
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                {/* Step number above timeline */}
                <div className="h-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent1">3</span>
                </div>

                {/* Icon on timeline */}
                <div className="w-20 h-20 bg-white/66 backdrop-blur-[1px] rounded-full flex items-center justify-center shadow-lg border-2 border-accent1 z-20 relative">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <div className="relative">
                      <Wallet className="h-8 w-8 text-accent1 absolute -top-2 -left-6 transform rotate-12" />
                      <Sparkles className="h-8 w-8 text-primary absolute -top-6 -left-2 animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-10 right-0 w-1/2 h-1 bg-transparent"></div>
              </div>

              <div className="mt-0">
                <h3 className="text-xl font-semibold text-accent1">Improve Cashflow</h3>
                <p className="text-black">
                  That's it: sit back and let our AI remind your clients for you
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dots indicator */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStepInstructions;