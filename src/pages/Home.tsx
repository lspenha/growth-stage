import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  ChartResponse,
  ChartResponseFormat,
  ChartSubtitleValues
} from "../utils/interfaces/chart";
import { ChartComponent, ChartSubtitle } from "../components/Chart";
import { api } from "../services/api";

function Home() {
  const [chartResponse, setChartResponse] = useState<ChartResponseFormat>();

  const [chartSubtitleResponse, setChartSubtitleResponse] =
    useState<ChartSubtitleValues>();

  useEffect(() => {
    const formatData = async () => {
      const { data } = await api.get<ChartResponse[]>("api_example.json");

      setChartResponse({
        degree_days: data.map(value => value.degree_days),
        time: data.map(value => format(new Date(value.time * 1000), "MMMM dd")),
        precipitation: data.map(value => value.precipitation),
        ndvi: data.map(value => value.ndvi)
      });

      setChartSubtitleResponse({
        ndvi: data.reduce(function (accumulator, object) {
          return accumulator + object.ndvi;
        }, 0),
        accumGDD: data.reduce(function (accumulator, object) {
          return accumulator + object.degree_days;
        }, 0),
        accumrainfall: data.reduce(function (accumulator, object) {
          return accumulator + object.precipitation;
        }, 0)
      });
    };
    formatData();
  }, []);

  return (
    <div className="p-16">
      <div className="divide-y-2">
        <h1 className="text-[60px] mb-4">Talhão 1</h1>
        {chartSubtitleResponse && (
          <ChartSubtitle value={chartSubtitleResponse} />
        )}
      </div>
      <div className="border-4 border-sky-500 p-3">
        {chartResponse && (
          <ChartComponent
            labels={chartResponse.time}
            type={"line"}
            chartTitle={"GrowthStage"}
            dataSets={[
              {
                label: "Ndvi",
                data: chartResponse.ndvi
              },
              {
                label: "GDD",
                data: chartResponse.degree_days
              },
              {
                label: "Rainfall",
                data: chartResponse.precipitation
              }
            ]}
            lineYTitle={"°C"}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
