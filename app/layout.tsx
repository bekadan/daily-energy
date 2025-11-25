import { ModalsProvider } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { Metadata } from "next";
import Layout from "from/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Energy Jobs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MantineProvider
          theme={{
            fontSizes: {
              xl: "14px",
              lg: "14px",
              md: "14px",
              sm: "14px",
              xs: "14px",
            },
          }}
        >
          <ModalsProvider />
          <Notifications />
          <Layout>{children}</Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
