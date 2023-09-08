import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import { BarChartData, BarChartProps } from "./types";

const BarChart: React.FC<BarChartProps> = ({
  dataset,
  height = 6,
  radius = 3,
  animation = false,
}) => {
  const transformInput = (input: BarChartData[]) => {
    let value = 0;

    return input.flatMap((item) => {
      const { color, current, max } = item;
      if (current === max) {
        value += current;
        return { color, value, range: false };
      }
      if (current === 0) {
        value += max;
        return { color, value, range: true };
      }
      const nextValue = value + current;
      value += max;
      return [
        { color, value: nextValue, range: false },
        { color, value, range: true },
      ];
    });
  };
  const totalMax = dataset.reduce((sum, cur) => sum + cur.max, 0);
  return (
    <BarChartContainer height={height}>
      {transformInput(dataset).map((item, index) => (
        <React.Fragment key={index + new Date().getTime()}>
          <BarChartItemContainer width={(item.value / totalMax) * 100}>
            <BarChartItem
              radius={radius}
              height={height}
              color={item.color}
              range={item.range}
              animation={animation}
            >
              <Circle color={item.color} height={height} />
            </BarChartItem>
          </BarChartItemContainer>
        </React.Fragment>
      ))}
    </BarChartContainer>
  );
};

const BarChartContainer = styled.div<{ height: number }>`
  position: relative;
  display: flex;
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: #2e2e3e;
  border-radius: 3px;
  overflow: hidden;
`;

const BarChartItemContainer = styled.div<{ width: number }>`
  position: absolute;
  width: ${(props) => props.width}%;
  z-index: ${(props) => Math.ceil(1000 / props.width)};
`;

const BarChartItem = styled.div<{
  radius: number;
  height: number;
  color: string;
  range?: boolean;
  animation?: boolean;
}>`
  height: ${(props) => props.height}px;
  width: 100%;
  background-color: ${(props) => (props.range ? "#2e2e3e" : props.color)};
  border-radius: ${(props) => props.radius}px;
  ${(props) =>
    props.animation &&
    css`
      animation: reveal 1s cubic-bezier(0.4, 0, 0.5, 1);
    `};
  @keyframes reveal {
    from {
      clip-path: inset(0 100% 0 0);
    }

    to {
      clip-path: inset(0 0 0 0);
    }
  }
`;

const Circle = styled.div<{ color: string; height: number }>`
  position: absolute;
  right: 0;
  width: ${(props) => props.height}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  z-index: 999;
`;

export { BarChart };
