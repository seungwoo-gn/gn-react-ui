interface BarChartData {
  color: string;
  current: number;
  max: number;
}

interface BarChartProps {
  dataset: BarChartData[];
  height?: number;
  radius?: number;
  animation?: boolean;
}

interface LineChartProps {
  dataset: {
    x: string;
    y: string;
  }[];
  height: number;
  full?: boolean;
  target?: string;
}

enum Period {
  "hour" = "24시간",
  "week" = "1주",
  "month" = "1개월",
  "year" = "1년",
  "full" = "전체",
}

interface LineChartAreaProps {
  chart: React.ReactNode;
  xAxis: string[];
  yAxis: string[];
  period: keyof typeof Period;
  unit?: string;
}

export type { BarChartProps, BarChartData, LineChartProps, LineChartAreaProps };
