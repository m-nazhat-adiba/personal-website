import Layout from "@/components/common/layout";
import Header from "@/components/homepage/Header";
import About from "@/components/homepage/About";
import Works from "@/components/homepage/Works";
import Skills from "@/components/homepage/Skills";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-24 mb-8">
        <Header />
        <About />
        <Works />
        <Skills />
      </div>
    </Layout>
  );
}
