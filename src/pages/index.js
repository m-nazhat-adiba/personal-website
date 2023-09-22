import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  ${inter.className}`}
    >
      <Layout />
    </main>
  );
}
