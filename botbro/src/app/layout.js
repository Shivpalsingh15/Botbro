import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/components/ReduxProvider"; // Import the client-side ReduxProvider
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useSelector } from "react-redux";
import Main from "@/components/Main";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Botbro.io",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const { showSideBar } = useSelector((store) => store.dashboard);
  // console.log("showSideBar:", showSideBar);
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
            <div>
               <Main children={children} />
             </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
