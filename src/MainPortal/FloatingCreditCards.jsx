const FloatingCreditCard = ({ top, left, bgColor, detailColor, animationDelay }) => {
  return (
    <div className={`absolute w-64 h-40 ${bgColor} rounded-md shadow-sm flex flex-col justify-between p-4 animate-float`} style={{ animationDelay: animationDelay, top, left }}>
      <div className="flex justify-between items-center">
        <div className={`w-16 h-8 ${detailColor} rounded-xs`}></div>
      </div>

      <div className="flex justify-end">
        <div className={`w-32 h-4 ${detailColor}`}></div>
      </div>
    </div>
  );
};

const FloatingCreditCards = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <FloatingCreditCard top="8%" left="15%" bgColor="bg-accent3/10" detailColor="bg-white/40" animationDelay="0s" />

      <FloatingCreditCard top="32%" left="32%" bgColor="bg-secondary/10" detailColor="bg-white/40" animationDelay="0.5s" />

      <FloatingCreditCard top="55%" left="46%" bgColor="bg-accent1/10" detailColor="bg-white/40" animationDelay="1s" />

      <FloatingCreditCard top="68%" left="8%" bgColor="bg-accent1/15" detailColor="bg-white/30" animationDelay="2.5s" />

      <FloatingCreditCard top="18%" left="53%" bgColor="bg-success/10" detailColor="bg-white/30" animationDelay="2s" />

      <FloatingCreditCard top="44%" left="13%" bgColor="bg-warning/10" detailColor="bg-white/30" animationDelay="1.5s" />
    </div>
  );
};

export default FloatingCreditCards;