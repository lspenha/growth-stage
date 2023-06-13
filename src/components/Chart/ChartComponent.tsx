import Chart, {
  ChartData,
  ChartDataset,
  ChartType,
  DefaultDataPoint
} from "chart.js/auto";
import { useRef, useEffect } from "react";

interface ChartComponentProps<
  T,
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>
> {
  dataSets: ChartDataset<TType, TData>[];
  labels: T[];
  type: ChartType;
  chartTitle: string;
  lineYTitle: string;
}

export function ChartComponent<T>({
  labels,
  type,
  dataSets,
  chartTitle,
  lineYTitle
}: ChartComponentProps<T>) {
  const formatData = (): ChartData => {
    return {
      labels: labels,
      datasets: dataSets
    };
  };

  const chartRef = useRef<Chart | null>(null);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: type,
        data: formatData(),
        options: {
          responsive: true,
          interaction: {
            mode: "index",
            intersect: false
          },
          plugins: {},
          scales: {
            y: {
              type: "linear",
              display: true,
              position: "left",
              title: {
                display: true,
                text: lineYTitle
              }
            }
          }
        }
      });
    }
  };

  return (
    <div className="self-center">
      <div className="overflow-hidden">
        <canvas ref={canvasCallback}></canvas>
      </div>
    </div>
  );
}
