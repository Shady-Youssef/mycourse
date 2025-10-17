import { League_Spartan  } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import toast, { Toaster } from 'react-hot-toast';
import ClientToaster from "./_components/ClientToaster/ClientToaster";




const leagueSpartan  = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata = {
  title: "My Course ",
  description: "Developed By Shady Youssef",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
             <ClientToaster />
        {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
