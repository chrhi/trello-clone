"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

export const createProject = async ({
  title,
  tag,
}: {
  title: string;
  tag: string;
}) => {
  const user: User | null = await currentUser();
  if (!user) return;
  await db.project.create({
    data: {
      title,
      tag,
      backgroud: "blue",
      userId: user?.id,
    },
  });

  // here revalidate the path
  revalidatePath("/home");
};
