import { useEffect, useState } from "react";

const AnimatedIcon = ({ iconList, className }) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % iconList.length);
    }, 3000); // Change icon every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [iconList.length]);

  const CurrentIcon = iconList[currentIconIndex];

  return (
    <div className={`flex justify-center items-center ${className} overflow-hidden`}>
      <CurrentIcon className="w-16 h-16 transition-transform transform animate-slot-machine" />
    </div>
  );
};

export default AnimatedIcon;