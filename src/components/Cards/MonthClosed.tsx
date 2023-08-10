import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ClosedMonth() {
  return (
    <Card className="max-h-[150px]">
      <CardHeader className="flex justify-between pb-2">
        <CardTitle className="text-sm font-medium capitalize">
          Closed this month
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">0</div>
      </CardContent>
    </Card>
  );
}

export default ClosedMonth;
