import type { Metadata } from "next";
import NextAuthProvider from "@/utils/NextAuthProvider";
import DashboardTeacher from "@/components/layouts/DashboardTeacher";

export const metadata: Metadata = {
    title: "Dasbor Guru | CekRek",
    description: "First page of CekRek",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NextAuthProvider>
            <DashboardTeacher>{children}</DashboardTeacher>
        </NextAuthProvider>
    );
}
