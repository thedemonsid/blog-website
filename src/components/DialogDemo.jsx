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
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Save the Blog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Brief</DialogTitle>
          <DialogDescription>
            Please fill in the details to save the blog.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              defaultValue="@peduarte"
              className="col-span-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
