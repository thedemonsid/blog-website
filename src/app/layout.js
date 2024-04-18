import "./globals.css";
import Nav from "@/components/Nav";
export const metadata = {
  title: "Our Blog Website",
  description: "Generated by VedaSid",
};
import Provider from "@/components/providers";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="flex flex-col gap-4">
            <Nav></Nav>
            <div>{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
