import dbConnect from "@/dbConfig/dbConfig";
import { User } from "@/models/blogModel";
import { NextResponse } from "next/server";
export async function PUT(request) {
  try {
    const body = await request.json();
    await dbConnect();
    const newUser = new User(body);
    try {
      await newUser.save();
    } catch (error) {
      return NextResponse.json(
        {
          message: "Failed adding the user to DB",
          success: false,
          error: error,
        },
        { status: 403 }
      );
    }
    return NextResponse.json(
      {
        message: "Successfully added the user",
        success: true,
        newUser,
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
    let users;
    try {
      users = await User.find();
    } catch (error) {
      return NextResponse.json(
        {
          message: "Error while getting users from DB",
          success: false,
        },
        { status: 400 }
      );
    }
    if (!users) {
      return NextResponse.json(
        {
          message: "Users not found",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Users found",
        Users: users,
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
