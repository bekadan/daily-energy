import {ModalsProvider} from "@mantine/modals";
import { MantineProvider } from "@mantine/core";
import {Notifications} from "@mantine/notifications";
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
        <MantineProvider>
          <ModalsProvider/>
          <Notifications/>
          <Layout>{children}</Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
