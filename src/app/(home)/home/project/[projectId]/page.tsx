import { FC } from "react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { db } from "@/lib/db";
import InnerNavBar from "@/components/layout/InnerNavBar";
import { DragDropContext } from "react-beautiful-dnd";

interface PageProps {
  params: {
    projectId: string;
  };
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const page: FC<PageProps> = async ({ params }) => {
  if (!params.projectId) return notFound();

  const project = await db.project.findUnique({
    where: {
      id: params.projectId,
    },
  });

  return (
    <div className=" w-full min-h-full h-fit overflow-x-auto bg-indigo-600  ">
      <InnerNavBar
        projectId={project?.id ?? ""}
        projectName={project?.title ?? ""}
      />
    </div>
  );
};

export default page;
