import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-neutral-100 pt-20">
      <Image
        src={"/assets/trello-logo.png"}
        alt="trello logo"
        width={300}
        height={80}
      />
    </div>
  );
}

export default Page;
