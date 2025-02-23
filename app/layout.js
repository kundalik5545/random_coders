import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/CustomeComp/theme-provider";
import Navigation from "@/components/CustomeComp/Navigation";
import SocialSharePage from "@/components/CustomeComp/SocialShare";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Random Coders",
  description:
    "Random Coders - 💡 Get involved, learn, and build together! a hub for developers seeking coding help, project ideas, and collaboration opportunities. Our blog categorizes projects across various domains, making it easy to find the right challenge for your skill level. Whether you're a beginner or an experienced developer, you can explore, contribute, and collaborate on open-source projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}   antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav>
            <Navigation />
          </nav>
          <main className="container mx-auto my-3">{children}</main>
          <footer>
            <SocialSharePage />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
