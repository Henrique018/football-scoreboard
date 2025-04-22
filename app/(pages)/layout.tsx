import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/navigation";
import MobileNavigation from "@/components/mobile-navigation";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Football scoreboard",
    description:
        "Check game results, standings and schedules for brazilian football",
    creator: "Henrique Oliveira",
    openGraph: {
        title: "Football scoreboard",
        description:
            "Check game results, standings and schedules for brazilian football",
        url: "",
        siteName: "Football scoreboard",
        locale: "en_US",
        type: "website",
    },
    authors: [
        {
            name: "Henrique Oliveira",
            url: "",
        },
    ],
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navigation />
                <main className="flex flex-col min-h-screen">{children}</main>
                <MobileNavigation />
            </body>
        </html>
    );
}
