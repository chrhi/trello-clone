import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="w-full min-h-screen ">
      <nav className="w-full border-b h-[55px] flex justify-between">
        <div className="w-[700px] ml-4 h-full flex justify-start items-center gap-x-4">
          <Image
            src={"/assets/trello-logo.png"}
            alt="trello logo"
            width={100}
            height={40}
          />

          <Button
            size="lg"
            className="h-full text-md bg-white shadow-none text-black"
          >
            features
          </Button>

          <Button
            size="lg"
            className="h-full text-md bg-white shadow-none text-black"
          >
            solutions
          </Button>

          <Button
            size="lg"
            className="h-full text-md bg-white shadow-none text-black"
          >
            plans
          </Button>

          <Button
            size="lg"
            className="h-full text-md bg-white shadow-none text-black"
          >
            pricing
          </Button>

          <Button
            size="lg"
            className="h-full  text-md bg-white shadow-none text-black"
          >
            Resources
          </Button>
        </div>

        <div className="w-[400px] flex items-center justify-end h-full">
          <Button
            size="lg"
            className="h-full w-[150px] text-lg bg-white shadow-none text-black"
          >
            log in
          </Button>
          <Button
            size="lg"
            className="bg-blue-500 text-white h-full shadow-none rounded-none text-lg w-[250px]"
          >
            get trello for free
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default page;
