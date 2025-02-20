const FloatingCreditCard = ({ top, left, bottom, right, bgColor, detailColor, animationDelay }) => {
  return (
    <div className={`absolute ${top} ${left} ${bottom} ${right} w-64 h-40 ${bgColor} rounded-md shadow-md flex flex-col justify-between p-4 animate-float`} style={{ animationDelay: animationDelay }}>
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
      <FloatingCreditCard top="top-40" left="left-1/4" bgColor="bg-accent3/10" detailColor="bg-white/30" animationDelay="0s" />

      <FloatingCreditCard top="top-1/3" right="right-1/4" bgColor="bg-secondary/10" detailColor="bg-white/30" animationDelay="0.5s" />

      <FloatingCreditCard bottom="bottom-1/4" left="left-1/3" bgColor="bg-accent1/10" detailColor="bg-white/30" animationDelay="1s" />
    </div>
  );
};

export default FloatingCreditCards;