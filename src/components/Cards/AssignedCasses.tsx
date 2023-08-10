import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AssignedCasses() {
  return (
    <Card className="bg-green-400 text-white">
      <CardHeader className="flex justify-between pb-2">
        <CardTitle className="text-sm font-medium capitalize">
          Assigned to me
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">0</div>
      </CardContent>
    </Card>
  );
}

export default AssignedCasses;
