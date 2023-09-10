import { AddProject } from "@/components/models/add-porject-model";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";
import { FC } from "react";

const page: FC = async ({}) => {
  const user: User | null = await currentUser();

  if (!user) return;

  const projects = await db.project.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <div className="container max-w-7xl h-fit mx-auto  mt-[60px] flex flex-col ">
      <p className="text-2xl text-gray-900 font-bold ">My Boards</p>

      <div className="w-full p-8 pl-0 my-8 min-h-[300px] h-fit flex gap-x-4 flex-wrap">
        {projects.map((item) => {
          return (
            <Link
              href={`/home/project/${item.id}`}
              className="w-[200px] h-[100px] rounded-sm bg-indigo-600 cursor-pointer flex items-center justify-center p-4"
            >
              <p className="text-white truncate font-bold text-xl text-start">
                {item.title}
              </p>
            </Link>
          );
        })}
        <AddProject />
      </div>
    </div>
  );
};

export default page;
