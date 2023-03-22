import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={inter.className}>
            <h1 className="text-xl font-bold">Hello world!</h1>
        </main>
    );
}
