import React from "react";
import styled from "@emotion/styled";
import { BarChart, LineChart, LineChartArea } from "./index";

export default {
  title: "차트",
  component: BarChart,
  parameters: {
    componentSubtitle: "Chart 컴포넌트",
  },
};

const generateData = (length: number) => {
  const dataArray = Array.from({ length }, (_, index) => {
    const x = (1689637136 + 60 * index).toString();
    const y = (Math.random() * (1.01 - 0.99) + 0.99).toFixed(3);
    return { x, y };
  });
  return dataArray;
};
const dataset = generateData(25);

export const barChart = () => {
  return (
    <ChartWrapper>
      <BarChart
        dataset={[
          { color: "chocolate", current: 40, max: 40 },
          { color: "orange", current: 10, max: 20 },
          { color: "salmon", current: 0, max: 30 },
          { color: "tomato", current: 10, max: 10 },
        ]}
      />
    </ChartWrapper>
  );
};

export const lineChart = () => {
  return (
    <ChartWrapper>
      <LineChartArea
        chart={<LineChart dataset={dataset} height={150} />}
        xAxis={["1689637136", "1689637856", "1689638576"]}
        yAxis={["17", "18.5", "20"]}
        unit="$"
        period="hour"
      />
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  width: 500px;
`;
