import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 h-screen">
      <Skeleton className="h-[250px] w-[500px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default loading;
