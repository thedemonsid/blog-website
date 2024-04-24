import dbConnect from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";
export async function PUT(request) {
  try {
    const body = await request.json();
    await dbConnect();
    const newBlog = new Blog(body);
    try {
      await newBlog.save();
    } catch (error) {
      return NextResponse.json(
        {
          message: "Failed adding the product to DB",
          success: false,
          error: error,
        },
        { status: 403 }
      );
    }
    return NextResponse.json(
      {
        message: "Successfully added the product",
        success: true,
        newBlog,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error,
      },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await dbConnect();
    let blogs;
    try {
      blogs = await Blog.find();
    } catch (error) {
      return NextResponse.json(
        {
          message: "Erro While getting blogs from DB",
          success: false,
        },
        { status: 400 }
      );
    }
    if (!blogs) {
      return NextResponse.json(
        {
          message: "Blogs not found",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Blogs found",
        Blogs: blogs,
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
