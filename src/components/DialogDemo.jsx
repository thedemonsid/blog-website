"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createBlog } from "@/helpers/createData";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { updateUser } from "@/helpers/updateData";
export function DialogDemo({ editor }) {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false); 
  const handleSave = () => {
    const userId = session.user.id;
    const blogData = {
      title: title,
      description: description,
      content: editor,
      author: userId,
    };

    createBlog(blogData).then((createdBlog) => {
      updateUser(userId, { $push: { blogsWritten: createdBlog?.newBlog?._id } });
      setOpen(false);
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <button
  className="px-4 py-2 text-base text-red-500 bg-yellow-300 rounded-md shadow-sm font-techy hover:bg-slate-400"
>
  Save and publish
</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] themed-gray themed-border">
        <DialogHeader>
          <DialogTitle>Conformation</DialogTitle>
          <DialogDescription className="themed-color-2">
           Before you save, can you tell us a lil-bit about blog ?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="Title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              defaultValue="Pedro Duarte"
              className="col-span-3 themed-background themed-border focus:focused-border"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              defaultValue="@peduarte"
              className="col-span-3 themed-background themed-border focus:focused-border"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="themed-color" type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
