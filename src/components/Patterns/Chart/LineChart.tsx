import styled from "@emotion/styled";
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ChartPoint } from "../../Foundation/Icon/ChartPoint";
import { LineChartProps } from "./types";

const convertDate = (v: string) => {
  return new Date(Number(v) * 1000);
};

const LineChart: React.FC<LineChartProps> = ({
  dataset,
  height,
  full,
  target,
}) => {
  const dataSeries = [
    {
      name: "line chart",
      data: dataset.map((data) => Number(data.y)),
    },
  ];
  const options = {
    markers: {
      size: 0,
      colors: ["#FB40FF"],
      strokeColors: ["#BA40FF"],
      strokeWidth: 3,
      hover: {
        size: 3,
      },
      image: {
        src: ChartPoint,
        width: 16,
        height: 16,
      },
    },
    chart: {
      width: "100%",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      background: "transparent" as const,
      zoom: {
        enabled: false,
      },
    },
    grid: { show: false },
    stroke: {
      curve: "straight" as const,
      width: 2,
      colors: ["#7700EA"],
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        type: "vertical" as const,
        colorStops: [
          [
            {
              offset: 0,
              color: "rgba(79, 35, 255, 0.24)",
            },
            {
              offset: 100,
              color: "rgba(79, 35, 255, 0)",
            },
          ],
        ],
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: dataset.map((data) => data.x),
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
      crosshairs: {
        width: 1,
        stroke: {
          color: "#47008c",
          dashArray: 5,
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark" as const,
      custom: ({
        series,
        seriesIndex,
        dataPointIndex,
        w,
      }: {
        series: any[]; // series 변수의 타입을 숫자 배열로 지정
        seriesIndex: number;
        dataPointIndex: number;
        w: {
          config: ApexOptions;
          globals: any;
        };
      }) => {
        const date = new Date(w.globals.categoryLabels[dataPointIndex] * 1000);
        const amPm = date.getHours() < 12 ? "오전" : "오후";
        const time = `${date.getHours().toString().padStart(2, "0")}:${date
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
        return (
          `<div class="custom-tooltip">` +
          `<div class="content">${
            target
              ? `${Number(
                  series[seriesIndex][dataPointIndex],
                ).toLocaleString()} ${target}`
              : series[seriesIndex][dataPointIndex]
          }</div>` +
          `<div class="footer">${
            full
              ? `${`${convertDate(
                  w.globals.categoryLabels[dataPointIndex],
                ).getFullYear()}. ${(
                  convertDate(
                    w.globals.categoryLabels[dataPointIndex],
                  ).getMonth() + 1
                )
                  .toString()
                  .padStart(2, "0")}. ${convertDate(
                  w.globals.categoryLabels[dataPointIndex],
                )
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`}`
              : `${amPm} ${time}`
          }</div>` +
          `</div>`
        );
      },
    },
  };

  return (
    <LineChartContainer>
      <Chart
        type="area"
        options={options}
        series={dataSeries}
        width="100%"
        height={height}
      />
    </LineChartContainer>
  );
};

const LineChartContainer = styled.div`
  color: rgba(98, 98, 125, 1);
  font-size: 11px;

  .apexcharts-tooltip.apexcharts-theme-dark {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
  }

  .apexcharts-tooltip .custom-tooltip {
    margin: 10.5px;
    padding: 6px 16px;
    border-radius: 6px;
    background: rgba(186, 64, 255, 0.6);
    font-size: 12px;
    backdrop-filter: blur(1.5px);

    .content {
      color: #ececf9;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
    }

    .footer {
      color: #c999f7;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
    }
  }

  flex-basis: 100%;
`;

export { LineChart };
