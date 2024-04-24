// "use client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { signIn, signOut, useSession } from "next-auth/react";
// export default function Nav() {
//   const { data: session } = useSession();

//   const handleSignInClick = () => {
//     signIn();
//   };
//   const handleSignOutClick = () => {
//     signOut();
//   };
//   return (
//     <nav className="text-white bg-gray-800 border-b-2 border-yellow-200 dark:bg-gray-950/90 font-techy">
//       <div className="w-full px-4 mx-auto max-w-7xl">
//         <div className="flex items-center justify-between h-14">
//           <Link className="flex items-center" href="/">
//           <h1 className="text-xl sm:text-3xl"> Vdsidously</h1>
//           </Link>
//           <nav className="flex flex-col gap-4 text-white md:flex-row sm:flex-row">
//             <Link
//               className="flex items-center font-medium transition-colors text-md hover:underline"
//               href="/"
//             >
//               Home
//             </Link>
//             <Link
//               className="flex items-center font-medium transition-colors text-md hover:underline"
//               href="/about"
//             >
//               About
//             </Link>
//             <Link
//               className="flex items-center font-medium transition-colors text-md hover:underline"
//               href="/blogs"
//             >
//               Blogs
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             {session ? (
//               <Button size="sm" onClick={handleSignOutClick}>
//                 Sign Out
//               </Button>
//             ) : (
//               <Button size="sm" onClick={handleSignInClick}>
//                 Sign In
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

// OG code above  do not touch. use in sos !
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Nav() {
  const { data: session } = useSession();
  const handleSignInClick = () => {
    signIn();
  };
  const handleSignOutClick = () => {
    signOut();
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="text-white bg-gray-800 border-b-2 border-yellow-200 dark:bg-gray-950/90 font-techy">
      <div className="w-full px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-14">
          <Link className="flex items-center" href="/">
            <h1 className="text-xl sm:text-3xl">Vdsidously</h1>
          </Link>
          <nav className="flex-col hidden gap-4 text-white md:flex md:flex-row sm:flex-row">
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
          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 -ml-10 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-2">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Blogs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

