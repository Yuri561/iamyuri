export type WeatherWidgetData = {
  location: string;
  temp: number;
  high: number;
  low: number;
  condition: string;
  icon: string;
};

export type MarketsWidgetData = {
  dow: number;
  sp500: number;
  nasdaq: number;
};

export type TrafficWidgetData = {
  location: string;
  status: "Light" | "Moderate" | "Heavy";
};

export type AlarmsWidgetData = {
  active: number;
  highest: "Low" | "Medium" | "High";
};

export type HomeWidget =
  | { ID: "weather"; type: "weather"; data: WeatherWidgetData | null }
  | { ID: "markets"; type: "markets"; data: MarketsWidgetData }
  | { ID: "traffic"; type: "traffic"; data: TrafficWidgetData }
  | { ID: "alarms"; type: "alarms"; data: AlarmsWidgetData };

const HomeWidgets: HomeWidget[] = [
  { ID: "weather", type: "weather", data: null },

  {
    ID: "markets",
    type: "markets",
    data: { dow: 0.59, sp500: 0.76, nasdaq: -1.12 },
  },

  {
    ID: "traffic",
    type: "traffic",
    data: { location: "Raleigh", status: "Moderate" },
  },

  {
    ID: "alarms",
    type: "alarms",
    data: { active: 2, highest: "Medium" },
  },
];

export default HomeWidgets;
