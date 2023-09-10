import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { UserButton } from "@clerk/nextjs";

const NavBar: FC = ({}) => {
  return (
    <div className="fixed top-0 inset-x-0 h-[60px] bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/home">
          <Image
            alt="logo"
            src="/assets/trello-logo.png"
            width={100}
            height={40}
          />
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
