import { NextResponse } from "next/server";
import dbConnect from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";
// Getting the particular blog by Id
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
          message: "No Blog found with this Id",
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
// Updating the blogs by Id
export async function POST(request, context) {
  try {
    await dbConnect();
    const body = await request.json();
    const { params } = context;
    const id = params.blogId;
    let blog;
    try {
      blog = await Blog.findByIdAndUpdate(id, body);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Blog not found and not able to update",
          success: false,
        },
        { status: 400 }
      );
    }
    if (!blog) {
      return NextResponse.json(
        {
          message: "No blog found with this ID",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Blog found and updated",
        newBlog: blog,
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
// Deleting the Blogs by Id
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
          message: "No Blog with this Id exists",
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
