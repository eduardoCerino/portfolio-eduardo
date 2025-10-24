import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Cerino | Desarrollador Web",
  description: "Eduardo Cerino is a Web Developer who is passionate about building solutions and contributing to open source communities",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Eduardo Cerino", "Desarrollador Web", "Desarrollador", "Web", "Developer", "Portfolio", "Projects", "Skills", "Experience", "Education", "Contact"],
  authors: [{ name: "Eduardo Cerino", url: "https://eduardocerino.com" }],
  creator: "Eduardo Cerino",
  publisher: "Eduardo Cerino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500&f[]=clash-grotesk@200,300,400,500&display=swa" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
