export interface ChartResponse {
  degree_days: number;
  time: number;
  precipitation: number;
  ndvi: number;
}

export interface ChartResponseFormat {
  degree_days: number[];
  time: string[];
  precipitation: number[];
  ndvi: number[];
}

export interface ChartSubtitleValues {
  ndvi: number;
  accumGDD: number;
  accumrainfall: number;
}
