import Layout from "@/components/layout";
import Header from "@/containers/homepage/Header";
import About from "@/containers/homepage/About";
import Works from "@/containers/homepage/Works";
import Skills from "@/containers/homepage/Skills";

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
