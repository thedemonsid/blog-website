import { NextResponse } from "next/server";
import dbConnect from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";

export async function GET(request, context) {
  try {
    await dbConnect();

    const { params } = context;
    const id = params.blogId;
    let blog;
    try {
      blog = await Blog.findById(id);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Blog not found",
          success: false,
        },
        { status: 400 }
      );
    }
    if (!blog) {
      return NextResponse.json(
        {
          message: "Blog not found",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Blog found",
        Blog: blog,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
export async function DELETE(request, context) {
  try {
    await dbConnect();

    const { params } = context;
    const id = params.blogId;
    let blog;
    try {
      blog = await Blog.findByIdAndDelete(id);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Blog was not able to delete",
          success: false,
        },
        { status: 400 }
      );
    }
    if (!blog) {
      return NextResponse.json(
        {
          message: "Blog not found",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Blog Deleted Successfully",
        deletedBlog: blog,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
