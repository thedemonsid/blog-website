import { NextResponse, NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
export default withAuth(
  function middleware(req, res, next) {
    const pathName = req.nextUrl.pathname;
    const token = req.nextauth.token;

    console.log(pathName, token);
    const authorizedEmails = ["siddheshshrirame@gmail.com"];

    if (
      pathName.startsWith("/editor") &&
      !authorizedEmails.includes(token.email)
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/editor"],
};
