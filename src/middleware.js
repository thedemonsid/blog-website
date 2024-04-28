import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const pathName = req.nextUrl.pathname;
    const email = req.nextauth.token?.email;
    if (
      pathName.startsWith("/editor") &&
      email !== "siddheshshrirame@gmail.com"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, //check if token is present
    },
  }
);
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/editor"],
};
