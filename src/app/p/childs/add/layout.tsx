import CustomSuspense from "@/components/elements/suspsenses/CustomSuspense";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tambah Anak | CekRek",
};

export default function AddChild({ children }: { children: React.ReactNode }) {
    return <CustomSuspense>{children}</CustomSuspense>;
}
