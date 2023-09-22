import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Header from "@/containers/homepage/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  ${inter.className}`}
    >
      <Layout>
        <Header />
      </Layout>
    </main>
  );
}
