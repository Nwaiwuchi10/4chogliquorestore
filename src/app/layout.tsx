import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-cinzel",
    weight: ["400", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: " 4CHOG Liquors",
    description: "Elevating the art of wine distribution with curated selections from the world's finest vineyards.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${cinzel.variable} ${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
