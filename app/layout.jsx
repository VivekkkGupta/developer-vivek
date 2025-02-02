import "@/assets/styles/globals.css";
import { Inter } from 'next/font/google'
import { APP_NAME } from "@/lib/constants";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `${APP_NAME}`,
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black flex justify-center`} suppressHydrationWarning>
        <div className="w-[1068px]">
          {children}
        </div>
      </body>
    </html>
  );
}
