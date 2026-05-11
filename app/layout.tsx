import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Nav} from "./components/nav";
import {Footer} from "./components/footer";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Amiga North Thames",
    description: "Amiga North Thames is a computer user group, based in North East London (U.K.) which was started back in January 1999.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>){
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} w-full h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <Nav/>
                <main className="flex-1">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}