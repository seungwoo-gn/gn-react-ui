/// <reference types="react" />
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
declare enum Period {
    "hour" = "24\uC2DC\uAC04",
    "week" = "1\uC8FC",
    "month" = "1\uAC1C\uC6D4",
    "year" = "1\uB144",
    "full" = "\uC804\uCCB4"
}
interface LineChartAreaProps {
    chart: React.ReactNode;
    xAxis: string[];
    yAxis: string[];
    period: keyof typeof Period;
    unit?: string;
}
export type { BarChartProps, BarChartData, LineChartProps, LineChartAreaProps };
