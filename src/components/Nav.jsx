"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Nav() {
  const { data: session } = useSession();

  const handleSignInClick = () => {
    signIn();
  };
  const handleSignOutClick = () => {
    signOut();
  };
  return (
    <nav className="text-white bg-gray-800 border-b-2 border-yellow-200 dark:bg-gray-950/90 font-techy">
      <div className="w-full px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-14">
          <Link className="flex items-center" href="/">
          <h1 className="text-3xl"> Vdsidously</h1>
          </Link>
          <nav className="hidden gap-4 text-white md:flex">
            <Link
              className="flex items-center font-medium transition-colors text-md hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex items-center font-medium transition-colors text-md hover:underline"
              href="/about"
            >
              About
            </Link>
            <Link
              className="flex items-center font-medium transition-colors text-md hover:underline"
              href="/blogs"
            >
              Blogs
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {session ? (
              <Button size="sm" onClick={handleSignOutClick}>
                Sign Out
              </Button>
            ) : (
              <Button size="sm" onClick={handleSignInClick}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
