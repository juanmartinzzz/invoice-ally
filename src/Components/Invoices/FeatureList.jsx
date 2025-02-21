import { CheckCircle, Clock, Timer } from "lucide-react";

const FeatureList = ({features}) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4 text-xs">
      {features.map((feature) => (
        <div className="w-72 flex flex-col gap-1 p-2 rounded shadow">
          <div className="flex justify-between items-center gap-2">
            <h1 className="text-sm font-bold leading-tight">{feature.title}</h1>

            {feature.done ? (
              <span className="text-success rounded-full bg-success/10 p-1"><CheckCircle /></span>
            ) : (
              <span className="text-accent1 rounded-full bg-accent1/10 p-1"><Clock /></span>
            )}
          </div>

          <p className="leading-tight">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureList;