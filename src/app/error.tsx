"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface errorAbdullahProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorAbdullahProps> = ({ error, reset }) => {
  return (
    <div className="w-screen h-screen overflow-hidden justify-center flex flex-col items-center">
      <p className="text-3xl font-bold text-gray-900">
        Sorry , something went wrong
      </p>
      <div className="w-[400px] mt-10 h-[100px] flex items-center justify-between px-4">
        <Button
          size="lg"
          className="bg-blue-500 hover:bg-blue-700"
          onClick={reset}
        >
          try again
        </Button>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
        >
          {" "}
          go to home page
        </Link>
      </div>
    </div>
  );
};

export default error;
