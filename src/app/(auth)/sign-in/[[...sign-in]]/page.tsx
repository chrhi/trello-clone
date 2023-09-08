import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="w-full h-full flex flex-col gap-y-6 items-center bg-neutral-100 pt-20">
      <Image
        src={"/assets/trello-logo.png"}
        alt="trello logo"
        width={200}
        height={60}
      />
      <SignIn />
    </div>
  );
}

export default Page;
