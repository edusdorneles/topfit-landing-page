import { Inter } from "next/font/google";
import { MainBanner, HealthWellness } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={inter.className}>
            <MainBanner />
            <HealthWellness />
        </main>
    );
}
