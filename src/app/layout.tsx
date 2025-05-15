import type {Metadata} from "next";
import "./styles/index.scss";
import {inter, playfair} from "@/app/ui/fonts/fonts";
import React from "react";

export const metadata: Metadata = {
    title: "Yastrebova",
    description: "Advocat",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body  className={`${playfair.variable} ${inter.variable}`}>

        {children}

        </body>
        </html>
    );
}
