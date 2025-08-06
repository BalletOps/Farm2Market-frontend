import type { Metadata } from "next";
import "./globals.css";
import { NextAppProvider } from "@toolpad/core/nextjs";
import LinearProgress from "@mui/material/LinearProgress";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Suspense } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Navigation } from "@toolpad/core/AppProvider";

export const NAVIGATION: Navigation = [
  // ...
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "home",
    title: "Home",
    icon: <DashboardIcon />,
  },

  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  // ...
];

const BRANDING = {
  title: "Farm2Market",
  // logo: "/logo.png", // Ensure logo.png exists in /public
  homeUrl: "/dashboard",
};

export const metadata: Metadata = {
  title: "Farm2Market",
  description: "A platform for connecting farmers and consumers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Suspense fallback={<LinearProgress />}>
            <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
              {children}
            </NextAppProvider>
          </Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
