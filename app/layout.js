import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/CustomeComp/Navigation";
import SocialSharePage from "@/components/CustomeComp/SocialShare";
import { ThemeProvider } from "@/components/CustomeComp/theme-provider";
import Footer from "@/components/CustomeComp/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Random Coders",
  description:
    "Random Coders - 💡 Get involved, learn, and build together! A hub for developers seeking coding help, project ideas, and collaboration opportunities. Our blog categorizes projects across various domains, making it easy to find the right challenge for your skill level. Whether you're a beginner or an experienced developer, you can explore, contribute, and collaborate on open-source projects.",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav>
            <Navigation />
          </nav>
          <main className="container mx-auto max-w-7xl my-3 min-h-screen">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
