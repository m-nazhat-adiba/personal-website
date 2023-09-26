import Image from "next/image";
import Layout from "@/components/layout";
import Header from "@/containers/homepage/Header";
import About from "@/containers/homepage/About";

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
    </Layout>
  );
}
