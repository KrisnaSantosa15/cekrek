import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daftar Rekomendasi | CekRek",
};

export default function RecommendationsAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
