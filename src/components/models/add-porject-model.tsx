"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createProject } from "@/app/_actions/project";
import { useTransition } from "react";

export const AddProject = () => {
  const [isPanding, startTransition] = useTransition();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[200px] h-[100px] rounded-sm bg-gray-300 hover:bg-gray-400 cursor-pointer flex justify-center items-center">
          <p className="text-xl text-black">Add</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          action={(e) =>
            startTransition(() => {
              createProject({
                tag: e.get("tag")?.toString() ?? "",
                title: e.get("title")?.toString() ?? "",
              });
            })
          }
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                title
              </Label>
              <Input id="name" name="title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                tag
              </Label>
              <Input id="username" name="tag" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {isPanding ? "loading..." : "Create project"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
