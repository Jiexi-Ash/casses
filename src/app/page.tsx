import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CreateCase from "@/components/form/CreateCase";
import OpenCases from "@/components/Cards/OpenCases";
import ClosedCases from "@/components/Cards/ClosedCases";
import AssignedCasses from "@/components/Cards/AssignedCasses";
import ClosedMonth from "@/components/Cards/MonthClosed";

const openCases = [
  {
    id: 1001,
    title: "Missing Module",
    date: "2021-09-01",
    createdBy: "Lance Jiexi",
    status: "Open",
  },
  {
    id: 1002,
    title: "Missing Module",
    date: "2023-09-01",
    createdBy: "Lance Jiexi",
    status: "In Progress",
  },
  {
    id: 1003,
    title: "Missing TimeTable",
    date: "2023-07-01",
    createdBy: "Lance Davis",
    status: "Open",
  },
  {
    id: 1004,
    title: "Missing Module",
    date: "2023-09-01",
    createdBy: "Lance Jiexi",
    status: "In Progress",
  },
  {
    id: 1005,
    title: "Missing TimeTable",
    date: "2023-07-01",
    createdBy: "Lance Davis",
    status: "Open",
  },
  {
    id: 1006,
    title: "Missing Module",
    date: "2023-09-01",
    createdBy: "Lance Jiexi",
    status: "In Progress",
  },
  {
    id: 1007,
    title: "Missing TimeTable",
    date: "2023-07-01",
    createdBy: "Lance Davis",
    status: "Open",
  },
  {
    id: 1008,
    title: "Missing Module",
    date: "2023-09-01",
    createdBy: "Lance Jiexi",
    status: "In Progress",
  },
  {
    id: 1009,
    title: "Missing TimeTable",
    date: "2023-07-01",
    createdBy: "Lance Davis",
    status: "Open",
  },
  {
    id: 1010,
    title: "Missing Module",
    date: "2023-09-01",
    createdBy: "Lance Jiexi",
    status: "In Progress",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24 py-12">
      <h2 className="text-3xl font-bold tracking-tight block">Overview</h2>
      <div className="flex justify-end w-full">
        <CreateCase />
      </div>
      <div className="w-full grid grid-cols-4 gap-x-4 mt-10">
        <AssignedCasses />
        <OpenCases />
        <ClosedCases />

        <ClosedMonth />
      </div>
      <div className="border mt-10 rounded-lg p-6">
        <div className="">
          <Input
            type="search"
            placeholder="Search for a casse..."
            className="w-[300px] bg-inherit border  placeholder:text-gray-300 text-black"
          />
        </div>
        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {openCases.map((openCase) => (
              <TableRow key={openCase.id}>
                <TableCell>{openCase.id}</TableCell>
                <TableCell>{openCase.title}</TableCell>
                <TableCell>{openCase.date}</TableCell>
                <TableCell>{openCase.createdBy}</TableCell>
                <TableCell>{openCase.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
