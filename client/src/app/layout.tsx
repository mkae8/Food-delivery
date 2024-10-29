import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { MuiProvider } from "@/provider/MuiProvider";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { UserProvider } from "@/provider/UserProvider";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Food Delivery ",
  description: "Generated by create Pine Sheeps",
};

import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense>
          <ToastContainer />
          <UserProvider>
            <MuiProvider>
              <Header />
              <div
                style={{
                  marginTop: 50,
                  width: "1200px",
                  margin: "auto",
                  minHeight: "100vh",
                }}
              >
                {children}
              </div>
              <Footer />
            </MuiProvider>
          </UserProvider>
        </Suspense>
      </body>
    </html>
  );
}
