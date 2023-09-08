import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./index";
import { Pagination } from "../../Navigation/Pagination";
import { Typography } from "../../Foundation/Typography";
import { nanoid } from "nanoid";

export default {
  title: "테이블",
  component: Table,
  parameters: {
    componentSubtitle: "Table 컴포넌트",
  },
};

interface SampleProps {
  name: string;
  age: number;
  mbti: string;
}

const sample: SampleProps[] = [
  { name: "백세일", age: 32, mbti: "INTJ" },
  { name: "여시아", age: 29, mbti: "INFP" },
  { name: "오찬복", age: 29, mbti: "INFP" },
  { name: "최혜린", age: 29, mbti: "ESFP" },
  { name: "설승우", age: 26, mbti: "ISTJ" },
];

export const defaultTable = () => {
  return (
    <Table
      pagination={
        <Pagination
          list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
          currentPage={0}
          setCurrentPage={() => 1}
          itemsPerPage={10}
        />
      }
    >
      <TableHead bordered>
        <TableRow isHeader>
          <TableCell backgroundColor="#dfdcc4" justify="center">
            이름
          </TableCell>
          <TableCell backgroundColor="#dfdcc4">나이</TableCell>
          <TableCell backgroundColor="#dfdcc4">MBTI</TableCell>
        </TableRow>
      </TableHead>
      <TableBody bordered>
        {sample.map((row, index) => {
          return (
            <TableRow key={nanoid()}>
              <TableCell justify="center">
                <Typography size={26}>{row.name} </Typography>
              </TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.mbti}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
