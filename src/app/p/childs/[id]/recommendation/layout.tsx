import CustomSuspense from "@/components/elements/suspsenses/CustomSuspense";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rekomendasi Aktifitas Nama | CekRek",
};

export default function AddClassLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <CustomSuspense>{children}</CustomSuspense>;
}
