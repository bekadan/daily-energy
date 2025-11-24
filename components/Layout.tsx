"use client";
import { AppShell } from "@mantine/core";
import SiteHeader from "./headers/SiteHeader";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <SiteHeader />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
