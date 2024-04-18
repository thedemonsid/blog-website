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
    <nav className=" bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/create"
            >
              Create Blog
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
