import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daftar Murid | CekRek",
};

export default function StudentsAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
