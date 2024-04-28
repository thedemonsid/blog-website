import { NextResponse } from "next/server";
import dbConnect from "@/dbConfig/dbConfig";
import { User } from "@/models/blogModel";
// Getting the particular user by Id
export async function GET(request, context) {
  try {
    await dbConnect();

    const { params } = context;
    const id = params.userId;
    let user;
    try {
      user = await User.findById(id);
    } catch (error) {
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        { status: 400 }
      );
    }
    if (!user) {
      return NextResponse.json(
        {
          message: "No User found with this Id",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "User found",
        User: user,
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
// Updating the user by Id
export async function POST(request, context) {
  try {
    await dbConnect();
    const body = await request.json();
    const { params } = context;
    const id = params.userId;
    let user;
    try {
      user = await User.findByIdAndUpdate(id, body);
    } catch (error) {
      return NextResponse.json(
        {
          message: "User not found and not able to update",
          success: false,
        },
        { status: 400 }
      );
    }
    if (!user) {
      return NextResponse.json(
        {
          message: "No user found with this ID",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "User found and updated",
        newUser: user,
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
// Deleting the Users by Id
export async function DELETE(request, context) {
  try {
    await dbConnect();

    const { params } = context;
    const id = params.userId;
    let user;
    try {
      user = await User.findByIdAndDelete(id);
    } catch (error) {
      return NextResponse.json(
        {
          message: "User was not able to delete",
          success: false,
        },
        { status: 400 }
      );
    }
    if (!user) {
      return NextResponse.json(
        {
          message: "No User with this Id exists",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "User Deleted Successfully",
        deletedUser: user,
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
