import { ChartSubtitleValues } from "../../utils/interfaces/chart";

interface ChartSubtitleProps {
  value: ChartSubtitleValues;
}

export function ChartSubtitle({ value }: ChartSubtitleProps) {
  return (
    <div className="flex justify-center p-4">
      <div className="flex justify-between w-1/4">
        <div className="flex flex-col justify-center items-center">
          <strong className="border-b-4 border-[#36A2EB] text-2xl">
            {value.ndvi.toFixed(1)}
          </strong>
          <span className="text-lg">Ndvi</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <strong className="border-b-4 border-[#FF6384] text-2xl">
            {`${value.accumGDD.toFixed(1)} C`}
          </strong>
          <span className="text-lg">Accum GDD</span>
        </div>
        <div className="flex  flex-col justify-center items-center">
          <strong className="border-b-4 border-[#FF9F40] text-2xl">
            {`${value.accumrainfall.toFixed(1)} mm`}
          </strong>
          <span className="text-lg">Accum rainfall</span>
        </div>
      </div>
    </div>
  );
}
