import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth({
  async handler(req, res, next) {
    const { pathname, token } = req;

    const authorizedEmails = ["siddheshshrirame@gmail.com"];

    if (
      pathname.startsWith("/editor") &&
      !authorizedEmails.includes(token.email)
    ) {
      return NextResponse.rewrite("/denied");
    }

    return next();
  },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/editor"],
};
