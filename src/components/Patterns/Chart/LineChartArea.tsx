import styled from "@emotion/styled";
import React from "react";
import { LineChartAreaProps } from "./types";

function formatNumberWithK(num: string): string {
  const value = Number(num);
  let fixedLength = 0;
  if (num.split(".")[1]) {
    fixedLength = num.split(".")[1].length;
  }
  if (value < 1000) {
    return num;
  }
  if (value < 1000000) {
    return fixedLength > 0
      ? `${Number(value.toFixed(fixedLength).split(".")[0]) / 1000}.${
          value.toFixed(fixedLength).split(".")[1]
        }k`
      : `${Number(value / 1000)}k`;
  }
  if (value < 1000000000) {
    return fixedLength > 0
      ? `${Number(value.toFixed(fixedLength).split(".")[0]) / 1000000}.${
          value.toFixed(fixedLength).split(".")[1]
        }M`
      : `${Number(value / 1000000).toFixed(1)}M`;
  }
  return fixedLength > 0
    ? `${Number(value.toFixed(fixedLength).split(".")[0]) / 1000000000}.${
        value.toFixed(fixedLength).split(".")[1]
      }M`
    : `${Number(value / 1000000000).toFixed(1)}B`;
}

const LineChartArea: React.FC<LineChartAreaProps> = ({
  chart,
  xAxis,
  yAxis,
  period,
  unit,
}) => {
  const convertDate = (v: string) => {
    return new Date(Number(v) * 1000);
  };
  const getXAxis = (): string[] => {
    switch (period) {
      case "hour":
        return xAxis.map(
          (item) =>
            `${convertDate(item).getHours().toString().padStart(2, "0")}시`,
        );
      case "week":
        return xAxis.map(
          (item) =>
            `${convertDate(item).getMonth() + 1}월 ${convertDate(
              item,
            ).getDate()}일`,
        );
      case "month":
        return xAxis.map(
          (item) =>
            `${convertDate(item).getMonth() + 1}월 ${convertDate(
              item,
            ).getDate()}일`,
        );
      case "year":
        return xAxis.map(
          (item) =>
            `${convertDate(item).getMonth() + 1}월 ${convertDate(
              item,
            ).getDate()}일`,
        );
      case "full":
        return xAxis.map(
          (item) =>
            `${convertDate(item).getFullYear()}. ${(
              convertDate(item).getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}. ${convertDate(item)
              .getDate()
              .toString()
              .padStart(2, "0")}`,
        );
      default:
        return xAxis.map(
          (item) =>
            `${convertDate(item).getMonth() + 1}월 ${convertDate(
              item,
            ).getDate()}일`,
        );
    }
  };
  return (
    <LineChartAreaContainer>
      <FlexContainer>
        {chart}
        <XAxis>
          {getXAxis().map((item, index) => (
            <div key={index + new Date().getTime()}>{item}</div>
          ))}
        </XAxis>
      </FlexContainer>
      <YAxis>
        {yAxis.map((item, index) => (
          <div key={index + new Date().getTime()}>
            {unit && item && unit}
            {formatNumberWithK(item)}
          </div>
        ))}
      </YAxis>
    </LineChartAreaContainer>
  );
};

const LineChartAreaContainer = styled.div`
  display: flex;
`;

const FlexContainer = styled.div`
  flex-basis: 100%;
`;

const XAxis = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid #272730;
  font-size: 11px;
  color: #62627d;
`;
const YAxis = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-left: 13px;
  font-size: 11px;
  color: #62627d;
`;

export { LineChartArea };
