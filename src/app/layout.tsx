import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.css";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "black",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ""),
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  openGraph: {
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/images/cover.png`],
    type: "website",
  },
  twitter: {
    title: process.env.NEXT_PUBLIC_APP_NAME,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    card: "summary_large_image",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/images/cover.png`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark">
        <main>{children}</main>
        <footer className="container">
          <hr className="border-secondary m-0"></hr>
          <div className="hstack justify-content-center py-4 text-light">
            <span className="small opacity-75">
              Made with ❤️ by&nbsp;
              <a
                href="https://nextjs.org/"
                rel="noreferrer"
                target="_blank"
                className="link-light"
              >
                Nextjs
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
