"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import type { Case } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";

function OpenCases() {
  const { data, isLoading } = useQuery({
    queryKey: ["cases", "open"],
    queryFn: async () => {
      const { data } = await axios.get("/api/case/open");
      console.log(data);

      return data as Case[];
    },
  });

  const caseLength = data?.length ?? 0;

  return (
    <Card className="max-h-[150px]">
      <CardHeader className="flex justify-between pb-2">
        <CardTitle className="text-sm font-medium capitalize">
          Open cases
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{caseLength}</div>
      </CardContent>
    </Card>
  );
}

export default OpenCases;
