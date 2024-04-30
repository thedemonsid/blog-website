import Footer from "@/components/Footer";
import "./globals.css";
import Nav from "@/components/Nav";
import favicon from "../../public/favicon.ico";
export const metadata = {
  title: "Vdsidously",
  description: "A deep dive code blog ran by 2 passionate developers",
  icons: [{ rel: 'icon', url: favicon.src }],
};

import Provider from "@/components/providers";
// import Head from "next/head";
export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className="">
      <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
        
        <Provider>
          <div className="flex flex-col gap-4s" >
            <Nav></Nav>
            <div>{children}</div>
            <Footer></Footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}
